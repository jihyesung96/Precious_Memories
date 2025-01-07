import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="w-full h-dvh flex justify-center items-center bg-[rgba(0, 0, 0, 0.4)]">
      <form className="flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-64 max-w-64 mx-auto">
        <div>
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <p className="text-sm text-secondary-foreground">
            이미 추억을 기록중이신가요?
            <Link className="text-primary underline hover:text-white" href="/sign-in">
              Sign in
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-2">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            name="email"
            placeholder="you@example.com"
            required
            className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="bg-white  rounded-[7px] font-bold h-[38px] hover:bg-blue-300 hover:text-white">
            Reset Password
          </button>
          {/* <FormMessage message={searchParams} /> */}
        </div>
      </form>
      {/* <SmtpMessage /> */}
    </div>
  );
}
