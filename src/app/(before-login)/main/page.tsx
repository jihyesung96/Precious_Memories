import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/images/Logo1.png";

export default function Main() {
  return (
    <div className="flex lg:flex-row flex-col w-dvw h-dvh bg-cover bg-main-bg items-center">
      <div className="flex lg:flex-1 mt-[100px] md:mt-[70px] lg:mt-0 justify-center items-center">
        <Image src={Logo} alt="logo" width={250} height={250} />
      </div>
      <div className="flex flex-1 flex-col lg:justify-center items-center lg:items-start">
        <h1 className="font-bold text-[30px] lg:text-[64px] lg:my-[48px] mb-[5px]">서로의 행복한 추억</h1>
        <h2 className="font-bold text-[20px] lg:text-[31px] lg:mb-[32px] mb-[10px]">지금 기록하세요.</h2>
        <Link
          href="/auth/sign-up"
          className="w-[300px] h-[40px] rounded-[20px] px-[16px] text-[15px] bg-sign text-white border-none flex items-center justify-center hover:bg-blue-300"
        >
          Sign Up
        </Link>
        <h3 className="font-bold text-[17px] mt-[20px] lg:mt-[40px] mb-[10px] lg:mb-[20px]">
          이미 추억을 기록하셨나요?
        </h3>
        <Link
          href="/auth/sign-in"
          className="w-[300px] h-[40px] rounded-[20px] py-[16px] text-[15px] text-sign border border-login flex justify-center items-center hover:bg-blue-300"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
