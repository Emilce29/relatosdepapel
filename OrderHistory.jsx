import React from "react";

const OrderHistory = ({ orders }) => {
  return (
    <div>
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No past orders</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              Order #{index + 1}: ${order.total} - {order.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
