import React, { ReactNode } from 'react'


type SiteFeaturesItemProp={
  title:string
  subTitle:string
  iconName:ReactNode
}

const SiteFeaturesItem = ({title,subTitle,iconName}:SiteFeaturesItemProp) => {
  return (
    <div className="flex gap-x-2 items-center">
    {iconName}
    <div>
      <p className="text-sm lg:text-base font-IRANSansMedium">{title}</p>
      <p className="text-[10px] lg:text-xs text-gray-500">
          {subTitle}
      </p>
    </div>
  </div>
  )
}

export default SiteFeaturesItem