import ProductTabs from "@/components/ProductTabs";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaGift, FaHeadset, FaHeart, FaRegCircleCheck, FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import prisma from "../../../../lib/prismaDB";
import AddToBasketButton from "@/components/AddToBasketButton";

const Product = async({
  params,
}: {
  params: {
    id: string;
  };
}) => {

  const { id } = params;

  const productPromise = prisma.product.findFirst({
    where: { id },
    include: {
      _count: true,
    },
  });
  
  const averageScorePromise = prisma.comment.aggregate({
    _avg: {
      score: true,
    },
    where: {
      productId: id,
    },
  });
  
  
  const [product, averageResult] = await Promise.all([productPromise, averageScorePromise]);
  
  const averageScore = averageResult._avg.score || 0;
  
  const toPersianDigits = (num: number | string) => {
    return num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
  };
  
  const Stars = ({ averageScore }: { averageScore: number }) => {
    const fullStars = Math.floor(averageScore);
    const hasHalfStar = averageScore - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
    return (
      <div className="flex items-center gap-x-2 text-xs">
        <div dir="ltr" className="flex items-center gap-x-1">
          {Array(fullStars).fill(0).map((_, i) => (
            <FaStar key={`full-${i}`} className="text-rose-500" />
          ))}
          {hasHalfStar && <FaStarHalfStroke className="text-rose-500" />}
          {Array(emptyStars).fill(0).map((_, i) => (
            <FaRegStar key={`empty-${i}`} />
          ))}
        </div>
        <span className="text-gray-500">{toPersianDigits(averageScore.toFixed(1))} از ۵</span>
        </div>
    );
  };
  
  
if(product){
  return (
    <div className="w-full px-4  lg:px-20 mt-10 mb-20">
      <div className="breadcrumb">
        <span className="text-sm text-gray-500">خانه /</span>
        <span className="text-sm text-gray-500">{product.categoryName}/</span>
        <span className="text-sm">{product.title}</span>
      </div>

      <div className="flex gap-x-5 mt-5">
        <div className="relative">
          <img
            className="border-2 h-80 w-auto"
            src={product.image? product.image : 'No_Product_Image_Available.png'}
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
            <Stars averageScore={averageScore} />
            </div>
            <div>
              <span className="text-xs text-gray-500">(دیدگاه {toPersianDigits(product._count.Comment)} کاربر)</span>
            </div>
          </div>
          <p className="text-sm mb-3">برند:{product?.brand}</p>
          <p className="text-sm mb-3">رنگ:{product?.color}</p>
          <p className="text-sm mb-3">دسته بندی:{product?.categoryName}</p>
          <p className="text-sm mb-3">وزن:{product?.weight}</p>
        </div>
      </div>

      <div className="mt-5 items-start">
        <div className="w-full md:w-7/12 inline-block ml-3">
          <ProductTabs description={product?.longDescription!} isLoggedIn averageScore={averageScore}/>
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
