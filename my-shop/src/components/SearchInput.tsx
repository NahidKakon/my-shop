"use client";

import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';


interface Props {}

const SearchInput = () => {
    const [search, setSearch] = useState("");
  return (
    <>
      <div 
        className="w-full hidden md:inline-flex flex-1 h-12 relative">
            <CiSearch className="text-lg absolute left-2.5 mt-4 text-red-500"/>
          <input 
          type="text" 
          placeholder="Search products...." 
          className="flex-1 h-full outline-none bg-transparent placeholder-text-lightText border-[1px] border-amber-950 rounded-sm pl-8 pr-28"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            />
            {search && (
                <IoMdClose onClick={() => setSearch("")} 
                className="text-slate-950
                hover:text-red-600 hoverEffect cursor-pointer absolute right-20 top-4"/>
            )}
    
            <button className="bg-lightOrange text-amber-50 absolute right-0 px-3.5 py-1 mr-2.5 text-sm hover:bg-red-700 hoverEffect top-2.5">
                Search
            </button>
        </div>
    
    </>
   
  
)

}

export default SearchInput;