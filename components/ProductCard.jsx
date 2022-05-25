import styles from "./ProductCard.module.css";
import utilStyles from "../styles/utils.module.css";

import Image from "next/image";

const ProductCard = ({
    product: { title, description, price, image, imageCaption },
}) => {
    return (
        <article className={styles.productCard}>
            <div className={styles.imageContainer}>
                <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    sizes="500px"
                    quality={100}
                    className={imageCaption ? styles.imgDarker : ""}
                />
                {imageCaption && (
                    <p
                        className={`${utilStyles.body} ${utilStyles.clrLight} ${styles.imgCaption}`}
                    >
                        {imageCaption}
                    </p>
                )}
            </div>
            <header>
                <h3 className={utilStyles.headingMd}>{title}</h3>
            </header>
            <p className={utilStyles.body}>{description}</p>
            <p className={utilStyles.body}>€{price}.00</p>
        </article>
    );
};

export default ProductCard;
