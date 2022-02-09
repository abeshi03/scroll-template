// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./Card.module.scss";


export const Card: VFC = memo((props) => {

  return (
    <div className={styles.card}>

      <div
        className={styles.image}
        role="img"
        style={{ backgroundImage: "url('https://dummyimage.com/100x100/03488d/fff')"}}
      ></div>

      <div className={styles.title}>テストタイトル</div>

      <div className={styles.userChip}>

        <div
          className={styles.image}
          role="img"
          style={{ backgroundImage: "url('https://dummyimage.com/100x100/03488d/fff')"}}
        ></div>

        <div className={styles.userName}>テスト 太郎</div>

      </div>

    </div>
  );
});
