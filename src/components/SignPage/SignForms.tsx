"use client";

import { useEffect, useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

type userData = {
  email: string;
};

const SignForms = () => {
  const [tab, setTab] = useState("sign-up");
  const [userData, setUserData] = useState<userData>({ email: "" });
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetch("/api/auth/me");
      const json = await data.json();
      setUserData(json);
    };
    fetchUserData();
  }, []);


  const handleSignOut = async () => {
    const res = await fetch(`/api/auth/sign-out/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.status === 200) {
      alert("با موفقیت خارج شدید!");
      router.refresh();
    }
  };

  if (!userData.email)
    return (
      <div>
        <div className="w-full lg:w-[450px] h-[600px] shadow-lg border rounded py-12 px-14 relative">
          <div className="mb-10 flex justify-evenly">
            <button
              onClick={() => setTab("sign-up")}
              type="button"
              title=""
              className={`${
                tab === "sign-up" ? "px-4 py-2 border-b-2 border-rose-500" : ""
              }`}
            >
              ثبت نام
            </button>
            <button
              onClick={() => setTab("sign-in")}
              type="button"
              title=""
              className={`${
                tab === "sign-in" ? "px-4 py-2 border-b-2 border-rose-500" : ""
              }`}
            >
              ورود
            </button>
          </div>
          {tab === "sign-up" ? <SignUpForm /> : <SignInForm />}
          <div className="absolute w-[350px] h-[500px] bg-red-700 left-[-350px] top-1/2 -translate-y-1/2 rounded hidden lg:flex">
            <img src="singPoster3.jpg" className="h-full w-full" alt="" />
          </div>
        </div>
      </div>
    );
  else {
    router.push('/')
  }
};

export default SignForms;
