"use client";
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  console.log(products);
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  const handleCheckout = async () => {
    if (!session) {
      router.push("/login");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Not Paid!",
            userEmail: session.user.email,
          }),
        });
        const data = await res.json();
        console.log("data of cart in handlecheckout",data)
        router.push(`/payment/${data.id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className=" h-[calc(100vh-9rem)] md:h-[calc(100vh-8rem)] flex flex-col text-red-500 overflow-hidden lg:flex-row">
      <div className="h-1/2 p-4 flex flex-col lg:h-full lg:w-2/3 lg:px-20">
        <div className="">
          {products.map((item) => (
            <div
              className="flex items-center justify-between mb-4 bg-red-100 rounded-lg shadow-md p-2 "
              key={item.id}
            >
              {item.img && (
                <Image src={item.img} alt="" width={100} height={100} />
              )}
              <div>
                <h1 className="uppercase font-bold text-xl">
                  {item.title} x {item.quantity}
                </h1>
                <span>{item.optionTitle}</span>
              </div>
              <h2 className="font-bold">{item.price}dt</h2>
              <span
                className="cursor-pointer"
                onClick={() => removeFromCart(item)}
              >
                X
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="h-1/2 p-6  bg-red-100 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 lg:px-11 xl:px-10 2xl:text-xl 2xl:gap-6">
        <div className="flex  justify-between">
          <span>subtotal ({totalItems})</span>
          <span>${totalPrice}</span>
        </div>

        <div className="flex  justify-between">
          <span>service coat</span>
          <span>7dt</span>
        </div>

        <div className="flex  justify-between">
          <span>delivary</span>
          <span>5dt</span>
        </div>

        <hr className="my-2" />

        <div className="flex  justify-between">
          <span>total</span>
          <span>{totalPrice}dt</span>
        </div>

        <button
          className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end "
          onClick={handleCheckout}
        >
          checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
