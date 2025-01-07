"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfileImage() {
  const [profileImg, setProfileImg] = useState<string | null>("/images/blank.png");
  const hanleProfileImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    } else {
      setProfileImg("");

      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (event) => {
        if (reader.readyState === 2) {
          const imgUrl = event.target?.result as string;

          setProfileImg(imgUrl);
        }
      };
      event.target.value = "";
    }
  };

  const deleteImage = () => {
    setProfileImg("/images/blank.png");
  };

  return (
    <div>
      <div className="flex justify-center [&>a]:flex [&>a]:justify-center">
        <Image
          src={profileImg || "/images/blank.png"}
          width={150}
          height={150}
          alt="프로필 이미지"
          className="rounded-[50%] h-[150px]"
          onClick={() => {
            document.querySelector<HTMLInputElement>("#image")?.click();
          }}
        />
        <div>
          <button className="border-none bg-inherit" onClick={deleteImage}>
            <svg
              width={12}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>

      <input id="image" name="image" type="file" accept="image/*" onChange={hanleProfileImage} hidden />
    </div>
  );
}
