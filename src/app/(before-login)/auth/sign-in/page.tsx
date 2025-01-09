import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../../public/images/Logo1.png";
import BackButton from "../../_component/BackButton";
import { GitHubLogin } from "../../_component/GitHubLogin";
import { signIn } from "@/src/auth";

export default function Login() {
  interface InputProps {
    type?: string;
    name: string;
    placeholder: string;
    required: boolean;
    className?: string; // 선택적으로 className 허용
  }

  interface LabelProps {
    htmlFor: string;
    text: string;
  }

  const Input: React.FC<InputProps> = ({ name, type, placeholder, className, required }) => {
    return (
      <input
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        required={required}
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
    <div className="w-full h-screen flex justify-center items-center bg-[rgba(0, 0, 0, 0.4)]">
      <div className="lg:w-[40%] md:w-[50%] w-[70%] flex flex-col justify-center relative">
        <BackButton />
        <div className="flex justify-center items-center">
          <Image src={Logo} width={150} height={150} alt="logo" />
        </div>
        <p className="text-base text-foreground font-bold">
          아직 추억을 기록하지 않았나요?
          <Link className="text-foreground font-medium underline pl-2 hover:text-white" href="/sign-up">
            Sign up
          </Link>
        </p>
        <form
          className="flex-1 flex flex-col min-w-64"
          action={async (formData) => {
            "use server";
            await signIn("credentials", {
              nickname: formData.get("nickname") || "",
              email: formData.get("email") || "",
              password: formData.get("password") || "",
            });
          }}
        >
          <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
            <Label htmlFor="email" text={"Email"} />
            <Input name="email" type="email" placeholder="you@example.com" required={true} />
            <div className="flex justify-between items-center">
              <Label htmlFor="password" text={"Password"} />
              <Link className="text-xs text-foreground underline hover:text-white" href="/forgot-password">
                Forgot Password?
              </Link>
            </div>
            <Input type="password" name="password" placeholder="Your password" required={true} />
            <button className="bg-white  rounded-[7px] font-bold h-[38px] hover:bg-blue-300 hover:text-white">
              L O G I N
            </button>
            {/* <FormMessage message={searchParams} /> */}
          </div>
        </form>
        <GitHubLogin />
      </div>
    </div>
  );
}
