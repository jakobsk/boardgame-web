import { useEffect, useState } from "react";
import styles from "../styles/RegisterForm.module.css";
import Button from 'react-bootstrap/Button';

// should also get this value form backend
enum players {
  JAKOB = "Jakob Stenersen Kok",
  VEBJORN = "Vebjørn Nordahl Stadsvoll",
  MATHIAS = "Mathias Ackermann",
  ARVID = "Arvid Mildner",
}

//TODO: This number should be fetched from backend maybe since every game has different allowed players

const maxPlayers = 6;

function RankingForm() {
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const removePlayer = () => {
    if (inputFields.length > 1) {
      setInputFields([...inputFields.slice(0,inputFields.length-1)]);
    }
  };

  useEffect(() => {
    if (inputFields.length < maxPlayers) {
      setShowErrorMessage(false);
    }
  }, [inputFields]);

  const addPlayer = () => {
    if (inputFields.length < maxPlayers) {
      setInputFields([...inputFields, { name: "", age: "" }]);
    }else {
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="App">
      <form>
        {inputFields.map((input, index) => {
          return (
            <div key={index} className={styles.inputField}>
              <h5 className={styles.playerNumber}>Spiller {index}: </h5>
              <input name="name" placeholder="Navn" value={input.name} className={styles.formInput}/>
              <input name="age" placeholder="Plassering" value={input.age}  className={styles.formInput}/>
              <hr></hr>
            </div>
          );
        })}
      </form>

      <Button variant="dark" onClick={addPlayer}> Legg til spiller</Button>
      <Button variant="dark" onClick={removePlayer}> Fjern spiller</Button>
      {showErrorMessage && (
        <div>Kan ikke legge til mer enn {maxPlayers} spillere</div>
      )}
    </div>
  );
}

export default RankingForm;
