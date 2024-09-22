import ProductCard from "@/components/ProductCard";
import React from "react";
import prisma from "../../../lib/prismaDB";
import RangeSlider from "@/components/RangeSlider";
import FilterProducts from "@/components/FilterProducts/FilterProducts";

const page = async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="w-full px-4 lg:px-20 mt-10 flex gap-x-5">
      
      <div className="hidden lg:block w-1/4 border shadow-md h-[520px] sticky top-20 py-4 px-7 rounded-md">
        <div className="text-center">
          <input
            className="px-2 py-2 outline-0 bg-gray-100 text-gray-500 rounded-md text-xs w-full"
            type="search"
            name=""
            id=""
            placeholder="جستجو ..."
          />
        </div>
        <div className="mt-5">
          <p className="text-blue-900 font-IRANSansMedium">دسته های محصولات</p>
          <div className="mt-4 space-y-2">
          <div className="flex gap-x-2 text-sm ">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input type="checkbox" name="abresan" id="" />
            <label htmlFor="abresan">آبرسان</label>
          </div>
          </div>
        </div>
        <div className="mt-5">
        <p className="text-blue-900 font-IRANSansMedium">فیلتر بر اساس قیمت</p>
          <div className="mt-4">
            <RangeSlider/>
          </div>
        </div>
        <div className="mt-4">
        <button type="button" className="bg-rose-500 text-white w-full py-1 rounded-md">اعمال</button>
        </div>
      </div>
      <div className="w-full lg:w-3/4">
        <div className="flex items-center gap-x-6">
          <p className="text-gray-500 text-xs">مرتب سازی بر اساس:</p>
          <select
            name=""
            id=""
            className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md text-xs w-44"
          >
            <option value="">پیشفرض</option>
            <option value="">جدیدترین</option>
            <option value="">گران ترین</option>
            <option value="">ارزان ترین</option>
            <option value="">محبوب ترین</option>
          </select>
        </div>
        <FilterProducts/>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3  gap-y-5 justify-items-center	 ">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
        <div className="flex justify-center items-center mt-10 text-sm">
        <div className="flex space-x-4">
          <p>1</p>
          <p>2</p>
          <p>بعد</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;
