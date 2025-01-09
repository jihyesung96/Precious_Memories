export default async function Page() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "dung",
    nickname: "둥가리오스",
    image: "/images/dung.jpg",
    title: "둥이는 지금 피곤해",
    subTitle: "둥이는 신나게 놀고 피곤해 하는중입니다.",
  };

  const res = await fetch("http://localhost:3000/api/test", { method: "post" });
  const data = await res.json();
  console.log("data", data);

  return (
    <div className="flex flex-col gap-4">
      <img src={me.image} className="p-20" />
      <div>
        <div>{me.title}</div>
        <div>{me.subTitle}</div>
      </div>
    </div>
  );
}
