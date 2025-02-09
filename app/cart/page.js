"use client";

import { age, name } from "./data";

export default function Cart() {
  let cartData = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {cartData.map((data, index) => (
        <CartItem itemData={data} key={data} />
      ))}
      <Banner title="롯데카드" />
      <Banner title="삼성카드" />
      <div style={{ textAlign: "center" }}>
        <Button />
        <Button theme="red" />
        <Button theme="blue" />
      </div>
    </div>
  );
}

function Banner({ title }) {
  return <h5>{title} 결제 행사중</h5>;
}

function Button({ theme }) {
  theme = !!theme ? theme : "grey";
  return (
    <button style={{ background: theme, padding: 10, color: "#fff" }}>
      버튼
    </button>
  );
}

function CartItem({ itemData }) {
  return (
    <div className="cart-item">
      <p>{itemData}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
