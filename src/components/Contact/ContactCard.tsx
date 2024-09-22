import React, { ReactNode } from 'react'
import { FaMapLocation } from 'react-icons/fa6'


type ContactCardProp = {
  icon:ReactNode;
  title:string;
  desc:string;
};

const ContactCard = ({icon,title,desc}:ContactCardProp) => {
  return (
            <div className='w-[350px] lg:w-[300px] xl:w-[350px] h-[180px] rounded-lg bg-rose-500'>
                <div className='flex items-center justify-center text-white mb-9 mt-3'>
                {icon}
                </div>
                <p className='text-center text-white mb-4 text-lg font-bold'>{title}</p>
                <p className='text-center text-white text-sm'>{desc}</p>
            </div>
  )
}

export default ContactCard