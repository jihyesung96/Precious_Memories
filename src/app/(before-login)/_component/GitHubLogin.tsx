import { signIn } from "@/src/auth";

export function GitHubLogin() {
  return (
    <div className="mt-[15px]">
      <form
        action={async () => {
          "use server";
          await signIn("github", { callbackUrl: "/home" });
        }}
      >
        <button
          className="w-[100%] bg-white  rounded-[7px] font-bold h-[38px] hover:bg-blue-300 hover:text-white"
          type="submit"
        >
          Signin with GitHub
        </button>
      </form>
    </div>
  );
}
