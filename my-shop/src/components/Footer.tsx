import React from 'react';
import Container from './Container';
import Link from 'next/link';
import { footerData } from '@/constants/Index';
import { list } from 'postcss';

interface Props {}

const Footer = () => {
  return (
  <div className="bg-slate-300 py-5">
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" >
        {/* complexity is 3 Everything is cool! */}
        {footerData?.map((item)=> (
            <div key={item?._id}>
                <h3 className="text-lightOrange text 1g font-semibold mb-3">
                    {item?.title}
                </h3> 
                <div className="flex flex-col gap-0.5">
                    {item?.listItem?.map((list)=>
                        list?.listData?.map((data) => (
                            <Link href="/"
                            key={data}
                            className="py-1 text-black font-medium hover:text-lightOrange hoverEffect"                            
                            >
                                {data}
                            </Link>
                        ))
                    )}
                </div>       
            </div>
        ))}
    </Container>
  </div>
  )
}

export default Footer