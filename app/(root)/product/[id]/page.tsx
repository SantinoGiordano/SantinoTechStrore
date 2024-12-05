'use client'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Services {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
}


export default function Page(){
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
    <div className='pt-96'>
      <h1>Product Details</h1>
      <div>You clicked on: {product.name}</div>
      <div>Description: {product.description}</div>
      <div>Price: ${product.price}</div>
      <img src={product.img} alt={product.name} />
    </div>
  );
}
