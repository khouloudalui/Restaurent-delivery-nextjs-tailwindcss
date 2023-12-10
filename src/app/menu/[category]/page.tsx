import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const getData = async (category: string) => {
  const res = await fetch(`http://localhost:3000/api/products?cat=${category}`, {    //ctrl+² for toglle quotes
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error("Failed")
  }
  return res.json()
}
type Props = {
  params: { category: string }
}
const CategoryPage = async ({ params }: Props) => {

  const products: ProductType[] = await getData(params.category)

  return (
    <div className="flex flex-wrap ">
      {products.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group"
        >
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          <div className="flex justify-between items-center font-bold ">
            <h1 className="text-xl uppercase">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">{item.price}</h2>
            <button className="bg-red-400 rounded-md p-2 text-white uppercase text-sm hidden group-hover:block">Add to cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
