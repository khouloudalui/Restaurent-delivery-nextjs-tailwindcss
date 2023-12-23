"use client";
import { useCartStore } from "@/utils/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const CartIcon = () => {
  const { totalItems } = useCartStore();
  useEffect(() => {
    useCartStore.persist.rehydrate();
  },[]);
  console.log(totalItems)
  return (
    <Link href="/cart" className="flex items-center gap-4 text-red-500">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="cart.png" fill />
      </div>
      <span> Cart({totalItems})</span>
    </Link>
  );
};
export default CartIcon;
//FIXME:cart link dnst center
