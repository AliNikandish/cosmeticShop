// "use client";
// import { GoDash, GoPlus, GoTrash } from "react-icons/go";
// import { CalculatePercentage } from "../../../utils/Helper";
// import { useReducer, useState } from "react";
// import Swal from "sweetalert2";

import Cart from "./Cart";

const page = () => {
// const getCartFromStorage= localStorage.getItem("cart");
// const cartData= getCartFromStorage ? JSON.parse(getCartFromStorage) : [];

//   const [cart, setCart] = useState(cartData)
//   const [tottalPrice, settottalPrice] = useState(0)
//   const [tottalPriceAfterDiscount, settottalPriceAfterDiscount] = useState(cart.reduce(getTottalPrice,0)-cart.reduce(getTottalDiscount,0))

  
  

//   function getTottalPrice(total:any, num:any) {
    
//     return total + Math.round(num.price)*num.count;
//   }
  
//   function getTottalDiscount(total:any, num:any) {
//     return total + Math.round(num.discountPrice)*num.count;
//   }

//   function addNumberProduct(itemId:any){

//     cart.forEach((item:any) => {
//       if (item.id === itemId) {
//         item.count +=1;
//       }
//     });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     const getCartFromStorage= localStorage.getItem("cart");
//     const cartData= getCartFromStorage ? JSON.parse(getCartFromStorage) : [];
//     setCart(cartData)
//     // setCart(JSON.parse(localStorage.getItem("cart")))
//     settottalPriceAfterDiscount(cart.reduce(getTottalPrice,0)-cart.reduce(getTottalDiscount,0))
//   }

  
//   function minNumberProduct(itemId:any){

//     cart.forEach((item:any,index:number,object:[]) => {
//       if (item.id === itemId) {
//         if(item.count===1){
//           object.splice(index, 1);
//         }else{
//           item.count -=1;
//         }
//       }
//     });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     const getCartFromStorage= localStorage.getItem("cart");
//     const cartData= getCartFromStorage ? JSON.parse(getCartFromStorage) : [];
//     setCart(cartData)
//     // setCart(JSON.parse(localStorage.getItem("cart")))
//     settottalPriceAfterDiscount(cart.reduce(getTottalPrice,0)-cart.reduce(getTottalDiscount,0))

//   }


//   function orderHandler() {

//     Swal.fire({
//     text:"این بخش بزودی تکمیل میشه",
//     confirmButtonText:"باشه"
//     })
    
//   }
  


//   if (cart.length>0) {
//     return (
//       <>
//         <div className="w-full px-4 lg:px-20 mt-10">
//           <div className="flex flex-col lg:flex-row gap-5">
//             <div className="w-full lg:w-8/12">
//               <div className="cart-items flex flex-col gap-3">
//                 {cart.map((item: any) => {
//                   return (
//                     <div key={item.id} className="border  bg-slate-50 p-3 rounded-md">
//                       <div className="flex gap-3">
//                         <div>
//                           <img
//                             className="w-32 rounded"
//                             src={item.image}
//                             alt=""
//                           />
//                         </div>
//                         <div>
//                           <span className="text-gray-500 text-sm">
//                             {item.brand}
//                           </span>
//                           <h4 className="text-xs">{item.name}</h4>
//                         </div>
//                       </div>
//                       <div className="flex justify-between items-center mt-4">
//                         <div className="border border-rose-500 text-red-500 flex justify-between px-2 py-1 w-32 rounded text-lg">
//                           <button onClick={()=>addNumberProduct(item.id)}>
//                             <GoPlus />
//                           </button>
//                           <div>{item.count}</div>
//                           <button onClick={()=>minNumberProduct(item.id)}>

//                             {item.count>1 ? <GoDash />  : <GoTrash />}
//                           </button>
//                         </div>
//                         {!item.discountPrice ? (
//                           <div className="flex gap-x-1">
//                             <p className="text-sm">
//                               {item.price.toLocaleString()}
//                             </p>
//                             <svg
//                               className="w-5 fill-text-darkGray"
//                               viewBox="0 0 24 24"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path d="M3.52231 9.85151C3.70646 11.2265 3.81695 13.9888 3.7924 15.5724C3.76785 16.751 3.91517 17.107 4.86047 17.107H4.92186L5.02007 18.0278L4.92186 18.9363H4.86047C3.00669 18.9363 2.31919 17.8559 2.31919 15.8057C2.30692 13.9642 2.2087 11.6194 2 10.183L3.52231 9.85151Z"></path>
//                               <path d="M4.80273 18.9363L4.83956 17.107H5.06054C5.64983 17.107 6.20228 16.7633 6.63196 15.953C7.35629 14.6026 8.04378 13.7187 8.97681 13.6696C11.3462 13.5468 12.0705 17.7086 10.2168 18.8258C9.51699 19.2555 8.36298 18.8381 7.04937 18.0155C6.53375 18.6416 5.83398 18.9363 5.03599 18.9363H4.80273ZM7.83508 16.5669C8.78039 17.1439 9.54154 17.4508 9.76252 17.2912C10.3027 16.9474 9.95895 15.3146 9.0382 15.3146C8.719 15.3146 8.32615 15.6216 7.83508 16.5669Z"></path>
//                               <path d="M12.1629 20.9374C14.3727 20.4586 15.6004 19.8693 16.0055 18.9485C14.4709 18.924 13.145 18.7521 12.654 17.7086C11.9419 16.1863 13.0837 13.5713 14.7656 13.5713C16.0915 13.5713 17.0859 15.2164 17.3314 17.107H17.847L17.9452 18.0278L17.847 18.9363H17.2946C16.8894 20.7655 15.2321 22.0423 12.7276 22.5211L12.1629 20.9374ZM13.7834 16.6774C14.029 17.0088 14.9374 17.0948 16.0301 17.107C15.8214 16.1372 15.3426 15.3269 14.741 15.2164C14.0167 15.0691 13.4765 16.2477 13.7834 16.6774Z"></path>
//                               <path d="M17.6909 18.9363V17.107H18.2802C19.9621 17.107 20.5022 16.8124 20.5022 16.2599C20.49 15.8425 19.9375 14.4184 19.827 14.1975L21.1284 13.4854C21.3616 13.9888 21.865 15.376 21.865 16.3459C21.8527 18.0032 20.7601 18.9363 18.5502 18.9363H17.6909ZM17.8136 11.9877C18.1451 11.6439 18.5011 11.3002 18.8326 10.9564C19.1764 11.3002 19.5201 11.6439 19.8516 11.9877C19.5201 12.3314 19.1764 12.6629 18.8326 13.0066C18.5011 12.6629 18.1451 12.3314 17.8136 11.9877ZM19.9621 11.9877C20.2935 11.6439 20.6496 11.3002 20.981 10.9564C21.3248 11.3002 21.6685 11.6439 22 11.9877C21.6685 12.3314 21.3248 12.6629 20.981 13.0066C20.6496 12.6629 20.2935 12.3314 19.9621 11.9877Z"></path>
//                               <path d="M5.90307 3.41851C5.57159 4.16739 5.26468 4.92855 5.24012 5.73881C5.19102 7.18746 6.11177 7.8504 7.72002 7.8504C9.51242 7.8504 10.5437 6.80688 10.5437 5.73881C10.5437 5.05131 9.9421 3.3203 9.75795 2.7924L11.0716 2.1049C11.5749 3.45534 11.845 4.69529 11.845 5.73881C11.845 7.86268 10.2122 9.66735 7.72002 9.66735C5.30151 9.66735 3.70553 8.14504 3.87741 5.73881C3.93879 4.69529 4.40531 3.54128 4.7245 2.87834L5.90307 3.41851ZM6.82382 2.12946C7.21667 1.74888 7.58497 1.38058 7.96555 1L9.09501 2.12946C8.71443 2.51003 8.34613 2.89061 7.96555 3.25891C7.58497 2.89061 7.21667 2.51003 6.82382 2.12946Z"></path>
//                             </svg>
//                           </div>
//                         ) : (
//                           <div className="flex gap-x-1 items-center">
//                             <div className="flex flex-col justify-center">
//                               <div>
//                                 <span className="text-gray-500 line-through text-sm">
//                                   {item.price.toLocaleString()}
//                                 </span>
//                               </div>
//                               <div className="flex gap-x-1">
//                                 <p className="text-sm"> {(item.price-item.discountPrice).toLocaleString()}</p>
//                                 <svg
//                                   className="w-5 fill-text-darkGray"
//                                   viewBox="0 0 24 24"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                   <path d="M3.52231 9.85151C3.70646 11.2265 3.81695 13.9888 3.7924 15.5724C3.76785 16.751 3.91517 17.107 4.86047 17.107H4.92186L5.02007 18.0278L4.92186 18.9363H4.86047C3.00669 18.9363 2.31919 17.8559 2.31919 15.8057C2.30692 13.9642 2.2087 11.6194 2 10.183L3.52231 9.85151Z"></path>
//                                   <path d="M4.80273 18.9363L4.83956 17.107H5.06054C5.64983 17.107 6.20228 16.7633 6.63196 15.953C7.35629 14.6026 8.04378 13.7187 8.97681 13.6696C11.3462 13.5468 12.0705 17.7086 10.2168 18.8258C9.51699 19.2555 8.36298 18.8381 7.04937 18.0155C6.53375 18.6416 5.83398 18.9363 5.03599 18.9363H4.80273ZM7.83508 16.5669C8.78039 17.1439 9.54154 17.4508 9.76252 17.2912C10.3027 16.9474 9.95895 15.3146 9.0382 15.3146C8.719 15.3146 8.32615 15.6216 7.83508 16.5669Z"></path>
//                                   <path d="M12.1629 20.9374C14.3727 20.4586 15.6004 19.8693 16.0055 18.9485C14.4709 18.924 13.145 18.7521 12.654 17.7086C11.9419 16.1863 13.0837 13.5713 14.7656 13.5713C16.0915 13.5713 17.0859 15.2164 17.3314 17.107H17.847L17.9452 18.0278L17.847 18.9363H17.2946C16.8894 20.7655 15.2321 22.0423 12.7276 22.5211L12.1629 20.9374ZM13.7834 16.6774C14.029 17.0088 14.9374 17.0948 16.0301 17.107C15.8214 16.1372 15.3426 15.3269 14.741 15.2164C14.0167 15.0691 13.4765 16.2477 13.7834 16.6774Z"></path>
//                                   <path d="M17.6909 18.9363V17.107H18.2802C19.9621 17.107 20.5022 16.8124 20.5022 16.2599C20.49 15.8425 19.9375 14.4184 19.827 14.1975L21.1284 13.4854C21.3616 13.9888 21.865 15.376 21.865 16.3459C21.8527 18.0032 20.7601 18.9363 18.5502 18.9363H17.6909ZM17.8136 11.9877C18.1451 11.6439 18.5011 11.3002 18.8326 10.9564C19.1764 11.3002 19.5201 11.6439 19.8516 11.9877C19.5201 12.3314 19.1764 12.6629 18.8326 13.0066C18.5011 12.6629 18.1451 12.3314 17.8136 11.9877ZM19.9621 11.9877C20.2935 11.6439 20.6496 11.3002 20.981 10.9564C21.3248 11.3002 21.6685 11.6439 22 11.9877C21.6685 12.3314 21.3248 12.6629 20.981 13.0066C20.6496 12.6629 20.2935 12.3314 19.9621 11.9877Z"></path>
//                                   <path d="M5.90307 3.41851C5.57159 4.16739 5.26468 4.92855 5.24012 5.73881C5.19102 7.18746 6.11177 7.8504 7.72002 7.8504C9.51242 7.8504 10.5437 6.80688 10.5437 5.73881C10.5437 5.05131 9.9421 3.3203 9.75795 2.7924L11.0716 2.1049C11.5749 3.45534 11.845 4.69529 11.845 5.73881C11.845 7.86268 10.2122 9.66735 7.72002 9.66735C5.30151 9.66735 3.70553 8.14504 3.87741 5.73881C3.93879 4.69529 4.40531 3.54128 4.7245 2.87834L5.90307 3.41851ZM6.82382 2.12946C7.21667 1.74888 7.58497 1.38058 7.96555 1L9.09501 2.12946C8.71443 2.51003 8.34613 2.89061 7.96555 3.25891C7.58497 2.89061 7.21667 2.51003 6.82382 2.12946Z"></path>
//                                 </svg>
//                               </div>
//                             </div>
//                             <span className="w-8 bg-rose-500 text-white rounded-md p-1  text-xs">
//                               {CalculatePercentage(item.price,item.discountPrice)}%
//                             </span>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className="w-full lg:w-4/12 bg-gray-100 border-2 rounded-md p-2 h-32 lg:h-56">
//               <div className="flex justify-between">
//                 <p className="text-xs lg:text-sm text-gray-500">
//                   قیمت کالاها ({cart.length})
//                 </p>
//                 <div className="flex gap-x-1">
//                   <p className="text-xs lg:text-sm">{cart.reduce(getTottalPrice,0).toLocaleString()}</p>
//                   <svg
//                     className="w-5 fill-gray-500"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M3.52231 9.85151C3.70646 11.2265 3.81695 13.9888 3.7924 15.5724C3.76785 16.751 3.91517 17.107 4.86047 17.107H4.92186L5.02007 18.0278L4.92186 18.9363H4.86047C3.00669 18.9363 2.31919 17.8559 2.31919 15.8057C2.30692 13.9642 2.2087 11.6194 2 10.183L3.52231 9.85151Z"></path>
//                     <path d="M4.80273 18.9363L4.83956 17.107H5.06054C5.64983 17.107 6.20228 16.7633 6.63196 15.953C7.35629 14.6026 8.04378 13.7187 8.97681 13.6696C11.3462 13.5468 12.0705 17.7086 10.2168 18.8258C9.51699 19.2555 8.36298 18.8381 7.04937 18.0155C6.53375 18.6416 5.83398 18.9363 5.03599 18.9363H4.80273ZM7.83508 16.5669C8.78039 17.1439 9.54154 17.4508 9.76252 17.2912C10.3027 16.9474 9.95895 15.3146 9.0382 15.3146C8.719 15.3146 8.32615 15.6216 7.83508 16.5669Z"></path>
//                     <path d="M12.1629 20.9374C14.3727 20.4586 15.6004 19.8693 16.0055 18.9485C14.4709 18.924 13.145 18.7521 12.654 17.7086C11.9419 16.1863 13.0837 13.5713 14.7656 13.5713C16.0915 13.5713 17.0859 15.2164 17.3314 17.107H17.847L17.9452 18.0278L17.847 18.9363H17.2946C16.8894 20.7655 15.2321 22.0423 12.7276 22.5211L12.1629 20.9374ZM13.7834 16.6774C14.029 17.0088 14.9374 17.0948 16.0301 17.107C15.8214 16.1372 15.3426 15.3269 14.741 15.2164C14.0167 15.0691 13.4765 16.2477 13.7834 16.6774Z"></path>
//                     <path d="M17.6909 18.9363V17.107H18.2802C19.9621 17.107 20.5022 16.8124 20.5022 16.2599C20.49 15.8425 19.9375 14.4184 19.827 14.1975L21.1284 13.4854C21.3616 13.9888 21.865 15.376 21.865 16.3459C21.8527 18.0032 20.7601 18.9363 18.5502 18.9363H17.6909ZM17.8136 11.9877C18.1451 11.6439 18.5011 11.3002 18.8326 10.9564C19.1764 11.3002 19.5201 11.6439 19.8516 11.9877C19.5201 12.3314 19.1764 12.6629 18.8326 13.0066C18.5011 12.6629 18.1451 12.3314 17.8136 11.9877ZM19.9621 11.9877C20.2935 11.6439 20.6496 11.3002 20.981 10.9564C21.3248 11.3002 21.6685 11.6439 22 11.9877C21.6685 12.3314 21.3248 12.6629 20.981 13.0066C20.6496 12.6629 20.2935 12.3314 19.9621 11.9877Z"></path>
//                     <path d="M5.90307 3.41851C5.57159 4.16739 5.26468 4.92855 5.24012 5.73881C5.19102 7.18746 6.11177 7.8504 7.72002 7.8504C9.51242 7.8504 10.5437 6.80688 10.5437 5.73881C10.5437 5.05131 9.9421 3.3203 9.75795 2.7924L11.0716 2.1049C11.5749 3.45534 11.845 4.69529 11.845 5.73881C11.845 7.86268 10.2122 9.66735 7.72002 9.66735C5.30151 9.66735 3.70553 8.14504 3.87741 5.73881C3.93879 4.69529 4.40531 3.54128 4.7245 2.87834L5.90307 3.41851ZM6.82382 2.12946C7.21667 1.74888 7.58497 1.38058 7.96555 1L9.09501 2.12946C8.71443 2.51003 8.34613 2.89061 7.96555 3.25891C7.58497 2.89061 7.21667 2.51003 6.82382 2.12946Z"></path>
//                   </svg>
//                 </div>
//               </div>
//               <div className="mt-4 flex justify-between border-b pb-3">
//                 <p className="text-xs lg:text-sm text-red-500">تخفیف کالاها</p>
//                 <div className="flex gap-x-1">
//                   <p className="text-xs lg:text-sm text-red-500">{cart.reduce(getTottalDiscount,0).toLocaleString()}</p>
//                   <svg
//                     className="w-5 fill-red-500"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M3.52231 9.85151C3.70646 11.2265 3.81695 13.9888 3.7924 15.5724C3.76785 16.751 3.91517 17.107 4.86047 17.107H4.92186L5.02007 18.0278L4.92186 18.9363H4.86047C3.00669 18.9363 2.31919 17.8559 2.31919 15.8057C2.30692 13.9642 2.2087 11.6194 2 10.183L3.52231 9.85151Z"></path>
//                     <path d="M4.80273 18.9363L4.83956 17.107H5.06054C5.64983 17.107 6.20228 16.7633 6.63196 15.953C7.35629 14.6026 8.04378 13.7187 8.97681 13.6696C11.3462 13.5468 12.0705 17.7086 10.2168 18.8258C9.51699 19.2555 8.36298 18.8381 7.04937 18.0155C6.53375 18.6416 5.83398 18.9363 5.03599 18.9363H4.80273ZM7.83508 16.5669C8.78039 17.1439 9.54154 17.4508 9.76252 17.2912C10.3027 16.9474 9.95895 15.3146 9.0382 15.3146C8.719 15.3146 8.32615 15.6216 7.83508 16.5669Z"></path>
//                     <path d="M12.1629 20.9374C14.3727 20.4586 15.6004 19.8693 16.0055 18.9485C14.4709 18.924 13.145 18.7521 12.654 17.7086C11.9419 16.1863 13.0837 13.5713 14.7656 13.5713C16.0915 13.5713 17.0859 15.2164 17.3314 17.107H17.847L17.9452 18.0278L17.847 18.9363H17.2946C16.8894 20.7655 15.2321 22.0423 12.7276 22.5211L12.1629 20.9374ZM13.7834 16.6774C14.029 17.0088 14.9374 17.0948 16.0301 17.107C15.8214 16.1372 15.3426 15.3269 14.741 15.2164C14.0167 15.0691 13.4765 16.2477 13.7834 16.6774Z"></path>
//                     <path d="M17.6909 18.9363V17.107H18.2802C19.9621 17.107 20.5022 16.8124 20.5022 16.2599C20.49 15.8425 19.9375 14.4184 19.827 14.1975L21.1284 13.4854C21.3616 13.9888 21.865 15.376 21.865 16.3459C21.8527 18.0032 20.7601 18.9363 18.5502 18.9363H17.6909ZM17.8136 11.9877C18.1451 11.6439 18.5011 11.3002 18.8326 10.9564C19.1764 11.3002 19.5201 11.6439 19.8516 11.9877C19.5201 12.3314 19.1764 12.6629 18.8326 13.0066C18.5011 12.6629 18.1451 12.3314 17.8136 11.9877ZM19.9621 11.9877C20.2935 11.6439 20.6496 11.3002 20.981 10.9564C21.3248 11.3002 21.6685 11.6439 22 11.9877C21.6685 12.3314 21.3248 12.6629 20.981 13.0066C20.6496 12.6629 20.2935 12.3314 19.9621 11.9877Z"></path>
//                     <path d="M5.90307 3.41851C5.57159 4.16739 5.26468 4.92855 5.24012 5.73881C5.19102 7.18746 6.11177 7.8504 7.72002 7.8504C9.51242 7.8504 10.5437 6.80688 10.5437 5.73881C10.5437 5.05131 9.9421 3.3203 9.75795 2.7924L11.0716 2.1049C11.5749 3.45534 11.845 4.69529 11.845 5.73881C11.845 7.86268 10.2122 9.66735 7.72002 9.66735C5.30151 9.66735 3.70553 8.14504 3.87741 5.73881C3.93879 4.69529 4.40531 3.54128 4.7245 2.87834L5.90307 3.41851ZM6.82382 2.12946C7.21667 1.74888 7.58497 1.38058 7.96555 1L9.09501 2.12946C8.71443 2.51003 8.34613 2.89061 7.96555 3.25891C7.58497 2.89061 7.21667 2.51003 6.82382 2.12946Z"></path>
//                   </svg>
//                 </div>
//               </div>
//               <div className="mt-4 flex justify-between">
//                 <p className="text-xs lg:text-sm ">جمع سبد خرید</p>
//                 <div className="flex gap-x-1">
//                   <p className="text-xs lg:text-sm">{tottalPriceAfterDiscount.toLocaleString()}</p>
//                   <svg
//                     className="w-6"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M3.52231 9.85151C3.70646 11.2265 3.81695 13.9888 3.7924 15.5724C3.76785 16.751 3.91517 17.107 4.86047 17.107H4.92186L5.02007 18.0278L4.92186 18.9363H4.86047C3.00669 18.9363 2.31919 17.8559 2.31919 15.8057C2.30692 13.9642 2.2087 11.6194 2 10.183L3.52231 9.85151Z"></path>
//                     <path d="M4.80273 18.9363L4.83956 17.107H5.06054C5.64983 17.107 6.20228 16.7633 6.63196 15.953C7.35629 14.6026 8.04378 13.7187 8.97681 13.6696C11.3462 13.5468 12.0705 17.7086 10.2168 18.8258C9.51699 19.2555 8.36298 18.8381 7.04937 18.0155C6.53375 18.6416 5.83398 18.9363 5.03599 18.9363H4.80273ZM7.83508 16.5669C8.78039 17.1439 9.54154 17.4508 9.76252 17.2912C10.3027 16.9474 9.95895 15.3146 9.0382 15.3146C8.719 15.3146 8.32615 15.6216 7.83508 16.5669Z"></path>
//                     <path d="M12.1629 20.9374C14.3727 20.4586 15.6004 19.8693 16.0055 18.9485C14.4709 18.924 13.145 18.7521 12.654 17.7086C11.9419 16.1863 13.0837 13.5713 14.7656 13.5713C16.0915 13.5713 17.0859 15.2164 17.3314 17.107H17.847L17.9452 18.0278L17.847 18.9363H17.2946C16.8894 20.7655 15.2321 22.0423 12.7276 22.5211L12.1629 20.9374ZM13.7834 16.6774C14.029 17.0088 14.9374 17.0948 16.0301 17.107C15.8214 16.1372 15.3426 15.3269 14.741 15.2164C14.0167 15.0691 13.4765 16.2477 13.7834 16.6774Z"></path>
//                     <path d="M17.6909 18.9363V17.107H18.2802C19.9621 17.107 20.5022 16.8124 20.5022 16.2599C20.49 15.8425 19.9375 14.4184 19.827 14.1975L21.1284 13.4854C21.3616 13.9888 21.865 15.376 21.865 16.3459C21.8527 18.0032 20.7601 18.9363 18.5502 18.9363H17.6909ZM17.8136 11.9877C18.1451 11.6439 18.5011 11.3002 18.8326 10.9564C19.1764 11.3002 19.5201 11.6439 19.8516 11.9877C19.5201 12.3314 19.1764 12.6629 18.8326 13.0066C18.5011 12.6629 18.1451 12.3314 17.8136 11.9877ZM19.9621 11.9877C20.2935 11.6439 20.6496 11.3002 20.981 10.9564C21.3248 11.3002 21.6685 11.6439 22 11.9877C21.6685 12.3314 21.3248 12.6629 20.981 13.0066C20.6496 12.6629 20.2935 12.3314 19.9621 11.9877Z"></path>
//                     <path d="M5.90307 3.41851C5.57159 4.16739 5.26468 4.92855 5.24012 5.73881C5.19102 7.18746 6.11177 7.8504 7.72002 7.8504C9.51242 7.8504 10.5437 6.80688 10.5437 5.73881C10.5437 5.05131 9.9421 3.3203 9.75795 2.7924L11.0716 2.1049C11.5749 3.45534 11.845 4.69529 11.845 5.73881C11.845 7.86268 10.2122 9.66735 7.72002 9.66735C5.30151 9.66735 3.70553 8.14504 3.87741 5.73881C3.93879 4.69529 4.40531 3.54128 4.7245 2.87834L5.90307 3.41851ZM6.82382 2.12946C7.21667 1.74888 7.58497 1.38058 7.96555 1L9.09501 2.12946C8.71443 2.51003 8.34613 2.89061 7.96555 3.25891C7.58497 2.89061 7.21667 2.51003 6.82382 2.12946Z"></path>
//                   </svg>
//                 </div>
//               </div>
//               <div className="mt-16 hidden lg:block">
//                 <button className="bg-rose-500 text-white py-1 w-full rounded" onClick={orderHandler}>
//                   ثبت سفارش
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="fixed bottom-0 w-full z-50  lg:hidden mt-4">
//           <button className="bg-rose-500 text-white py-2 w-full rounded" onClick={orderHandler}>
//             ثبت سفارش
//           </button>
//         </div>
//       </>
//     );
//   } else {
//     return (<div className="w-full px-4 lg:px-20 mt-10 h-80">
//       <div className="flex justify-center items-center text-rose-500">
//         <p>سبد خرید خالی است</p>
//       </div>
//     </div>)
//   }

return(
  <Cart/>
);
};

export default page;
