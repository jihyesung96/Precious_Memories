import Link from "next/link";
import style from "./post.module.css";
import Image from "next/image";

export default function Post() {
  const publicIcon = {
    heart: "/images/heart.png",
    comment: "/images/comment.png",
  };
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "dung",
    nickname: "둥가리오스",
    image: "/images/dung.jpg",
    title: "둥이는 지금 피곤해",
  };
  return (
    <Link href={`/memory/${me.id}`}>
      <div className="w-[250px] h-[300px] transition-all duration-300 ease-custom-ease">
        <div className={style.post}>
          <Image src={me.image} height={250} width={250} alt="사진" />
        </div>
        <div className={style.title}>{me.title}</div>
        <div className={style.sub}>
          <div>2024.10.16</div>
          <div className={style.heart}>
            <Image src={publicIcon.heart} height={20} width={20} alt="좋아요" />
            <span>300</span>
          </div>
          <div className={style.comment}>
            <Image src={publicIcon.comment} height={20} width={30} alt="댓글" />
            <span>7</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
