"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Services {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
}

export default function Products() {
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

  return (
    <>
    <div className="bg-red-400">
      <div className="h-screen bg-fixed bg-center bg-cover bg-productBackground">
        <div className="h-full bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Products
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-center p-10">
  {services.map((service, index) => (
    <div key={index} className="rounded-lg  bg-red-300 card card-side bg-base-100 shadow-xl transform transition-all duration-300 hover:scale-105">
      <div className="flex flex-col max-w-96">
        <figure className="p-2">
          <img className="max-w-[200px] max-h-[200px] min-w-[200px] min-h-[200px] rounded-full" src={service.img} alt={service.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold p-2">{service.name}</h2>
          <p className="p-2 font-serif font-thin">{service.description}</p>
          <div className="card-actions justify-end p-2">${service.price}.99</div>
          <Link href={`product/${service.id}`} className="m-2">More Info</Link>
          {/* <Link 
            className="p-2"
            href={{
              pathname: `${service.id}`, // Ensure a URL-friendly path
              query: { 
                services: JSON.stringify(services)
               }, 
            }}
          >
            More Info... 
          </Link> */}
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
    </>
  );
}
