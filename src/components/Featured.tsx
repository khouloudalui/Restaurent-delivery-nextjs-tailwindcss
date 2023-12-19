import { featuredProducts } from "@/data";
import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";



const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store"
  })
  console.log(res)
  if (!res.ok) {
    throw new Error("Failed")
  }
  return res.json()
}
const Featured = async () => {
  const featuredProducts: ProductType[] = await getData()
  console.log(featuredProducts)

  return (
    <div className="w-screen scrollbar-hide overflow-x-scroll ">
      <div className="w-max flex">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[70vh] flex flex-col items-center justify-around p-8 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] hover:bg-orange-100"
          >
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image
                  src={item.img}
                  alt="p1.png"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-xl font-bold uppercase">{item.title}</h1>
              <p className="p-4 2xl:p-9">{item.desc}</p>
              <span className="text-xl font-bold">{item.price}</span>
              <button className=" text-white  px-3 py-3 bg-red-500 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
