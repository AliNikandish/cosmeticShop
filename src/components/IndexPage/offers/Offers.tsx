import React from 'react'
import { FaBasketShopping } from 'react-icons/fa6'
import prisma from '../../../../lib/prismaDB'
import HeadSection from '../HeadSection'
import ProductCard from '@/components/ProductCard'


type ProductCardProps={
  feature: any[]
  id:string 
  title:string
  shortDescription:string 
  longDescription:string |null
  image:string |null
  price: number 
  discountPrice: number |null
  categoryId:string 
  categoryName:string |null
  color:string  |null
  brand:string |null
  isExist: boolean,
  isInOffer: boolean,
  isInDiscount: boolean,
  weight: number 
  createdAt: Date
}

const Offers = async() => {


  const products:any = await prisma.product.findMany(
    {
      take: 4,

      where:{
        isInOffer:true
      }

    }
  )


  
  return (
    <div className='w-full  px-4 lg:px-20 mt-10 mb-20'>
    <HeadSection title='محصولات پیشنهادی' subTitle='پیشنهاد ویژه برای تو' other='مشاهده محصولات' href='products' />
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-y-5 justify-items-center'>

    {products && products.map((product:ProductCardProps)=>{
          return <ProductCard key={product.id} product={product} />
        })}

    </div>
  </div>  )
}

export default Offers