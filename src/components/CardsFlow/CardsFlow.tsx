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


  let scrollContainer!: HTMLDivElement;

  const scrollLeft = (): void => {
    scrollContainer.scroll({
      left: scrollContainer.scrollLeft - scrollContainer.clientWidth,
      behavior: "smooth"
    });

    console.log("スクロール左！")

    setIsDisplayScrollingRightButton(true);

    if (scrollContainer.scrollLeft <= scrollContainer.clientWidth) {
      setIsDisplayScrollingLeftButton(false);
    }
  }

  const scrollRight = (): void => {
    scrollContainer.scroll({
      left: scrollContainer.scrollLeft + scrollContainer.clientWidth,
      behavior: "smooth"
    });

    setIsDisplayScrollingLeftButton(true);

    if (
      scrollContainer.scrollWidth - (scrollContainer.scrollLeft + scrollContainer.clientWidth) <=
      scrollContainer.clientWidth
    ) {
      setIsDisplayScrollingRightButton(false);
    }
  }


  useEffect(() => {
    scrollContainer = ref!.current!;
  },[ isDisplayScrollingRightButton, isDisplayScrollingLeftButton ])

  return (
    <>
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
    </>
  );
});
