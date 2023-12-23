"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";

const DeleteButton = ({ id }: { id: string }) => {
  const { data: session, status } = useSession();
  console.log(session);
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading ...</p>;
  }
  if (status === "unauthenticated" || !session?.user.isAdmin) {
    return;
  }
  const handleDelete=()=>{
    
  }
  return (
    <button className="bg-red-400 p-2 rounded-full absolute top-4 right-4 text-white">
      <MdDeleteForever size={24} onClick={handleDelete}/>
    </button>
  );
};

export default DeleteButton;
