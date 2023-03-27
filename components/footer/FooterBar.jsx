import styles from "./FooterBar.module.css";
import utilStyles from "../../styles/utils.module.css";

import Image from "next/image";

const FooterBar = () => {
    return (
        <section className={`${styles.wrapper}`}>
            <Image src="/images/vaca-logo.svg" height={24} width={80} />
            <ul className={styles.flexRow}>
                <li>
                    <p className={utilStyles.body}>Privacy Policy</p>
                </li>
                <li>
                    <p className={utilStyles.body}>Privacy Policy</p>
                </li>
                <li>
                    <p className={utilStyles.body}>Privacy Policy</p>
                </li>
            </ul>
        </section>
    );
};

export default FooterBar;
