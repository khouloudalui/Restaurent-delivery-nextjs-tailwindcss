"use client"
import { OrderType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const OrdersPage = () => {


    const { data: session, status } = useSession()
    const router = useRouter()
    if (status === "unauthenticated") {
        router.push("/")
    }

    const { isLoading, error, data } = useQuery({
        queryKey: ['orders'],
        queryFn: () => fetch("http://localhost:3000/api/orders").then(res => res.json())

    })

    if (isLoading || status === "loading") return "loading ..."

    console.log("dataaaa", data)
    return (
        <div className="p-4 lg:px-20 xl:px-40 h-screen">
            <table className="w-full border-separate border-spacing-3">
                <thead>
                    <tr className="text-left  ">
                        <th className="hidden md:block">Order ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th className="hidden md:block">Products</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item: OrderType) => (
                        <tr className="text-sm md:text-base bg-red-50" key={item.id}>
                            <td className="hidden md:block py-6 px-1">445555555</td>
                            <td className="py-6 px-1">19.45.4</td>
                            <td className="py-6 px-1">60dt</td>
                            <td className="hidden md:block py-6 px-1">big burger(7)</td>
                            <td className="py-6 px-1">on the way (approx 10min)</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default OrdersPage;
