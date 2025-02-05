"use client";
import React from 'react'
import Image from 'next/image';


interface RealtedTypes{
  product_data:string
}
export default function Related_Product(prop:RealtedTypes) {
      // Mock data arr  const products = prop.Product_data || []; // Default to empty array if no data is passed
      // const products = prop.product_data || []; // Default to empty array if no data is passed
  
  return (
      <div className='w-full'>
        {/* related product */}
        <div className='flex justify-center'>
            <h3 className='font-bold text-xl'>Related Products</h3>
        </div>
          {/* Product Cards */}
      <div className='mt-24 px-4'>
        <div className='w-full h-[700px]'>
          <Image src={prop.product_data} width={1000} height={1000} alt='product image' />

        </div>
        {/* Grid Layout */}
        {/* <div className="  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {products.map((product: any, index: number) => (
         <PageCard key={product.id} {...product} />

        ))}
        </div> */}
      </div>
      </div>
    
    
  )
}
