import Link from "next/link";
import style from "./SideNav.module.css";

export default function SideNav() {
  return (
    <nav className={style.nav}>
      <Link href={"/"}>
        <h1 className={style.h1}>Karl Benedict</h1>
      </Link>
      {/* <div className={style.div}>
        <Link href={"/about"}>about</Link>
        <Link href={"/pictures"}>pictures</Link>
      </div> */}
    </nav>
  );
}
