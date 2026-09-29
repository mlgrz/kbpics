"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { pictures } from "./lib/data";
import { GalleryItem } from "./lib/definitions";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [lightBoxCover, setLightBoxCover] = useState<number | null>(null);

  console.log(selectedImage);
  console.log(`lightbox Cover: ${lightBoxCover}`);
  if (lightBoxCover !== null && lightBoxCover < 0) {
    setLightBoxCover(null);
  }

  // WTF I CANT GET THIS TO WORK

  // if (typeof window !== "undefined") {
  //   window.addEventListener("keydown", (e) => {
  //     if (e.key == "Escape") {
  //       setSelectedImage(null);
  //     } else if (
  //       e.key == "ArrowRight" &&
  //       selectedImage !== null &&
  //       selectedImage.photos !== null &&
  //       selectedImage.photos !== undefined
  //     ) {
  //       if (lightBoxCover == null) {
  //         setLightBoxCover(0);
  //       } else {
  //         if (lightBoxCover === selectedImage.photos.length - 1) {
  //           return;
  //         }
  //         setLightBoxCover(lightBoxCover + 1);
  //       }
  //     } else if (
  //       e.key === "ArrowLeft" &&
  //       selectedImage !== null &&
  //       selectedImage.photos !== null &&
  //       selectedImage.photos !== undefined
  //     ) {
  //       if (
  //         lightBoxCover !== null &&
  //         lightBoxCover !== undefined &&
  //         lightBoxCover >= 0
  //       ) {
  //         setLightBoxCover(lightBoxCover - 1);
  //       } else if (lightBoxCover === 0) {
  //         return;
  //       } else {
  //         e.preventDefault();
  //       }
  //     }
  //   });
  // }

  return (
    <>
      {selectedImage ? (
        <div
          onClick={() => {
            setSelectedImage(null);
          }}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#faf9f9db",
            display: "flex",
            flexDirection: "column",
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
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              zIndex: 300,
              top: 20,
              right: 40,
            }}
          >
            X
          </button>
          <Image
            onClick={(e) => e.stopPropagation()}
            src={
              !selectedImage.photos || lightBoxCover == null
                ? selectedImage.cover.src
                : selectedImage.photos[lightBoxCover]
            }
            alt="test"
            width={800}
            height={800}
            style={{
              maxWidth: "70vw",
              maxHeight: "80vh",
              width: "auto",
              height: "auto",
              display: "block",
              backgroundColor: "#f0f0f0",
            }}
          ></Image>
          {selectedImage.photos ? (
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <button
                disabled={lightBoxCover == null}
                onClick={(e) => {
                  e.stopPropagation();
                  if (lightBoxCover != null) {
                    setLightBoxCover(lightBoxCover - 1);
                  }
                }}
              >
                prev
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (lightBoxCover == null) {
                    setLightBoxCover(0);
                  } else {
                    setLightBoxCover(lightBoxCover + 1);
                  }
                }}
                disabled={lightBoxCover == selectedImage.photos.length}
              >
                next
              </button>
            </div>
          ) : null}
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
              setSelectedImage(picture);
              setLightBoxCover(null);
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
