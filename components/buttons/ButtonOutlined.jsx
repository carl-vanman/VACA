import styles from "./ButtonOutlined.module.css";

const ButtonOutlined = ({ children }) => {
    return (
        <button className={styles.buttonOutlined} onClick={() => {}}>
            {children}
        </button>
    );
};

export default ButtonOutlined;
