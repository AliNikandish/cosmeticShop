import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'

const DeliveryBanner = () => {
  return (
    <div className='w-full px-4 lg:px-20 mt-10 mb-20   '>
        <div className='bg-red-500 rounded-xl relative px-2 lg:px-10 py-8'>
            <div className='text-white'>
                <p className='text-xl font-bold mb-1 text-center sm:text-start'>ارسال کالا در سریع ترین زمان ممکن</p>
                <p className='text-sm text-center sm:text-start'>ارسال فوری کالا یک روز پس از ثبت سفارش</p>
            </div>
            <div className='absolute left-2 md:left-10  bottom-[-30px]  '>
            <img src='delivery.png' className='h-auto w-0 sm:w-[300px] md:w-[300px]  '/>
            </div>
        </div>
    </div>
  )
}

export default DeliveryBanner