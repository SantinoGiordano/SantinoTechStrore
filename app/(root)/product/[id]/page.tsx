"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
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
  }, []);

  const { id } = useParams(); // Use useParams instead of useRouter

  // Convert the id to a number (since the URL parameter is a string)
  const productId = Number(id);

  // Find the product based on the dynamic id in the URL
  const product = services.find((p) => p.id === productId);

  // If the product is not found, display a fallback message
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="text-center pt-96">
        <img src={product.img} alt={product.name} className="mx-auto" />
        <h1>Product Details</h1>
        <div>{product.name}</div>
        <div className=''>Description: {product.description}</div>
        <div>Price: ${product.price}</div>
        <Link href={"/product"}>
        <button type="button" className="min-w-96 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Dark</button>
        </Link>
      </div>
    </>
  );
}
