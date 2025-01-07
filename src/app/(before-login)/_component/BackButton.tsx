"use client";

import { useEffect } from "react";
// import style from "./backButton.module.css";
import { redirect, useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const onClickClose = () => {
    redirect("/");
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        redirect("/");
      }
    };

    // ESC 키 이벤트 리스너 등록
    window.addEventListener("keydown", handleEsc);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [router]);
  return (
    <button
      className="w-[34px] h-[34px] rounded-[17px] border-none bg-[rgba(15, 20, 25, 0)] absolute left-0 top-0 flex justify-center items-center hover:bg-[rgba(15, 20, 25, 0.1)]"
      onClick={onClickClose}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-z80fyv r-19wmn03"
      >
        <g>
          <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
        </g>
      </svg>
    </button>
  );
}
