import Link from "next/link";
import Image from "next/image";

export default async function Post() {
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
        <div className="cursor-pointer">
          <Image src={me.image} height={250} width={250} alt="사진" />
        </div>
        <div className="text-[15px] font-bold cursor-pointer py-[5px]">{me.title}</div>
        <div className="flex items-center gap-[10px] text-[12px]">
          <div>2024.10.16</div>
          <div className="flex items-center gap-[5px] cursor-pointer">
            <Image src={publicIcon.heart} height={20} width={20} alt="좋아요" />
            <span>300</span>
          </div>
          <div className="flex items-center cursor-pointer">
            <Image src={publicIcon.comment} height={20} width={30} alt="댓글" />
            <span>7</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
