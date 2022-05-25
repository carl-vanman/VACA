import { useState } from "react";
import useSwr from "swr";

import styles from "./FilterableProductTable.module.css";
import utilStyles from "../styles/utils.module.css";

import ButtonContained from "./ButtonContained";
import ProductTable from "./ProductTable";
import ProductCard from "./ProductCard";

// Helperfunction for sort
import { helperFunction } from "../helperFunctions";

// Fetch function
const fetcher = (url) => fetch(url).then((res) => res.json());

const FilterableProductTable = () => {
    // Get Product listData
    const { data, error } = useSwr("/api/products", fetcher);

    const [perPage, setPerPage] = useState(4);

    const [sortByPrice, setSortByPrice] = useState("DESC");

    //Sort handler function
    function sortProductsByPrice() {
        if (sortByPrice === "ASC") {
            helperFunction.sortByPriceASC(data);
            setSortByPrice("DESC");
        } else if (sortByPrice === "DESC") {
            helperFunction.sortByPriceDESC(data);
            setSortByPrice("ASC");
        }
    }

    //React component composition
    const productTable = (
        <ProductTable>
            {data?.slice(0, perPage).map((product) => {
                return <ProductCard key={product.id} product={product} />;
            })}
        </ProductTable>
    );

    return (
        <section className={styles.wrapper}>
            <h2 className={utilStyles.headingXl}>View products</h2>
            <div className={styles.filter}>
                <ButtonContained action={sortProductsByPrice}>
                    Price
                </ButtonContained>
                <ButtonContained>New</ButtonContained>
            </div>
            {error ? (
                <p
                    className={`${utilStyles.body} ${utilStyles.clrLight} ${styles.loading}`}
                >
                    Failed to load products
                </p>
            ) : !data ? (
                <p
                    className={`${utilStyles.body} ${utilStyles.clrLight} ${styles.loading}`}
                >
                    Loading...
                </p>
            ) : (
                <>
                    {productTable}

                    {perPage < data.length && (
                        <ButtonContained
                            action={() => {
                                setPerPage((prev) => prev + 4);
                            }}
                        >
                            View more
                        </ButtonContained>
                    )}
                </>
            )}
        </section>
    );
};

export default FilterableProductTable;
