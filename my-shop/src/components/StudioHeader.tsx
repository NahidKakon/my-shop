"use client";

import React from 'react'
import { IoReturnDownBack } from 'react-icons/io5';
import Link from 'next/link';
import Logo from './Logo';

// interface Props {}
// @ts-expect-error: Component props are not strictly typed
const StudioHeader = (NavbarProps) => {
  return (
  <div>
    <div className="p-5 bg-slate-950 text-gray-100 flex items-center justify-between">
        <Link href={"/"}
        className="flex items-center gap-3 font-semibold hover:text-lightOrange hoverEffect"
        >
        <IoReturnDownBack className="text-2xl"/> Go to Website
        </Link>
        <Logo/>
        <p className="hidden md:inline-flex text-sm">Admin studio for shoppers online shopping</p>
    </div>
    {NavbarProps.renderDefault(NavbarProps)}
    </div>
    )
};

export default StudioHeader;