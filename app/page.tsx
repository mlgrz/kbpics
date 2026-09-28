"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { pictures } from "./lib/data";
import { GalleryItem } from "./lib/definitions";
import { useState } from "react";

export default function Home() {
  const [lightBox, setLightBox] = useState("");

  console.log(lightBox);
  return (
    <>
      {lightBox ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#0000009f",
            display: "flex",
            position: "fixed",
            top: "50%" /* 2. Moves top edge to the middle */,
            left: " 50%" /* 3. Moves left edge to the middle */,
            transform:
              "translate(-50%, -50%)" /* 4. Shifts it back by half its own size */,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 300,
          }}
        >
          <button
            onClick={() => setLightBox("")}
            style={{
              position: "absolute",
              zIndex: 300,
              top: 20,
              left: 40,
            }}
          >
            X
          </button>
          <Image
            src={lightBox}
            alt="test"
            width={700}
            height={700}
            style={{
              width: "auto",
              height: "80vh",
              display: "block",
              // boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.6)",
              // position: "relative",
            }}
          ></Image>
        </div>
      ) : null}
      <div className={styles.gallery}>
        {pictures.map((picture) => (
          <div
            className={
              picture.photos
                ? `${styles.album}  ${styles.galleryElement}`
                : styles.galleryElement
            }
            onClick={() => {
              setLightBox(`${picture.cover.src}`);
            }}
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
                justifyContent: "space-between",
              }}
            >
              <h3>{picture.cover.title}</h3>
              <p
                style={{
                  fontWeight: "normal",
                  fontFamily: "fangsong",
                }}
              >
                {picture.cover.date}
              </p>
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
          // </Link>
        ))}
      </div>
    </>
  );
}
