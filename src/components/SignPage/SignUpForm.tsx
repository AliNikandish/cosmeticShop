"use client";
import { useRouter } from "next/navigation";
import  { useState } from "react";

const SignUpForm = () => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const router=useRouter()
  
  async function  handleSignup(){
    const name='test'
    const password='test'
    const userName='test1'
    const email = 'test1@mysite.com'
      const res = await fetch(`/api/auth/sign-up/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
    name,
    userName,
    email,
    password
      }),
    });

    if(res.ok){
      const response = await res.json()
      router.replace("/");
      router.refresh()
    }else{
      alert('مشکلی پیش اومده')
    }
   
  }

  return (
    <form action="">
    <div className="flex flex-col">
      <label htmlFor="name">نام</label>
      <input
        name="name"
        className="border-b-2 mt-1 outline-0 px-1 py-0.5"
        type="text"
        value={name}
        onChange={e=>setName(e.target.value)}
      />
    </div>
    <div className="flex flex-col  mt-10">
      <label htmlFor="user-name">نام کاربری</label>
      <input
        name="user-name"
        className="border-b-2 mt-1 outline-0 px-1 py-0.5"
        type="text"
        value={userName}
        onChange={e=>setUserName(e.target.value)}
      />
    </div>
    <div className="flex flex-col mt-10">
      <label htmlFor="email">ایمیل</label>
      <input
        name="email"
        className="border-b-2 mt-1 outline-0 px-1 py-0.5 "
        type="email"
        value={email}
        onChange={e=>setEmail(e.target.value)}
      />
    </div>
    <div className="flex flex-col mt-10">
      <label htmlFor="current-password">رمز عبور</label>
      <input
        name="current-password"
        className="border-b-2 mt-1 outline-0 px-1 py-0.5"
        type="password"
        value={password}
        onChange={e=>setPassword(e.target.value)}
        autoComplete=""
      />
    </div>
    <div className="mt-10">
      <button type="button" className="bg-rose-600 text-white p-2 w-full rounded-md hover:bg-rose-700" onClick={handleSignup}>
        ثبت نام
      </button>
    </div>
  </form>
  )
}

export default SignUpForm