"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBox from "./SearchBox";
import ProductCard from "@/components/ProductCard";
import SkeletonProductCard from "@/components/SkeletonProductCard ";
import SkeletonFilterSidebar from "@/components/SkeletonFilterSidebar";
import SkeletonSortBox from "@/components/SkeletonSortBox ";
import MobileFilterSidebar from "@/components/MobileFilterSidebar";

const ProductsPageWithFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const arrayParams = ["categoryId", "color", "brand"] as const;

  type ArrayParamKeys = (typeof arrayParams)[number];

  const params: {
    categoryId: string[];
    color: string[];
    brand: string[];
    isExist: string | null;
    isInOffer: string | null;
    isInDiscount: string | null;
    minPrice: string | null;
    maxPrice: string | null;
    search: string;
    sort: string;
  } = {
    categoryId: [],
    color: [],
    brand: [],
    isExist: searchParams.get("isExist"),
    isInOffer: searchParams.get("isInOffer"),
    isInDiscount: searchParams.get("isInDiscount"),
    minPrice: searchParams.get("minPrice"),
    maxPrice: searchParams.get("maxPrice"),
    search: searchParams.get("search") || "",
    sort: searchParams.get("sort") || "newest",
  };

  arrayParams.forEach((key) => {
    const values = searchParams.getAll(key);
    if (values.length > 0) {
      params[key] = values[0].split(",");
    }
  });

  //Filter State

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    params.categoryId
  );


  const [sort, setSort] = useState<string>(params.sort);

  const [isExist, setIsExist] = useState<boolean>(Boolean(params.isExist));

  const [isInOffer, setIsInOffer] = useState<boolean>(
    Boolean(params.isInOffer)
  );

  const [isInDiscount, setIsInDiscount] = useState<boolean>(
    Boolean(params.isInDiscount)
  );

  const [selectedColors, setSelectedColors] = useState<string[]>(params.color);

  const [selectedBrands, setSelectedBrands] = useState<string[]>(params.brand);

  const [searchQuery, setSearchQuery] = useState(params.search);


  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);

  //Product State
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //categories State
  const [categories, setCategories] = useState<any[]>([]);

  const handleCheckboxChange = (
    value: string,
    selectedList: string[],
    setSelectedList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selectedList.includes(value)) {
      setSelectedList(selectedList.filter((item) => item !== value));
    } else {
      setSelectedList([...selectedList, value]);
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleApplyFilters = () => {
    const params = new URLSearchParams();

    if (selectedCategories.length > 0)
      params.set("categoryId", selectedCategories.join(","));

    if (priceRange[0] !== null) params.set("minPrice", String(priceRange[0]));
    if (priceRange[1] !== null) params.set("maxPrice", String(priceRange[1]));

    if (sort !== "newest") params.set("sort", sort);

    if (isExist) params.set("isExist", "true");
    if (isInOffer) params.set("isInOffer", "true");
    if (isInDiscount) params.set("isInDiscount", "true");

    if (selectedColors.length > 0)
      params.set("color", selectedColors.join(","));
    if (selectedBrands.length > 0)
      params.set("brand", selectedBrands.join(","));

    if (searchQuery.trim() !== "") params.set("search", searchQuery);

    const queryString = params.toString();
    const url = `/products${queryString ? "?" + queryString : ""}`;

    router.push(url);
  };

  const handleSortChange = (value: string) => {
    setSort(value);
    const params = new URLSearchParams(window.location.search);

    if (value !== "newest") {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    const queryString = params.toString();
    const url = `/products${queryString ? "?" + queryString : ""}`;
    router.push(url);
  };

  const fetchProducts = async () => {
    setLoading(true);

    let url = "/api/products";
    const queryString = searchParams.toString();

    if (queryString) {
      url += `?${queryString}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    setProducts(data.products);
    setLoading(false);
  };

  // get categories list from API
  const fetchCategories = async () => {
    let url = "/api/categories";
    const response = await fetch(url);
    const data = await response.json();

    setCategories(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  useEffect(() => {
    const min = Number(searchParams.get("minPrice")) || 0;
    const max = Number(searchParams.get("maxPrice")) || 5000000;
    setPriceRange([min, max]);
  }, [searchParams]);


  const searchBoxProps = {
    selectedCategories,
    setSelectedCategories,
    selectedColors,
    setSelectedColors,
    selectedBrands,
    setSelectedBrands,
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
    priceRange,
    setPriceRange,
  };

  return (
    <div style={{ padding: "1rem" }}>
     <div className="w-full px-4 lg:px-20 mt-10 flex gap-x-5">
  {loading ? (
    <>
      <SkeletonFilterSidebar />
      <div className="w-full lg:w-3/4">
        <SkeletonSortBox />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-y-5 justify-items-center">
          {[...Array(6)].map((_, i) => (
            <SkeletonProductCard key={i} />
          ))}
        </div>
      </div>
    </>
  ) : (
    <>
      <SearchBox {...searchBoxProps} />
      <div className="w-full lg:w-3/4">
        <div className="flex items-center gap-x-6">
          <p className="text-gray-500 text-xs">مرتب سازی بر اساس:</p>
          <select
            className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md text-xs w-44"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sort}
          >
            <option value="newest">جدیدترین</option>
            <option value="expensive">گران ترین</option>
            <option value="cheap">ارزان ترین</option>
            <option value="popular">محبوب ترین</option>
          </select>
        </div>

        <MobileFilterSidebar {...searchBoxProps} />

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-y-5 justify-items-center">
          {products.length === 0 ? (
            <p>محصولی یافت نشد</p>
          ) : (
            products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </>
  )}
</div>
    </div>
  );
};

export default ProductsPageWithFilters;
