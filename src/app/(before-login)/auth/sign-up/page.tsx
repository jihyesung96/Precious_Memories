import Link from "next/link";
import BackButton from "../../_component/BackButton";
import Image from "next/image";
import Logo from "../../../../../public/images/Logo1.png";

// const signUpAction = async () => {};

export default function Signup() {
  interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    required: boolean;
    className?: string; // 선택적으로 className 허용
    minLength?: number;
  }

  interface LabelProps {
    htmlFor: string;
    text: string;
  }

  const Input: React.FC<InputProps> = ({ name, type, placeholder, className, required, minLength }) => {
    return (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        className={`border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      />
    );
  };

  const Label: React.FC<LabelProps> = ({ htmlFor, text }) => {
    return (
      <label htmlFor={htmlFor} className="font-bold">
        {text}
      </label>
    );
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[rgba(0,0,0,0.4)]">
      <div className=" flex justify-center relative w-full">
        <form className="flex flex-col lg:w-[40%] md:w-[50%] w-[70%]">
          <div className="relative ">
            <BackButton />
            <div className="flex justify-center">
              <Image src={Logo} alt="z.com로고" width={200} height={150} />
            </div>
            <h1 className="text-xl flex justify-center text-center font-bold">
              가입을 완료하고 <br />
              추억을 기록해 보아요!
            </h1>
          </div>
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="email" text="Email" />
            <Input type="text" name="email" placeholder="you@example.com" required={true} />
            <Label htmlFor="nickname" text="Nickname" />
            <Input type="text" name="nickname" placeholder="Your Nickname" required={true} />
            <Label htmlFor="password" text="Password" />
            <Input type="password" name="password" placeholder="Your password" minLength={6} required={true} />
            <p className="text-sm font-bold text text-foreground mb-2">
              이미 추억을 기록중이신가요?
              <Link className="text-primary font-medium underline pl-1 hover:text-white" href="/sign-in">
                Sign in
              </Link>
            </p>
            <button className="bg-white  rounded-[7px] font-bold h-[38px] hover:bg-blue-300 hover:text-white">
              Sign up
            </button>
          </div>
        </form>
        {/* <SmtpMessage /> */}
      </div>
    </div>
  );
}
