import Image from "next/image";
import styles from "./page.module.css";
import { pictures } from "./lib/data";
import { PhotoMetaData } from "./lib/definitions";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.gallery}>
        {pictures.map((picture) => (
          <Link href={picture.cover.id} key={picture.cover.id}>
            <div
              className={
                picture.photos
                  ? `${styles.album}  ${styles.galleryElement}`
                  : styles.galleryElement
              }
              key={picture.cover.id}
              style={{
                breakInside: "avoid",
                marginBottom: "70px",
                position: "relative",
                height: "100%",
              }}
            >
              <div
                className={styles.photoInfo}
                style={{
                  position: "absolute",
                  inset: 10,
                  zIndex: 110,
                  color: "whitesmoke",
                }}
              >
                <h3>{picture.cover.title}</h3>
              </div>
              <Image
                src={picture.cover.src}
                className={styles.cover}
                alt="test"
                width={1000}
                height={1000}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  // boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)",
                  zIndex: 100,
                  position: "relative",
                }}
              />
              {picture.photos && picture.photos.length > 0 ? (
                picture.photos.map((url, i) => (
                  <Image
                    key={url}
                    src={url}
                    alt="test"
                    width={1000}
                    height={1000}
                    className={styles.albumPhoto}
                    style={
                      {
                        width: `${99 - i * 5}%`,
                        height: `${90 - i * 10}%`,
                        display: "block",
                        margin: "auto",
                        // boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)",
                        "--i": i + 1,
                        zIndex: 99 - i,
                        position: "absolute",
                        inset: 0,
                        top: 0,
                        // left: 100,
                      } as React.CSSProperties
                    }
                  />
                ))
              ) : (
                <></>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
