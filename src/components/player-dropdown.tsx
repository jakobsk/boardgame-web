import styles from '../styles/RegisterForm.module.css';

const PlayerDropdown = ({ users, register, elementId }) => {
  const options = users.map(({ name, id }) => (
    <option value={id} key={id}>
      {name}
    </option>
  ));

  return (
    <select
      className={styles.formInput}
      {...register(elementId, { required: 'Påkrevd' })}
      id={elementId}
      type="text"
    >
      {options}
    </select>
  );
};

export default PlayerDropdown;
