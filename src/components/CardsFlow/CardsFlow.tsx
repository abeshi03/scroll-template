// - フレームワーク =======================================================================================================
import React, { memo, useEffect, useRef, VFC } from "react";

// - アセット ============================================================================================================
import styles from "./CardsFlow.module.scss";

// - 子コンポーネント =====================================================================================================
import { Card } from "../Card/Card";


export const CardsFlow: VFC = memo(() => {

  let scrollContainer: HTMLDivElement;
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollLeft = (): void => {
    scrollContainer.scroll({
      left: scrollContainer.scrollLeft - scrollContainer.clientWidth,
      behavior: "smooth"
    });
  }

  const scrollRight = (): void => {
    scrollContainer.scroll({
      left: scrollContainer.scrollLeft + scrollContainer.clientWidth,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    scrollContainer = ref!.current!;
  },[])

  return (
    <>
      <div className={styles.cardsFlow}>
        <div
          ref={ref}
          className={styles.scrollingContainer}
        >

          {[...Array(10)].map((_, index) => (
            <Card
              key={index}
              className={styles.card}
            />
          ))}

        </div>
      </div>
      <button onClick={scrollLeft}>左スクロール</button>
      <button onClick={scrollRight}>右スクロール</button>
    </>
  );
});
