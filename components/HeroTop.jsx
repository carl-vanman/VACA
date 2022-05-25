import styles from "./Hero.module.css";
import utilStyles from "../styles/utils.module.css";

import Image from "next/image";

const HeroTop = () => {
    return (
        <section className={styles.wrapper}>
            <div
                className={`${styles.bgImageContainer} ${styles.captionContainer}`}
            >
                <Image
                    src="/images/image-2.jpg"
                    alt="Modern large image of Serum pipette"
                    layout="fill"
                    quality={100}
                    priority
                    as="image"
                />
                <h2
                    className={`${utilStyles.headingXl} ${utilStyles.clrLight}`}
                >
                    Reinventing the world of beauty
                </h2>

                <p className={`${utilStyles.headingLg} ${utilStyles.clrLight}`}>
                    We believe that through creativity, we are able to develop
                    timeless products, both meaningful and inspirational, to
                    people and their lives.
                </p>
            </div>
        </section>
    );
};

export default HeroTop;
