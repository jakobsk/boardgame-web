import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import styles from '../styles/RegisterForm.module.css';
import Button from 'react-bootstrap/Button';
import { noParamNoCallback } from '../types/function-types';
import PlayerDropdown from './player-dropdown';
import { User } from '../models/user';
import { registerGame } from '../pages/api/games';

//TODO: This number should be fetched from backend maybe since every game has different allowed players

const maxPlayers = 6;

const mapToDto = (data, gameId: number) => {
  // kind of weird, but the last character of the key is the index of the player
  // so we can use that to create the array of players
  const userSessionScores = Object.keys(data)
    .filter((key) => key.startsWith('name'))
    .map((key) => {
      const index = key[key.length - 1];
      return {
        name: data[key],
        score: data[`rank${index}`],
      };
    });

  return { gameId, userSessionScores };
};

function RankingForm({
  toggleModal,
  users,
  gameId,
}: {
  users: User;
  toggleModal: noParamNoCallback;
  gameId: number;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [inputFields, setInputFields] = useState([{}]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const onSubmit = async (data) => {
    toggleModal();
    const dto = mapToDto(data, gameId);
    await registerGame(dto);
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
          const elementRank = `rank${index}`;
          return (
            <>
              <div key={index} className={styles.center}>
                <label htmlFor={elementName} className={styles.playerNumber}>
                  Spiller {index + 1}:
                </label>
                <PlayerDropdown users={users}></PlayerDropdown>
                <input
                  type="number"
                  id={elementRank}
                  placeholder="Plassering"
                  {...register(elementRank, { required: 'Påkrevd' })}
                  className={styles.formInput}
                />

                <hr></hr>
              </div>
              <div className={styles.center}>
                {errors[elementName] && (
                  <span className={styles.error}>Navn mangler</span>
                )}
                {errors[elementRank] && (
                  <span className={styles.error}>Plassering mangler</span>
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

export default RankingForm;
