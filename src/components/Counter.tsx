/** @format */

import { useState } from "react";
import styles from "./counte.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button
        className={styles.button}
        onClick={increment}
      ></button>
    </div>
  );
};
