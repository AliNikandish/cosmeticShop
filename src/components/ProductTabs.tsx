"use client";
import { useParams, useRouter } from "next/navigation";
import { comment } from "postcss";
import { useEffect, useState } from "react";
import { FaRegCommentAlt, FaStar } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import Swal from "sweetalert2";

type ProductTabsProps={
  description:string,
  isLoggedIn:boolean
}

type userData={
  email:string
}

type comment = {
  authorDetails: {
    Addres: string;
    Cart: [];
    createdAt: string;
    email: string;
    id: string;
    image: string;
    name: string;
    password: string;
    role: string;
    userName: string;
  };
  commentDetail: {
    authorEmail: string;
    content: string;
    createdAt: string;
    id: string;
    productId: string;
    updatedAt: string;
    score:number
  };
};

const ProductTabs = ({ description, isLoggedIn }: ProductTabsProps) => {
  const [userData, setUserData] = useState<userData>({email:''});
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);
  const [score, setScore] = useState(3);

  const { id } = useParams();
  const router = useRouter();

  const setCommentScore = (score: any) => {
    setScore(score);
    Swal.fire({
      title: "امتیاز شما با موفقیت ثبت شد",
      icon: "success",
      confirmButtonText:"ادامه ثبت نظر"
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/auth/me");
      const json = await data.json();
      setUserData(json);
    };
    fetchData();

    const fetchComments = async () => {
      const data = await fetch(`/api/comments/${id}`);
      const json = await data.json();
      setComments(json);
    };
    fetchComments();
  }, []);


  const submitHandler = async () => {
    if (userData.email) {
      const res = await fetch(`/api/comments/${id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          content,
          authorEmail: userData!.email,
          score
        }),
      });

      if (res.status === 200) {
        Swal.fire({
          title: "نظر شما با موفقیت ثبت شد",
          icon: "success",
          confirmButtonText:"باشه"
        });

        setContent("");
        router.refresh();
      }else{
        Swal.fire({
          title: "مشکلی در ثبت نظر پیش آمده است",
          icon: "error",
          confirmButtonText:"خیلی خب"
        });
      }
    }
  };

  const [tab, setTab] = useState("details");
  return (
    <div className="">
      <div className="border-b border-gray-300 bg-rose-500 text-white rounded-tl-xl rounded-tr-xl px-4 pt-2 h-12 ">
        <nav className="flex gap-4 h-[40px]">
          <button
            onClick={() => setTab("details")}
            type="button"
            title=""
            className={`${
              tab === "details"
                ? "bg-white text-black rounded-tl-xl rounded-tr-xl px-4"
                : ""
            } text-sm font-medium`}
          >
            {" "}
            توضیحات{" "}
          </button>
          <button
            onClick={() => setTab("information")}
            type="button"
            title=""
            className={`${
              tab === "information"
                ? "bg-white text-black rounded-tl-xl rounded-tr-xl px-4"
                : ""
            } text-sm font-medium`}
          >
            {" "}
            مشخصات{" "}
          </button>
          <button
            type="button"
            onClick={() => setTab("comments")}
            title=""
            className={`${
              tab === "comments"
                ? "bg-white text-black rounded-tl-xl rounded-tr-xl px-4"
                : ""
            } text-sm font-medium`}
          >
            نظرات
            {/* <span className=" ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100 mr-1">
                      {" "}
                      {comments && comments.length}{" "}
                    </span> */}
          </button>
        </nav>
      </div>

      {tab === "details" ? (
        <div className="mt-5 break-words bg-gray-100 p-3 rounded-md">
          <p className="text-2xl font-bold text-blue-900">توضیحات</p>
          <p className="mt-6">{description}</p>
        </div>
      ) : (
        //  <Comments comments={comments} />
        <>
          <div className="mt-5 p-3 border rounded-md">
            <div className="flex justify-between items-center">
              <p className="font-IRANSansMedium text-sm">دیدگاه کاربرها</p>
              <button
                type="button"
                className=" border border-rose-500 text-rose-500 px-3 py-2 rounded-md font-IRANSansMedium text-sm  "
              >
                افزودن دیدگاه
              </button>
            </div>
            <div className="mt-4 flex gap-x-4">
              <div className="flex items-center gap-x-1">
                <FaStar className="text-rose-500" />
                <span className="text-gray-500 text-xs">2/7 امتیاز</span>
              </div>
              <div className="bg-gray-300 w-px h-5"></div>
              <div className="flex items-center gap-x-2">
                <FaRegCommentAlt />
                <span className="text-gray-500 text-xs">
                  {comments.length} دیدگاه
                </span>
              </div>
            </div>
            <div className="my-4 bg-gray-300 w-full h-px"></div>
            <div className="space-y-4">
              {comments.map((comment:comment) => {
                return (
                  <div key={comment.commentDetail.id} className="border-b pb-4">
                    <div className="flex justify-between text-sm text-gray-400">
                      <p>{comment.authorDetails.name}</p>
                      <span>۱۴۰۳/۶/۲۴</span>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                      <p>{comment.commentDetail.content}</p>
                    </div>
                    <div className="mt-4 text-sm text-gray-400">
                      امتیاز ثبت شده: {comment.commentDetail.score}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-5 p-3 border rounded-md">
            <div className="flex justify-between">
              <p className="font-IRANSansMedium text-sm">افزودن دیدگاه</p>
            <div className="flex gap-x-1 items-center">
              <p className="text-sm text-gray-500">امتیاز شما:</p>
              <div
              id=""
              className="rate flex gap-x-1 items-baseline text-gray-500 text-sm"
            >
              {Array.from({length: score}, (_, i) => i + 1).map((arr,index) => {                
                return (
                  <i key={index}>
                    {" "}
                    <FaStar
                      className="text-yellow-400"
                      onClick={() => setCommentScore(arr)}
                    />
                  </i>
                );
              })}

              {Array.from({length:5-score}, (_, i) => i+score+1).map((arr,index) => {
                return (
                  <i key={index}>
                    {" "}
                    <FaStar
                      onClick={() => setCommentScore(arr)}
                    />
                  </i>
                );
              })}
            </div>
            </div>
            </div>
            
            <div className="mt-4">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="rounded-md border-2 w-full resize-none outline-0 p-2 text-sm min-h-36"
                name=""
                id=""
              ></textarea>
            </div>
            <div className="mt-4 text-left">
              <button
                type="button"
                onClick={submitHandler}
                className="bg-rose-500 text-white px-2 py-1 rounded-md"
              >
                فرستادن دیدگاه
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductTabs;
