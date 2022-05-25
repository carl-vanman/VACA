import styles from "./SegmentBarTop.module.css";

import Image from "next/image";

const TopBar = () => {
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

export default TopBar;
