import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { CalculatePercentage } from "../../../../utils/Helper";
import AddToBasketButton from "@/components/AddToBasketButton";
import Link from "next/link";


type DisCountCardProp={
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
const DisCountCard = ({ product }: {product:DisCountCardProp}) => {
  return (
    <div className="bg-white w-[230px] xl:w-[300px] h-[400px] rounded-2xl shadow">
      <div className="relative">
        <Link href={`/product/${product.id}`} >
        <img
          src={product.image!}
          alt=""
          className="h-[300px] w-full rounded-2xl"
        />
        </Link>
        <div
          className="off-badge absolute top-[0px] right-2 p-1 text-xs bg-rose-600 text-white w-8 h-8 flex justify-center items-center "
          style={{ borderRadius: " 0 0 50% 50%" }}
        >
          {CalculatePercentage(product.price, product.discountPrice)}%
        </div>
        <div className="absolute top-[4px] left-2 text-xs flex items-center gap-x-1">
          <FaStar className="text-rose-500" />
          <FaStar className="text-rose-500" />
          <FaStar className="text-rose-500" />
          <FaRegStar />
          <FaRegStar />
        </div>
      </div>
      <div>
        <p className="text-center font-bold line-clamp-1 mb-2">
        <Link href={`/product/${product.id}`} >

          {product.title}
          </Link>
        </p>
      </div>

      <div className="bg-slate-100 p-2 m-1 rounded-2xl flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-xs mb-1 line-through ">
            {product.price.toLocaleString()} تومان
          </p>
          <p className="text-rose-500 text-sm ">
            {(product.price - product.discountPrice!).toLocaleString()} تومان
          </p>
        </div>
        <AddToBasketButton type={2} product={product} />
      </div>
    </div>
  );
};

export default DisCountCard;
