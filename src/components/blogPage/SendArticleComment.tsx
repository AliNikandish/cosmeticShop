"use client"

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const SendArticleComment = () => {
    const [userData, setUserData] = useState<{
      email:string,
      
    }>({
      email:''
    })

    const [comment, setComment] = useState('')
    const { id } = useParams();
    const router = useRouter();

    useEffect(()=>{
        const fetchData = async () => {
          const data = await fetch('/api/auth/me');
        // convert data to json
          const json = await data.json();
          setUserData(json)
        }
    
        // call the function
        fetchData()
      },[])
    
      
      const submitHandler = async () => {
        
    
        if (userData.email) {
          const res = await fetch(`/api/article-comments/${id}`, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              content:comment,
              authorEmail: userData!.email,
            }),
          });
    
          if(res.status===200){
            Swal.fire({
              title: "نظر شما با موفقیت ثبت شد",
              icon: "success",
              confirmButtonText:"باشه"
            });
            setComment('')
            router.refresh()
          }else{
            Swal.fire({
              title: "مشکلی در ثبت نظر پیش آمده است",
              icon: "error",
              confirmButtonText:"خیلی خب"
            });
          }
      
        }
      }
  return (
    <div className="mt-8 border rounded-md p-4 w-full md:w-2/3 mx-auto ">
    <div className="">
      <p className="text font-IRANSansMedium border-b-2 pb-4 replay-title relative">دیدگاهتان را بنویسید.</p>
      <div className="mt-4">
          <textarea className="rounded-md border-2 w-full resize-none outline-0 p-2 text-sm min-h-36" name="" id="" value={comment} onChange={e=>setComment(e.target.value)}></textarea>
      </div>
      <div className="mt-4 text-left">
         <button type="button" className="bg-rose-500 text-white px-2 py-1 rounded-md" onClick={submitHandler}>فرستادن دیدگاه</button>
      </div>
    </div>
    </div>
  )
}

export default SendArticleComment