import ProductTabs from "@/components/ProductTabs";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaGift, FaHeadset, FaHeart, FaRegCircleCheck, FaRegStar, FaStar } from "react-icons/fa6";
import prisma from "../../../../lib/prismaDB";
import AddToBasketButton from "@/components/AddToBasketButton";

const Product = async({
  params,
}: {
  params: {
    id: string;
  };
}) => {

 const {id}=params
  
let product = await prisma.product.findFirst({
    where:{
      id
    },
    include:{
      _count:true
    },
  });

  
if(product){
  return (
    <div className="w-full px-4  lg:px-20 mt-10 mb-20">
      <div className="breadcrumb">
        <span className="text-sm text-gray-500">خانه /</span>
        <span className="text-sm text-gray-500">ماسک صورت /</span>
        <span className="text-sm">ماسک صورت بایو آکوا</span>
      </div>

      <div className="flex gap-x-5 mt-5">
        <div className="relative">
          <img
            className="border-2 h-80 w-auto"
            src={product?.image!}
            alt=""
          />
          <div
            className="off-badge absolute top-[0px] left-2 p-1 text-xs bg-rose-600 text-white w-8 h-8 flex justify-center items-center "
            style={{ borderRadius: " 0 0 50% 50%" }}
          >
            10%
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-1">{product?.title}</h2>
          <div className="flex gap-x-1 mb-3">
            <div className="text-xs flex items-center gap-x-1">
              <FaStar className="text-rose-500" />
              <FaStar className="text-rose-500" />
              <FaStar className="text-rose-500" />
              <FaRegStar />
              <FaRegStar />
            </div>
            <div>
              <span className="text-xs text-gray-500">(دیدگاه {product._count.Comment} کاربر)</span>
            </div>
          </div>
          <p className="font-bold text-sm mb-3">
            {(189000).toLocaleString()} تومان - {(389000).toLocaleString()}{" "}
            تومان{" "}
          </p>
          <p className="text-sm mb-3">برند:{product?.brand}</p>
          <p className="text-sm mb-3">رنگ:{product?.color}</p>
          <p className="text-sm mb-3">دسته بندی:{product?.categoryName}</p>
          <p className="text-sm mb-3">وزن:{product?.weight}</p>
        </div>
      </div>

      <div className="mt-5 items-start">
        <div className="w-full md:w-7/12 inline-block ml-3">
          <ProductTabs description={product?.longDescription!} isLoggedIn/>
        </div>

        <div className="border shadow p-3 bg-white left-20 bottom-0  w-full md:w-4/12 inline-block mt-5 md:mt-0">
          <p className="font-bold text-sm mb-3 w-72 text-center ">
            {(product?.price).toLocaleString()} تومان 
          </p>
          <select name="" id="" className="border p-1 text-sm w-full">
            <option value="">یک گزینه را انتخاب کنید</option>
            <option value="">گزینه 1</option>
            <option value="">گزینه 2</option>
            <option value="">گزینه 3</option>
          </select>
              <AddToBasketButton product={product} type={3}/>
          <div className="mt-5">
            <div className="flex gap-x-2 items-center ">
              <span className="text-rose-500">
                <FaGift />
              </span>
              <span className="text-sm">ارسال رایگان بالای 500 هزار تومان</span>
            </div>
            <div className="flex gap-x-2 items-center mt-2">
              <span className="text-rose-500">
              <FaRegCircleCheck />
              </span>
              <span className="text-sm">اصالت و سلامت فیزیکی کالا</span>
            </div>
            <div className="flex gap-x-2 items-center mt-2">
              <span className="text-rose-500">
              <FaHeadset />
              </span>
              <span className="text-sm">پشتیبانی همه روزه</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}else{
  return(
    <div className="w-full px-4  lg:px-20 mt-10 mb-20">
      چنین محصولی وجود ندارد
    </div>
  )
}
  
};

export default Product;
