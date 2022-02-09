// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./CardsFlow.module.scss";

// - 子コンポーネント =====================================================================================================
import { Card } from "../Card/Card";


export const CardsFlow: VFC = memo(() => {


  return (
    <div className={styles.cardsFlow}>
      <Card
        className={styles.card}
      />
    </div>
  );
});
