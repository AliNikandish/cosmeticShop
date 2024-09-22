"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router=useRouter()

  async function handlesignin() {
    // const password = "test";
    // const email = "test@mysite.com";
    const res = await fetch(`/api/auth/sign-in/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
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
      <div className="flex flex-col mt-10">
        <label htmlFor="email">ایمیل</label>
        <input
          name="email"
          className="border-b-2 mt-1 outline-0 px-1 py-0.5 "
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-10">
        <label htmlFor="current-password">رمز عبور</label>
        <input
          name="current-password"
          className="border-b-2 mt-1 outline-0 px-1 py-0.5"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
           autoComplete=""
        />
      </div>
      <div className="mt-10">
        <button
          type="button"
          className="bg-rose-600 text-white p-2 w-full rounded-md hover:bg-rose-700"
          onClick={handlesignin}
        >
          ورود
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
