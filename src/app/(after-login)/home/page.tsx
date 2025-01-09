import Post from "../_component/Post";

export default function Home() {
  return (
    <main className="w-[870px] h-screen">
      <header className="w-full h-[92px]"></header>
      <div className="flex justify-evenly items-center flex-wrap gap-[20px]">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
