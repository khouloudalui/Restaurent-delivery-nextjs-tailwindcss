"use client";
import { ProductType } from "@/types/types";
import { useCartStore } from "@/utils/store";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Price = ({ product }: { product: ProductType }) => {
  const [productPrice, setProductPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<
    | {
        title: string;
        additionalPrice: number;
      }
    | undefined
  >(undefined);
  console.log(selectedOption);
  const { addToCart } = useCartStore();
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  const handleClick = (option: { additionalPrice: number; title: string }) => {
    setProductPrice(Number(product.price) + option.additionalPrice);
    setSelectedOption(option);
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
  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: productPrice,
      optionTitle: selectedOption ? selectedOption.title : undefined,
      quantity: quantity,
    });
    toast.success("The product added to your cart");
  };
  console.log("productpriceee", productPrice);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
        {(productPrice * quantity).toFixed(2)}
      </h2>
      <div className="flex gap-4">
        {product.options?.map((option) => (
          <button
            key={option.title}
            className="p-2 ring-1 ring-red-400 rounded-md focus:bg-red-500 focus:text-white"
            onClick={() => handleClick(option)}
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
        <button
          className="uppercase  bg-red-500 text-white p-3  w-56 rounded-sm font-bold ring-2 ring-red-500"
          onClick={() => handleCart()}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
