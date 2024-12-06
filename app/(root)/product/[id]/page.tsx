"use client";
import ProductError from "@/app/componets/productError";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Services {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
}

export default function Page() {
  const [services, setServices] = useState<Services[]>([]);

  async function getServices() {
    try {
      const response = await fetch("http://localhost:3000/api/services");
      const json = await response.json();
      setServices(json.services || []);
      console.log({ json });
    } catch (error) {
      console.error(error);
      setServices([]);
    }
  }
  useEffect(() => {
    getServices();
    console.log("Services after fetch:", services);
  }, [services]);

  const { id } = useParams(); // Use useParams instead of useRouter

  // Convert the id to a number (since the URL parameter is a string)
  const productId = Number(id);

  // Find the product based on the dynamic id in the URL
  const product = services.find((p) => p.id === productId);

  // If the product is not found, display a fallback message
  if (!product) {
    return <ProductError/>
   
  }
  const conjugatedImg = "/" + product.img
  
  return (
    <>
      <div className="text-center pt-60">
        <img 
          draggable="false"
          src={conjugatedImg} 
          alt={product.name} 
          className="max-w-[400px] min-h-[400px] rounded-full mx-auto"
        />

        <h1>Product Details</h1>
        <div>{product.name}</div>
        <div className=''>Description:{product.description}</div>
        <div>Price: ${product.price}</div>
        
        <Link href={"/product"}>
          <button 
          type="button" 
          className="min-w-96 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >Back
          </button>
        </Link>

      </div>
    </>
  );
}
