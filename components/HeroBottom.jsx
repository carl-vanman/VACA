import styles from "./Hero.module.css";
import utilStyles from "../styles/utils.module.css";

import Image from "next/image";
import ButtonOutlined from "./ButtonOutlined";

const BottomHero = () => {
    return (
        <section className={styles.wrapper}>
            <div
                className={`${styles.bgImageContainer} ${styles.captionContainer}`}
            >
                <Image
                    src="/images/image-6.jpg"
                    alt="Calm large image of vase with reeds"
                    layout="fill"
                    quality={100}
                    objectPosition="center 35%"
                />
                <h2
                    className={`${utilStyles.headingXl} ${utilStyles.clrLight}`}
                >
                    Get in touch
                </h2>
                <address>
                    <p
                        className={`${utilStyles.headingLg} ${utilStyles.clrLight} ${utilStyles.noItalic}`}
                    >
                        47 Chandos Place, London, WC2N 4HS
                    </p>
                </address>
                <ButtonOutlined>Contact us</ButtonOutlined>
            </div>
        </section>
    );
};

export default BottomHero;
