// - フレームワーク =======================================================================================================
import React, {memo, useEffect, useRef, useState, VFC} from "react";

// - アセット ============================================================================================================
import styles from "./CardsFlow.module.scss";

// - 子コンポーネント =====================================================================================================
import { Card } from "../Card/Card";



// - コンポーネント =======================================================================================================
export const CardsFlow: VFC = memo(() => {

  const ref = useRef<HTMLDivElement | null>(null);
  const [ isDisplayScrollingRightButton, setIsDisplayScrollingRightButton ] = useState(true);
  const [ isDisplayScrollingLeftButton, setIsDisplayScrollingLeftButton ] = useState(false);


  let scrollingContainer!: HTMLDivElement;

  const scrollLeft = (): void => {
    scrollingContainer.scroll({
      left: scrollingContainer.scrollLeft - scrollingContainer.clientWidth,
      behavior: "smooth"
    });

    setIsDisplayScrollingRightButton(true);

    if (scrollingContainer.scrollLeft <= scrollingContainer.clientWidth) {
      setIsDisplayScrollingLeftButton(false);
    }
  }

  const scrollRight = (): void => {
    scrollingContainer.scroll({
      left: scrollingContainer.scrollLeft + scrollingContainer.clientWidth,
      behavior: "smooth"
    });

    setIsDisplayScrollingLeftButton(true);

    if (
      scrollingContainer.scrollWidth - (scrollingContainer.scrollLeft + scrollingContainer.clientWidth) <=
      scrollingContainer.clientWidth
    ) {
      setIsDisplayScrollingRightButton(false);
    }
  }


  useEffect(() => {
    scrollingContainer = ref!.current!;
  },[ isDisplayScrollingRightButton, isDisplayScrollingLeftButton ])

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


      <div ref={ref} className={styles.scrollingContainer}>
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
