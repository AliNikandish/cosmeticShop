import React from 'react'
import { FormatTimelong } from '../../../../utils/Helper'
import Link from 'next/link'



type article={
  mainImage:string
  createdAt:Date
  id:string
  title:string
  category:{
    title:string|null
  }
}

type ArticleItemProps={
  ismain?:boolean
  isSmall?:boolean
  article:article
}
const ArticleItem = ({ismain,isSmall,article}:ArticleItemProps) => {
  return (
    <div className='relative h-full'>
    {/* <img className={`rounded-md  w-full ${ismain ?'h-full':'h-[175px]'}`} src="foundation-cream.jpg" alt="" /> */}
        <img className={`rounded-md  w-full ${ismain ?'h-full':'h-[175px]'}`} src={article.mainImage} alt="" />

    <div className="custom-overlay rounded-md absolute top-0 bottom-0 bg-black/30 w-full text-white ">
    <div className="absolute top-1 left-1  bg-rose-500 p-0.5 px-1.5 rounded-md text-[10px]">{article.category.title}</div>
      <div className="bottom-3 absolute z-10 p-3">
      <span className="text-xs">{FormatTimelong(article.createdAt)}</span>
      <Link href={ `/blog/${article.id}`}>
      <p className={`text-lg md:text-base lg:text-lg ${isSmall ? 'text-sm md:text-xs lg:text-sm' : ''}`}>{article.title}</p>
      </Link>
      </div>
      <div style={{
backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),"

      }}
      className="bottom-overlay  absolute bottom-0 w-full h-full rounded-md"></div>
    </div>
    </div>
  )
}

export default ArticleItem