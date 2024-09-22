"use client";

import  { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const SignForms = () => {
  const [tab, setTab] = useState("sign-up");

  return (
    <div>
        
      <div className="w-full lg:w-[450px] h-[600px] shadow-lg border rounded py-12 px-14 relative">
        <div className="mb-10 flex justify-evenly">
          <button
            onClick={() => setTab("sign-up")}
            type="button"
            title=""
            className={`${
              tab === "sign-up"
                ? "px-4 py-2 border-b-2 border-rose-500"
                : ""
            }`}
          >
            ثبت نام
          </button>
          <button
            onClick={() => setTab("sign-in")}
            type="button"
            title=""
            className={`${
                tab === "sign-in"
                  ? "px-4 py-2 border-b-2 border-rose-500"
                  : ""
              }`}
          >
            ورود
          </button>
        </div>
        {tab === "sign-up" ? (
          <SignUpForm/>
        ) : (
            <SignInForm/>
        )}
        <div className="absolute w-[350px] h-[500px] bg-red-700 left-[-350px] top-1/2 -translate-y-1/2 rounded hidden lg:flex">
          <img src="singPoster3.jpg" className="h-full w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignForms;
