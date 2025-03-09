import React from "react";
import Order from "../components/Order/Order";
import { useParams } from "react-router-dom";

const OrderPage = () => {
  const { id } = useParams(); // Получение параметра маршрута

  return (
    <>
      <Order id={id} /> {/* Передача ID в компонент Order */}
    </>
  );
};

export default OrderPage;
