import style from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/Logo1.png";
import { Logout } from "./_component/Logout";

type Props = { children: React.ReactNode; modal: React.ReactNode };
export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <>
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
          <div className="flex gap-5 items-center font-semibold">
            <Link href={"/home"} className="flex items-center gap-2">
              <Image src={Logo} alt="z.com로고" width={40} height={40} />
              <span>precious memories</span>
            </Link>
            <Logout />
          </div>
        </div>
      </nav>
      <div className="flex items-stretch bg-white">
        <header className={style.leftSectionWrapper}>
          <section className={style.leftSection}>
            <div className={style.leftSectionFixed}>
              <Link className={style.logo} href="/home">
                <div className={style.logoPill}>
                  <Image src={Logo} alt="z.com로고" width={40} height={40} />
                  <span>precious memories</span>
                </div>
              </Link>
              <nav>
                <ul></ul>
              </nav>
              <Logout />
            </div>
          </section>
        </header>
        <div className={style.rightSectionWrapper}>
          <div className={style.rightSectionInner}>
            <main className={style.main}>{children}</main>
            <section className={style.rightSection}>
              <div className={style.followRecommend}>
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
