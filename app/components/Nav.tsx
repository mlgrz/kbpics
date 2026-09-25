import Link from "next/link";

export default function SideNav() {
  return (
    <nav style={{ display: "flex", justifyContent: "center", zIndex: "100" }}>
      <Link href={"/"}>
        <h1 style={{ textAlign: "right" }}>
          Karl
          <br />
          Benedict
          <br />
          Pics
        </h1>
      </Link>
      <div
        className="nav-links"
        style={{
          marginLeft: "10px",
          display: "flex",
          flexDirection: "column",
          fontWeight: "normal",
          color: "grey",
          justifyContent: "center",
          fontFamily: "fangsong",
          gap: "5px",
        }}
      >
        <Link href={"/photos"}>Photographs</Link>
        <Link href={"/albums"}>Albums</Link>
        <Link href={"/about"}>About</Link>
      </div>
    </nav>
  );
}
