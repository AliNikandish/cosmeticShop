
"use client"
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="w-full px-4 lg:px-20 mt-10 h-80">
    <div className="flex justify-center items-center text-gray-500">
      <div className="flex flex-col items-center">
        <img className="w-44" src="notFoundVector.png" alt="" />
        <p className="mt-2">خطای 404</p>
        <p className='mt-1 text-gray-800'>صفحه مورد نظر شما پیدا نشد.</p>
        <div className="mt-10">
          <Link className="border border-rose-500 rounded-md px-3 py-1 text-sm text-rose-500" href='/'>بازگشت به خانه</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page