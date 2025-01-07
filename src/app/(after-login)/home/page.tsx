import Post from "../_component/Post";
import style from "./home.module.css";

export default function Home() {
  return (
    <main className={style.main}>
      <header className={style.profile}></header>
      <div className={style.content}>
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
