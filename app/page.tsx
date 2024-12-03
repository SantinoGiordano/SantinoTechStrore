"use client";

import { useEffect, useState } from "react";

interface Employee {
  name: string;
  position: string;
  email: string;
}

export default function Home() {
  const [employees, setEmployees] = useState<Employee[]>([]); // Initialize as an empty array

  async function getEmployees() {
    try {
      const response = await fetch("http://localhost:3000/api/employees");
      const json = await response.json();
      setEmployees(json.employees || []);

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

  function getNames() {
    console.log(employees.map((employee) => employee.name)); // Log employee names
  }

  return (
    <div>
      <button onClick={getNames}>Click me</button>
      <h1>Employee List</h1>
      <div>
        {employees.map((employee, index) => (
          <div key={index} className="employee-card">
            <h2>{employee.name}</h2>
            <p>{employee.position}</p>
            <p>{employee.email}</p>
          </div>
        ))}
        {!employees.length && <p>loading...</p>}
      </div>
    </div>
  );
}