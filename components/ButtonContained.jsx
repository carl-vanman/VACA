import styles from "./ButtonContained.module.css";

const ButtonContained = ({ children, action }) => {
    return (
        <button className={styles.btnContained} onClick={action}>
            {children}
        </button>
    );
};

export default ButtonContained;
