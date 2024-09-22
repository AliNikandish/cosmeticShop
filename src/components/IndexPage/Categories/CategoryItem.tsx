import React from 'react'
import { PiFlowerFill } from 'react-icons/pi'


type CategoryItemProps={
  id:string
  image:string,
  title:string,
  _count:{
    Product:number
  }
}

const CategoryItem = ({category}:{category:CategoryItemProps}) => {  
  return (
    <div className="w-full border p-2 max-h-[110px]">
    <div className="flex justify-center items-center">
    <img className='w-14' src={category.image} alt="" />

    </div>
    <p className="text-center text-[10px] sm:text-sm line-clamp-2">{category.title}</p>
    <p className="text-center text-[8px] sm:text-xs ">{category._count.Product} محصول</p>
  </div>
  )
}

export default CategoryItem