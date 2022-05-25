import styles from "./ProductTable.module.css";

const ProductTable = ({ children }) => {
    return <section className={styles.wrapper}>{children}</section>;
};

export default ProductTable;
