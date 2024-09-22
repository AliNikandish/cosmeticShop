import SendArticleComment from "@/components/blogPage/SendArticleComment";
import React from "react";
import { FaBookmark, FaComment, FaUser } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import prisma from "../../../../lib/prismaDB";
import {
  FormatTimelong,
  FormatTimelongWithHour,
} from "../../../../utils/Helper";

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;

  let article = null;
  article = await prisma.article.findFirst({
    where: {
      id,
    },
    include: {
      _count: true,
      category: {
        select: {
          title: true,
        },
      },
      author: {
        select: {
          name: true,
        },
      },
      Comment: {
        include: {
          author: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return (
    <div className="w-full px-4 lg:px-20 mt-10">
      <div className="border rounded-md p-4 w-full md:w-2/3 mx-auto ">
        <a
          href=""
          className="px-2 py-1 bg-rose-500 text-white rounded-2xl text-[10px]"
        >
          {article?.category.title}
        </a>
        <h2 className="font-IRANSansBold text-2xl mt-2">{article?.title}</h2>
        <div className="mt-4 flex justify-between">
          <div className="flex gap-x-4">
            <div className="flex items-center gap-x-1 text-xs">
              <FaUser />
              <span className="font-IRANSansMedium ">
                {article?.author.name}
              </span>
            </div>
            <div className="flex items-center gap-x-1 text-xs">
              <GoDotFill size={8} className="text-gray-400" />

              <span className="">{FormatTimelong(article?.createdAt!)}</span>
            </div>
          </div>
          <div className="flex  gap-x-4">
            <div className="flex items-center gap-x-1 text-xs">
              <FaComment className="text-gray-600" />

              <span className="text-[10px]">{article?._count.Comment}</span>
            </div>

            <div className="flex items-center gap-x-1 text-xs">
              <FaBookmark className="text-gray-600" />

              <span className="text-[10px]">
                خواندن این مطلب {article?.duration} دقیقه زمان می برد
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <img src={article?.mainImage} className="rounded-md" alt="" />
        </div>

        <div className="mt-4">
          <p className="text-sm">{article?.summary}</p>
        </div>

        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: article?.content!}}
        ></div>
      </div>
      <div className="mt-8 border rounded-md p-4 w-full md:w-2/3 mx-auto ">
        <div className="">
          <p className="text font-IRANSansMedium border-b-2 pb-4 replay-title relative">
            {article?._count.Comment} دیدگاه
          </p>
          <div className="mt-4">
            {article?.Comment.map((comment) => {
              return (
                <div className="flex gap-x-5 pb-5 border-b mt-4" key={comment.id}>
                  <div>
                    <img
                      className="rounded-full w-12"
                      src="https://secure.gravatar.com/avatar/8e19a546cac1eeb50fe01a38ca943159?s=70&d=mm&r=g"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="font-IRANSansMedium">{comment.author.name}</p>
                    <span className="text-gray-500 text-[10px] mt-4">
                      {FormatTimelongWithHour(comment.createdAt)}
                    </span>
                    <p className="mt-4 text-xs">{comment.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <SendArticleComment />
    </div>
  );
};

export default page;
