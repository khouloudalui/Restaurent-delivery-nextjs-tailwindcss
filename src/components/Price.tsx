"use client";
import React, { useState } from "react";

type Props = {
  id: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [productPrice, setProductPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);
  const handleClick = (addoption: number) => {
    setProductPrice(price + addoption);
  };

  const handleIncQuantity = () => {
    if (quantity < 10) {
      setQuantity((prev) => prev + 1);
    }
  };
  const handleDecQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
        ${(productPrice * quantity).toFixed(2)}
      </h2>
      <div className="flex gap-4">
        {options?.map((option) => (
          <button
            key={option.title}
            className="p-2 ring-1 ring-red-400 rounded-md focus:bg-red-500 focus:text-white"
            onClick={() => handleClick(option.additionalPrice)}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex justify-between  w-full p-3 ring-1 ring-red-500">
          <span className="">Quantity</span>
          <div className="flex gap-4 items-center">
            <button onClick={() => handleDecQuantity()}>{"<"}</button>
            <span>{quantity}</span>
            <button onClick={() => handleIncQuantity()}>{">"}</button>
          </div>
        </div>
        <button className="uppercase  bg-red-500 text-white p-3  w-56 rounded-sm font-bold ring-2 ring-red-500">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
