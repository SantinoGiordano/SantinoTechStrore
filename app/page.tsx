'use client'

import { useEffect } from "react";

export default function Home() {

 async function getEmployees(){
  try {
    const response = fetch('http://localhost:3000/api/employees')
  } catch (error) {
   console.log(error) 
  }
 }

useEffect(() =>{
  getEmployees();
 },[])
 
  return (
    <div>
      
    </div>
  );
}
