import styles from '../styles/RegisterForm.module.css';

const PlayerDropdown = ({ users }) => {
  const options = users.map(({ name, id }) => (
    <option value={name} key={id}>
      {name}
    </option>
  ));

  return <select className={styles.formInput}>{options}</select>;
};

export default PlayerDropdown;
