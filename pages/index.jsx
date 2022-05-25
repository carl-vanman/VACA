import styles from "../styles/Home.module.css";

import HeroTop from "../components/HeroTop";
import SegmentBarTop from "../components/SegmentBarTop";
import FilterableProductTable from "../components/FilterableProductTable";
import HeroBottom from "../components/HeroBottom";
import SegmentBarBottom from "../components/SegmentBarBottom";

import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Vaca</title>
                <meta name="description" content="VACA by Kreaktionsbyrån" />
            </Head>
            <header>
                <SegmentBarTop />
            </header>
            <main className={styles.main}>
                <HeroTop />
                <FilterableProductTable />
                <HeroBottom />
            </main>
            <footer>
                <SegmentBarBottom />
            </footer>
        </div>
    );
}
