import { signOut } from "@/src/auth";

export function Logout() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          className="w-[100%] bg-white  rounded-[7px] font-bold h-[38px] hover:bg-blue-300 hover:text-white"
          type="submit"
        >
          Logout
        </button>
      </form>
    </div>
  );
}
