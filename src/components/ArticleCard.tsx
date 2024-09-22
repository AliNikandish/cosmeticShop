import Link from "next/link";
import React from "react";
import { FaCircleArrowLeft, FaRegCalendarDays } from "react-icons/fa6";
import { FormatTimelong} from "../../utils/Helper";


type ArticleCardProps = {
  title: string
  mainImage: string
  createdAt: Date
  summary: string
  id: string
  category: { title: string|null }
}

const ArticleCard = ({article}:{article:ArticleCardProps}) => {
  
  return (
    <div className="w-[300px] h-[240px] p-2 rounded border-2">
      <div className="relative">
        <img
          className="rounded h-[150px] w-full"
          src={article.mainImage}
          alt=""
        />
        <div className="absolute bottom-[-17px] left-[21px]">
          <Link href={`/blog/${article.id}`}>
          <div className="text-rose-500 bg-white px-2 pt-2 pb-1 rounded-full">
            <FaCircleArrowLeft />
          </div>
          </Link>
        </div>
      </div>
      <div className="mt-2 flex gap-x-1 text-gray-500 ">
        <FaRegCalendarDays size={12} />

        <p className="text-[10px] ">{FormatTimelong(article.createdAt)}</p>
      </div>
      <div>
        <Link href={`/blog/${article.id}`}>
          <p className="line-clamp-1 text-blue-900 font-IRANSansMedium text-sm mt-1">
            {article.title}
          </p>
        </Link>
        <p className="line-clamp-1 text-[10px] text-gray-500 mt-1">
         {article.summary}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
