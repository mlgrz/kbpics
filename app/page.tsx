import Image from "next/image";
import styles from "./page.module.css";
import { pictures } from "./lib/data";
import { PhotoMetaData } from "./lib/definitions";
import Head from "next/head";

function shuffleArray(array: PhotoMetaData[]) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements using array destructuring
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Home() {
  const images = shuffleArray(pictures);
  return (
    <>
      <div
        style={{
          columnCount: 3,
          columnGap: "16px",
          width: "100%",
          // marginTop: "100px",
        }}
      >
        {images.map((picture) => (
          <div
            key={picture.id}
            style={{
              breakInside: "avoid",
              marginBottom: "16px",
            }}
          >
            <Image
              src={picture.src}
              alt="test"
              width={1000}
              height={1000}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
