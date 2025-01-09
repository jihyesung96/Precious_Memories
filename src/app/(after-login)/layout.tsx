import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/Logo1.png";
import { Logout } from "./_component/Logout";
import { getSession } from "@/src/auth";

type Props = { children: React.ReactNode; modal: React.ReactNode };
export default async function AfterLoginLayout({ children, modal }: Props) {
  const session = await getSession();

  if (!session || !session.user) {
    return;
  }

  const { user } = session;

  return (
    <>
      <nav className="flex justify-between px-[100px] border-b border-b-foreground/10 h-16">
        <Link href={"/home"} className="flex items-center gap-2">
          <Image src={Logo} alt="z.com로고" width={40} height={40} />
          <span>precious memories</span>
        </Link>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <Image src={`${user.image}`} alt="프로필" width={20} height={20} className="rounded-[50%]" />
            <span>{user.name} 님 환영합니다</span>
          </div>
          <Logout />
        </div>
      </nav>
      <div className="flex items-stretch bg-white">
        <header className="flex flex-col grow items-center">
          <section className="w-[72px] h-dvh">
            <div className="fixed py-[8px] h-dvh flex flex-col items-center" style={{ width: "inherit" }}>
              <nav>
                <ul></ul>
              </nav>
            </div>
          </section>
        </header>
        <div className="flex items-start h-dvh flex-col">
          <div className="h-screen w-[600px] lg:w-[1200px] flex justify-between ">
            <main className="w-[900px] h-[200dvh]">{children}</main>
            <section className="flex flex-col justify-between lg:inline-block lg:w-[300px] lg:h-screen pr-[40px]">
              <div
                className="text-[20px] font-bold rounded-[16px] my-[16px] py-[12px] px-[16px]"
                style={{ backgroundColor: "rgb(247, 249, 249)" }}
              >
                <h3>최근 댓글</h3>
              </div>
            </section>
          </div>
        </div>
        {modal}
      </div>
    </>
  );
}
