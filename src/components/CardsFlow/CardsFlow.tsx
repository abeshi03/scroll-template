// - フレームワーク =======================================================================================================
import React, { memo, useRef, useState, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./CardsFlow.module.scss";

// - 子コンポーネント =====================================================================================================
import { Card } from "../Card/Card";



// - コンポーネント =======================================================================================================
export const CardsFlow: VFC = memo(() => {

  const scrollingContainer = useRef<HTMLDivElement>(null);
  const [ isDisplayScrollingRightButton, setIsDisplayScrollingRightButton ] = useState(true);
  const [ isDisplayScrollingLeftButton, setIsDisplayScrollingLeftButton ] = useState(false);



  const scrollLeft = (): void => {
    scrollingContainer.current!.scroll({
      left: scrollingContainer.current!.scrollLeft - scrollingContainer.current!.clientWidth,
      behavior: "smooth"
    });

    setIsDisplayScrollingRightButton(true);

    /* スクロールした幅 <= 最大画面幅 */
    if (scrollingContainer.current!.scrollLeft <= scrollingContainer.current!.clientWidth) {
      setIsDisplayScrollingLeftButton(false);
    }
  }

  const scrollRight = (): void => {
    scrollingContainer.current!.scroll({
      left: scrollingContainer.current!.scrollLeft + scrollingContainer.current!.clientWidth,
      behavior: "smooth"
    });

    setIsDisplayScrollingLeftButton(true);


    /* overFlowも含めた全ての幅 - (スクロール幅 + 最大画面幅) <= 最大画面幅 */
    /* 例 2360 - (774 + 774) <= 774 ← falseが返る為非表示 */
    if (
      scrollingContainer.current!.scrollWidth - (scrollingContainer.current!.scrollLeft + scrollingContainer.current!.clientWidth) <=
      scrollingContainer.current!.clientWidth
    ) {
      setIsDisplayScrollingRightButton(false);
    }
  }


  return (
    <div className={styles.cardsFlow}>

      <div
        className={`${styles.btn} ${styles.scrollingLeftButton}`}
        onClick={scrollLeft}
        style={{display: isDisplayScrollingLeftButton ? "inline-block" : "none"}}
        role="button"
        aria-label="カードを左へスクロールする">{'<'}
      </div>
      <div
        className={`${styles.btn} ${styles.scrollingRightButton}`}
        style={{display: isDisplayScrollingRightButton ? "inline-block" : "none"}}
        onClick={scrollRight}
        role="button"
        aria-label="カードを右へスクロールする">{'>'}
      </div>


      <div ref={scrollingContainer} className={styles.scrollingContainer}>
        {[...Array(10)].map((_, index) => (
          <Card
            key={index}
            className={styles.card}
          />
        ))}
      </div>

    </div>
  );
});
