import React from 'react'
import { FaBasketShopping } from 'react-icons/fa6'
import HeadSection from '../HeadSection'

const Popular = () => {
  return (
    <div className='w-full  px-20 mt-10 mb-20'>
    <HeadSection title='محبوب ترین محصولات' subTitle='محبوب از نگاه شما' other='مشاهده محصولات' href='products' />
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      <div className='w-[300px] border relative'>
        <div className='relative'>
          <div className='off-badge absolute top-[0px] right-2 p-1 text-xs bg-pink-600 text-white w-8 h-8 flex justify-center items-center ' style={{borderRadius:' 0 0 50% 50%'}}>10%</div>
          <img src="https://cantiner.ir/storage/image/IsVPM9TULG.jpeg" alt="" />
        </div>
        <p className='text-center'>ماسک صورت شب بایو آکوا</p>
        <p className='text-center'>ماسک صورت</p>
        <p className='text-center mb-5 text-pink-500'>389.000 تومان</p>
        <div className='absolute right-1/2 bottom-[-15px] w-7 h-7 rounded-full p-2 bg-slate-700 text-white text-sm flex items-center justify-center'>
        <FaBasketShopping />
        </div>
      </div>
      <div className='w-[300px] border relative'>
        <div className='relative'>
          <div className='off-badge absolute top-[0px] right-2 p-1 text-xs bg-pink-600 text-white w-8 h-8 flex justify-center items-center ' style={{borderRadius:' 0 0 50% 50%'}}>10%</div>
          <img src="https://cantiner.ir/storage/image/IsVPM9TULG.jpeg" alt="" />
        </div>
        <p className='text-center'>ماسک صورت شب بایو آکوا</p>
        <p className='text-center'>ماسک صورت</p>
        <p className='text-center mb-5 text-pink-500'>389.000 تومان</p>
        <div className='absolute right-1/2 bottom-[-15px] w-7 h-7 rounded-full p-2 bg-slate-700 text-white text-sm flex items-center justify-center'>
        <FaBasketShopping />
        </div>
      </div>
      <div className='w-[300px] border relative'>
        <div className='relative'>
          <div className='off-badge absolute top-[0px] right-2 p-1 text-xs bg-pink-600 text-white w-8 h-8 flex justify-center items-center ' style={{borderRadius:' 0 0 50% 50%'}}>10%</div>
          <img src="https://cantiner.ir/storage/image/IsVPM9TULG.jpeg" alt="" />
        </div>
        <p className='text-center'>ماسک صورت شب بایو آکوا</p>
        <p className='text-center'>ماسک صورت</p>
        <p className='text-center mb-5 text-pink-500'>389.000 تومان</p>
        <div className='absolute right-1/2 bottom-[-15px] w-7 h-7 rounded-full p-2 bg-slate-700 text-white text-sm flex items-center justify-center'>
        <FaBasketShopping />
        </div>
      </div>
      <div className='w-[300px] border relative'>
        <div className='relative'>
          <div className='off-badge absolute top-[0px] right-2 p-1 text-xs bg-pink-600 text-white w-8 h-8 flex justify-center items-center ' style={{borderRadius:' 0 0 50% 50%'}}>10%</div>
          <img src="https://cantiner.ir/storage/image/IsVPM9TULG.jpeg" alt="" />
        </div>
        <p className='text-center'>ماسک صورت شب بایو آکوا</p>
        <p className='text-center'>ماسک صورت</p>
        <p className='text-center mb-5 text-pink-500'>389.000 تومان</p>
        <div className='absolute right-1/2 bottom-[-15px] w-7 h-7 rounded-full p-2 bg-slate-700 text-white text-sm flex items-center justify-center'>
        <FaBasketShopping />
        </div>
      </div>

    </div>
  </div>
  )
}

export default Popular