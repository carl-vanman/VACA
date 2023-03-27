import styles from "./HeaderBar.module.css";

import Image from "next/image";

const HeaderBar = () => {
    return (
        <section className={styles.wrapper}>
            <Image
                src="/images/vaca-logo.svg"
                alt="Vaca logo"
                height={24}
                width={80}
            />
        </section>
    );
};

export default HeaderBar;
