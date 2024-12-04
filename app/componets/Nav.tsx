import Link from "next/link";
import React from "react";

export default function Nav(){
    return (
        <>
          <div className="backdrop-blur-md bg-opacity-50 text-xl text-black p-10 bg-slate-200 fixed top-0 w-full flex justify-between items-center">
            {/* Left-aligned content */}
            <div>
              <Link className="font-bold text-2xl" href={"./"}>
                Software Solutions
              </Link>
            </div>
      
            {/* Right-aligned content */}
            <div className="flex space-x-5">
              <Link className="" href={"./product"}>
                Product
              </Link>
              <Link className="" href={"./about"}>
                About
              </Link>
              <Link className="" href={"./pages"}>
                Contact
              </Link>
            </div>
          </div>
        </>
      );
    }      
