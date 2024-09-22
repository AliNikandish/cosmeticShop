import React from 'react'
import { FaBasketShopping } from 'react-icons/fa6'
import { CalculatePercentage } from '../../utils/Helper'
import AddToBasketButton from './AddToBasketButton'
import Link from 'next/link'


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

const ProductCard = ({product}:{product:ProductCardProps}) => {  
  
  return (
    <div className='w-[160px] sm:w-[200px] xl:w-[275px] border relative rounded-md'>
         <Link href={`/product/${product.id}`}>
         <div className='relative'>
            <div className={`off-badge absolute top-[0px] right-2 p-1 text-xs bg-rose-600 text-white w-8 h-8 flex justify-center items-center ${product.discountPrice ? '' : 'hidden'}`} style={{borderRadius:' 0 0 50% 50%'}}>{CalculatePercentage(product.price,product.discountPrice)}%</div>
            <img className='h-60 w-full' src={product.image!} alt="" />
          </div>
          <p className='text-xs md:text-sm text-center line-clamp-1'>{product.title}</p>
         </Link>
          <p className='text-[10px] md:text-xs text-center mt-1 mb-5 text-gray-500'>{product.categoryName}</p>

          {
            product.discountPrice ? (
              <div className='flex gap-x-1 justify-center '>
              <p className='text-[10px] md:text-xs text-center mb-5 text-gray-500 line-through'>{(product.price).toLocaleString()} تومان</p>
              <p className='text-xs md:text-sm text-center mb-5 text-rose-500 font-IRANSansMedium'>{(product.price-product.discountPrice).toLocaleString()} تومان</p>
              </div>

            ) : (
              <p className='text-xs md:text-sm text-center mb-5 text-rose-500 font-IRANSansMedium'>{(product.price).toLocaleString()} تومان</p>

            )         
          
          }
         
          <AddToBasketButton product={product} type={1}/>
        </div>
  )
}

export default ProductCard