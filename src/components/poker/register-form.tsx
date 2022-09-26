import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from '../../styles/RegisterForm.module.css';
import Button from 'react-bootstrap/Button';
import { noParamNoCallback } from '../../types/function-types';

//TODO: This number should be fetched from backend maybe since every game has different allowed players

const maxPlayers = 10;

function RegisterForm({ toggleModal }: { toggleModal: noParamNoCallback }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [inputFields, setInputFields] = useState([{}]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const onSubmit = (data) => {
    console.log(typeof data);
    toggleModal();
    console.log(data);
  };

  const removePlayer = () => {
    if (inputFields.length > 1) {
      setInputFields([...inputFields.slice(0, inputFields.length - 1)]);
    }
  };

  const addPlayer = () => {
    if (inputFields.length < maxPlayers) {
      setInputFields([...inputFields, {}]);
    } else {
      setShowErrorMessage(true);
    }
  };

  useEffect(() => {
    if (inputFields.length < maxPlayers) {
      setShowErrorMessage(false);
    }
  }, [inputFields]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputFields.map((_, index) => {
          const elementName = `name${index}`;
          const elementProfit = `rank${index}`;
          return (
            <>
              <div key={index} className={styles.center}>
                <label htmlFor={elementName} className={styles.playerNumber}>
                  Spiller {index + 1}:
                </label>
                <input
                  type="text"
                  id={elementName}
                  placeholder="Navn på spiller"
                  {...register(elementName, { required: 'Påkrevd' })}
                  className={styles.formInput}
                />
                <input
                  type="number"
                  id={elementProfit}
                  placeholder="Profitt"
                  {...register(elementProfit, { required: 'Påkrevd' })}
                  className={styles.formInput}
                />

                <hr></hr>
              </div>
              <div className={styles.center}>
                {errors[elementName] && (
                  <span className={styles.error}>Navn mangler</span>
                )}
                {errors[elementProfit] && (
                  <span className={styles.error}>Profitt mangler</span>
                )}
              </div>
            </>
          );
        })}
        <div className={styles.center}>
          <Button variant="dark" className={styles.buttons} type="submit">
            Registrer
          </Button>
          <Button variant="dark" className={styles.buttons} onClick={addPlayer}>
            {' '}
            Legg til spiller
          </Button>
          <Button
            variant="dark"
            className={styles.buttons}
            onClick={removePlayer}
          >
            {' '}
            Fjern spiller
          </Button>
        </div>
      </form>
      {showErrorMessage && (
        <div>Kan ikke legge til mer enn {maxPlayers} spillere</div>
      )}
    </div>
  );
}

export default RegisterForm;
