"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
export default function List() {
  let [productData] = useState(["Tomatoes", "Pasta", "Coconut"]);
  let [count, setCount] = useState(() => productData.map(() => 0));

  const updateCount = (index, value) => {
    setCount((prev) =>
      prev.map((c, i) => (i === index ? Math.max(0, c + value) : c))
    );
  };
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {productData.map((item, index) => {
        return (
          <div className="food" key={item}>
            <img src={`/food${index}.png`} className="food-img" alt="" />
            <h4>{item} $40</h4>
            <span> {count[index]} </span>
            <button onClick={() => updateCount(index, 1)}>+</button>
            <button onClick={() => updateCount(index, -1)}>-</button>
          </div>
        );
      })}
    </div>
  );
}
