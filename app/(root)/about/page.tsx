"use client";

import React, { useEffect, useState } from "react";

interface Employee {
  name: string;
  position: string;
  email: string;
  img: string;
}

export default function About() {
  const [employees, setEmployees] = useState<Employee[]>([]); // Initialize as an empty array

  async function getEmployees() {
    try {
      const response = await fetch("http://localhost:3000/api/employees");
      const json = await response.json();
      setEmployees(json.employees || []); //this was origanlly json.data and i needed to change, this was my big change

      console.log({ json });
    } catch (error) {
      console.error(error);
      setEmployees([]); // Fallback to empty array on error
    }
  }

  useEffect(() => {
    getEmployees();
    console.log("Employees after fetch:", employees);
  }, []);

  return (
    <>
      <div className="h-screen bg-fixed bg-center bg-cover bg-aboutBackground">
        <div className="h-full bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            About
          </h1>
        </div>
      </div>

      <div className="py-8">
        <h1 className="text-2xl font-semibold mb-4">Employee List</h1>
        {/* {!employees.length && <p>loading...</p>} */}
      </div>

      <div className="flex flex-wrap gap-5 justify-center">
        {employees.map((employee, index) => (
          <div key={index} className="flex flex-col max-w-72">
            <div className="card card-side bg-base-100 shadow-xl p-10">
              <figure>
                <h2 className="card-title text">{employee.name}</h2>
                <img
                  src={employee.img}
                  alt={`${employee.name}'s profile`}
                  className="rounded-full w-48 h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <p>{employee.position}</p>
                <p>{employee.email}</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
