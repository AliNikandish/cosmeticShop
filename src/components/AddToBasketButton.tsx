"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import Swal from "sweetalert2";



type product={
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

type cart={
id:string,
count:number
name:string
price: number
discountPrice:number
image: string
brand:string

}

const AddToBasketButton = ({ product, type }: {product:product,type:number}) => {
  const [count, setCount] = useState(1);
  const router=useRouter()
  // console.log(product);
  const addToCart = () => {
    console.log(product);
    const getCartFromStorage=localStorage.getItem("cart");
    const cart= getCartFromStorage? JSON.parse(getCartFromStorage) :[];

    // const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length) {
      const isInCart = cart.some((item:cart) => item.id === product.id);

      if (isInCart) {
        cart.forEach((item:cart) => {
          if (item.id === product.id) {
            item.count = item.count + count;
          }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        Swal.fire({
          title: "محصول با موفقیت به سبد خرید اضافه شد",
          showDenyButton: true,
          confirmButtonText: "ادامه خرید",
          denyButtonText: `رفتن به سبد خرید`
        }).then((result) => {
          if (result.isDenied) {
            router.replace('/cart')
          }
        });
      } else {
        const cartItem = {
          id: product.id,
          name: product.title,
          price: product.price,
          discountPrice:product.discountPrice,
          count,
          image: product.image,
          brand:product.brand
        };

        cart.push(cartItem);

        localStorage.setItem("cart", JSON.stringify(cart));
        Swal.fire({
          title: "محصول با موفقیت به سبد خرید اضافه شد",
          showDenyButton: true,
          confirmButtonText: "ادامه خرید",
          denyButtonText: `رفتن به سبد خرید`
        }).then((result) => {
          if (result.isDenied) {
            router.replace('/cart')
          }
        });
      }
    } else {
      const cartItem = {
        id: product.id,
        name: product.title,
        price: product.price,
        discountPrice:product.discountPrice,
        count,
        image: product.image,
        brand:product.brand
      };

      cart.push(cartItem);

      localStorage.setItem("cart", JSON.stringify(cart));
      Swal.fire({
        title: "محصول با موفقیت به سبد خرید اضافه شد",
        showDenyButton: true,
        confirmButtonText: "ادامه خرید",
        denyButtonText: `رفتن به سبد خرید`
      }).then((result) => {
        if (result.isDenied) {
          router.replace('/cart')
        }
      });
    }
  };

  if (type === 1) {
    return (
      <div
        style={{ left: "50%", transform: "translate(-50%)" }}
        className="absolute trans1/2 bottom-[-15px] w-7 h-7 rounded-full p-2 bg-slate-700 text-white text-sm flex items-center justify-center cursor-pointer"
        onClick={addToCart}
      >
        <button>
          <FaBasketShopping />
        </button>
      </div>
    );
  } else if (type === 2) {
    return (
      <div>
        <button
          type="button"
          className="text-white bg-rose-500 p-1 px-2 rounded-xl text-sm"
          onClick={addToCart}
        >
          خرید محصول
        </button>
      </div>
    );
  } else if (type === 3) {
    return (
      <div className="flex gap-x-6 mt-3">
        <div className="flex gap-x-3 items-center">
          <button className="border px-0.5 py-1 font-bold" onClick={() => setCount(count - 1)}>-</button>
          <span>{count}</span>
          <button className="border px-0.5 py-1 font-bold" onClick={() => setCount(count + 1)}>+</button>
        </div>
        <button
          type="button"
          className="bg-orange-600 text-white px-2 py-1 rounded-2xl text-sm"
          onClick={addToCart}
        >
          افزودن به سبد خرید
        </button>
      </div>
    );
  }
};

export default AddToBasketButton;
