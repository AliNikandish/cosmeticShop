"use client";

import { useState } from "react";
import PriceRangeSlider from "./PriceRangeSlider";


export default function MobileFilterSidebar({
  selectedCategories,
  selectedColors,
  setSelectedColors,
  isExist,
  setIsExist,
  isInOffer,
  setIsInOffer,
  isInDiscount,
  setIsInDiscount,
  handleApplyFilters,
  searchQuery,
  setSearchQuery,
  categories,
  handleCheckboxChange,
  handleCategoryChange,
  selectedBrands,
  setSelectedBrands,
  priceRange,
  setPriceRange,
}: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      {/*open button*/}
      <button
        onClick={toggleSidebar}
        className="text-sm bg-slate-800 text-white py-1 px-5 rounded mt-4"
      >
        فیلتر بندی
      </button>

      {/*bg overlay  */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        />
      )}

      {/*sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        dir="rtl"
      >
        {/* close button  */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">فیلترها</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-600 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Filtering */}
        <div className="p-4 space-y-4">
          <div className="">
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
              <p className="text-blue-900 font-IRANSansMedium">
                دسته های محصولات
              </p>
              <div className="mt-4 space-y-2">
                {categories.map((category: any) => {
                  return (
                    <div className="flex gap-x-2 text-sm " key={category.id}>
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCategoryChange(category.id)}
                        name={category.id}
                        id=""
                      />
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
                {["قرمز", "آبی", "صورتی", "مشکی", "بنفش", "کرم", "بیرنگ"].map(
                  (color) => {
                    return (
                      <div className="flex gap-x-2 text-sm " key={color}>
                        <input
                          type="checkbox"
                          name={color}
                          id=""
                          checked={selectedColors.includes(color)}
                          onChange={() =>
                            handleCheckboxChange(
                              color,
                              selectedColors,
                              setSelectedColors
                            )
                          }
                        />
                        <label htmlFor={color}>{color}</label>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            {/* Brand */}
            <div className="mt-4">
              <p className="text-blue-900 font-IRANSansMedium">برند</p>
              <div className="mt-4 space-y-2">
                {[
                  "مای",
                  "کالیستا",
                  "شون",
                  "لافارر",
                  "زون",
                  " رینوزیت",
                  " اکلیپس",
                ].map((brand) => {
                  return (
                    <div className="flex gap-x-2 text-sm " key={brand}>
                      <input
                        type="checkbox"
                        name={brand}
                        id=""
                        checked={selectedBrands.includes(brand)}
                        onChange={() =>
                          handleCheckboxChange(
                            brand,
                            selectedBrands,
                            setSelectedBrands
                          )
                        }
                      />
                      <label htmlFor={brand}>{brand}</label>
                    </div>
                  );
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
              <p className="text-blue-900 font-IRANSansMedium">
                فیلتر بر اساس قیمت
              </p>
              <div className="mt-4">
                <PriceRangeSlider value={priceRange} onChange={setPriceRange} />
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
        </div>
      </aside>
    </div>
  );
}
