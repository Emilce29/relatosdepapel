import React from "react";

const OrderSummary = ({ items }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default OrderSummary;
