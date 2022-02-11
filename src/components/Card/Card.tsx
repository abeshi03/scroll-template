// - フレームワーク =======================================================================================================
import React, { memo, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./Card.module.scss";

type Props = {
  className?: string;
}

/* eslint-disable-next-line react/display-name */
export const Card: VFC<Props> = memo((props) => {

  const { className } = props;

  return (
    <div className={`${styles.card} ${className}`}>

      <div
        className={styles.thumbnail}
        role="img"
        style={{ backgroundImage: "url('https://dummyimage.com/100x100/03488d/fff')"}}
      ></div>

      <div className={styles.title}>テストタイトル</div>

      <div className={styles.userChip}>

        <div
          className={styles.userImage}
          role="img"
          style={{ backgroundImage: "url('https://dummyimage.com/100x100/03488d/fff')"}}
        ></div>

        <div className={styles.userName}>テスト 太郎</div>

      </div>

    </div>
  );
});
