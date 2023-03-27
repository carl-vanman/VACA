import styles from "../styles/Home.module.css";

import HeroTop from "../components/heros/HeroTop";
import HeaderBar from "../components/header/HeaderBar";
import FilterableProductTable from "../components/products/FilterableProductTable";
import HeroBottom from "../components/heros/HeroBottom";
import FooterBar from "../components/footer/FooterBar";

import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Vaca</title>
                <meta name="description" content="VACA by Kreaktionsbyrån" />
            </Head>
            <header>
                <HeaderBar />
            </header>
            <main className={styles.main}>
                <HeroTop />
                <FilterableProductTable />
                <HeroBottom />
            </main>
            <footer>
                <FooterBar />
            </footer>
        </div>
    );
}
