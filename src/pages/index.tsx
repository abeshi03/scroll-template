/* - フレームワーク ---------------------------------------------------------------------------------------------------- */
import type { NextPage } from 'next'

/* - アセット --------------------------------------------------------------------------------------------------------- */
import styles from "./TopPage.module.scss";

/* - 子コンポーネント --------------------------------------------------------------------------------------------------- */
import { CardsFlow } from "../components/CardsFlow/CardsFlow";


const Home: NextPage = () => {
  return (
    <>
      <h1 className={styles.space}></h1>
      <div className={styles.topPage}>
        <CardsFlow/>
      </div>
    </>
  )
}

export default Home
