import styles from '../styles/Button.module.scss';

const Button = ({ children }) => (
  <button className={styles.btn}>{children}</button>
);
export default Button;
