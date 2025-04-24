"use client";

import PriceRangeSlider from "@/components/PriceRangeSlider";
import Swal from "sweetalert2";

function submitHandler() {
  Swal.fire({
    text: "این بخش بزودی تکمیل میشه",
    confirmButtonText: "باشه",
  });
}

const SearchBox = ({
  selectedCategories,
  setSelectedCategories,
  selectedColors,
  setSelectedColors,
  isExist,
  setIsExist,
  isInOffer,
  setIsInOffer,
  isInDiscount,
  setIsInDiscount,
  handleApplyFilters,
  setMinPrice,
  setMaxPrice,
  searchQuery,
  setSearchQuery,
  categories,
  handleCheckboxChange,
  handleCategoryChange,
  selectedBrands,
  setSelectedBrands,
  priceRange,
  setPriceRange
}: any) => {
  return (
    <div className="hidden lg:block w-1/4 border shadow-md h-[650px] sticky top-20 py-4 px-7 rounded-md overflow-y-scroll custom-scrollbar">

      {/* searchBox */}
      <div className="text-center">
        <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
          className="px-2 py-2 outline-0 bg-gray-100 text-gray-500 rounded-md text-xs w-full"
          type="search"
          name=""
          id=""
          placeholder="جستجو ..."
        />
      </div>
      {/* Categories */}
      <div className="mt-4">
        <p className="text-blue-900 font-IRANSansMedium">دسته های محصولات</p>
        <div className="mt-4 space-y-2">
          {categories.map((category:any)=>{
            return(<div className="flex gap-x-2 text-sm " key={category.id}>
            <input type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
                name={category.id} id="" />
            <label htmlFor="abresan">{category.title}</label>
          </div>

            );
          })}
        </div>
      </div>
      {/* Color */}
      <div className="mt-4">
        <p className="text-blue-900 font-IRANSansMedium">رنگ</p>
        <div className="mt-4 space-y-2">
          {
            ["قرمز", "آبی", "صورتی", "مشکی", "بنفش", "کرم", "بیرنگ"].map(color=>{
              return(
                <div className="flex gap-x-2 text-sm " key={color}>
            <input type="checkbox" name={color} id=""   checked={selectedColors.includes(color)}
                onChange={() =>
                  handleCheckboxChange(color, selectedColors, setSelectedColors)
                }/>
            <label htmlFor={color}>{color}</label>
          </div>
              )
            })
          }
        </div>
      </div>
      {/* Brand */}
      <div className="mt-4">
        <p className="text-blue-900 font-IRANSansMedium">برند</p>
        <div className="mt-4 space-y-2">

          {["مای", "کالیستا", "شون", "لافارر", "زون", " رینوزیت", " اکلیپس"].map(brand=>{
            return(
              <div className="flex gap-x-2 text-sm " key={brand}>
            <input type="checkbox" name={brand} id="" checked={selectedBrands.includes(brand)}
                onChange={() =>
                  handleCheckboxChange(brand, selectedBrands, setSelectedBrands)
                } />
            <label htmlFor={brand}>{brand}</label>
          </div>
            )
          })}
        </div>
      </div>
      {/* IsExist,IsInDiscountIsInOffer */}
      <div className="mt-4">
        <p className="text-blue-900 font-IRANSansMedium">فیلتر بر اساس</p>
        <div className="mt-4 space-y-2">
          <div className="flex gap-x-2 text-sm ">
            <input
              type="checkbox"
              name="abresan"
              id=""
              checked={isExist}
              onChange={(e) => setIsExist(e.target.checked)}
            />
            <label htmlFor="abresan">موجود</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input
              type="checkbox"
              name="abresan"
              id=""
              checked={isInDiscount}
              onChange={(e) => setIsInDiscount(e.target.checked)}
            />
            <label htmlFor="abresan">تخفیف‌دار</label>
          </div>
          <div className="flex gap-x-2 text-sm">
            <input
              type="checkbox"
              name="abresan"
              id=""
              checked={isInOffer}
              onChange={(e) => setIsInOffer(e.target.checked)}
            />
            <label htmlFor="abresan">پیشنهاد ویژه</label>
          </div>
        </div>
      </div>
      {/* Price */}
      <div className="mt-4">
        <p className="text-blue-900 font-IRANSansMedium">فیلتر بر اساس قیمت</p>
        <div className="mt-4">
          <PriceRangeSlider value={priceRange} onChange={setPriceRange}  />
        </div>
      </div>
      <div className="mt-4">
        <button
          type="button"
          className="bg-rose-500 text-white w-full py-1 rounded-md"
          onClick={handleApplyFilters}
        >
          اعمال
        </button>
      </div>
    </div>
  );
};

export default SearchBox;




