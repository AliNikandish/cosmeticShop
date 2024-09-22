import React from 'react'
import './style.css'
import { LuPhoneCall } from 'react-icons/lu'
import { TiPinOutline } from 'react-icons/ti'
import { FaPinterest, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Topbar = () => {
  return (
    <div className='w-full h-24 bg-pink-100  relative hidden lg:block'>
        <div className='w-full h-3 bg-rose-500'></div>
        {/* <div className='topbar-Trapezoid'></div> */}
        <div className='flex justify-between items-center px-20 mt-2'>
        <div className='topbar-Trapezoid'></div>

            <div className='z-10  flex gap-x-20'>

                <div className='flex gap-x-2 items-center'>
                    <div>
                        <img src="lipmaticlogo2.png" alt="" className='w-4' />
                    </div>
                    <div className='text-center'>
                        <p className='text-gray-100'>فروشگاه آرایشی</p>
                        <span className='text-xs text-gray-200'>توضیحات فروشگاه</span>
                    </div>
                </div>

                <div className='flex gap-x-2 items-center'>
                    <div className='text-rose-500 text-4xl'>
                    <LuPhoneCall />


                    </div>
                    <div className='text-center'>
                        <p className=''>پشتیبانی:</p>
                        <span className='text-xs text-gray-500'>066-33221199</span>
                    </div>
                </div>

                <div className='flex gap-x-2 items-center'>
                    <div className='text-rose-500 text-4xl'>
                    <TiPinOutline />

                    </div>
                    <div className='text-center'>
                        <p className=''>آدرس فروشگاه:</p>
                        <span className='text-xs text-gray-500'>خرم آباد-گلدشت</span>
                    </div>
                </div>
            </div>
            <div className='flex items-center  gap-x-2'>
                <div className='text-black bg-white rounded-full p-0.5'>
                <FaXTwitter  />
                </div>
                <div className='text-black bg-white rounded-full p-0.5'>
                <FaYoutube />
                </div>
                <div className='text-black bg-white rounded-full p-0.5'>
                <FaPinterest />
                </div>
                <div className='text-black bg-white rounded-full p-0.5'>
                <FaWhatsapp />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar