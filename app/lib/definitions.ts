type Cameras =
  | "Lumix FZ100"
  | "Sony HX90V"
  | "Olympus OM-D E-M5"
  | "Samsung PL50";

export type PhotoMetaData = {
  src: string;
  id: string;
  title: string;
  desc?: string;
  date: string;
  category: string;
  tags?: string[];
  camera: Cameras;
  lens?: string;
};

export type GalleryItem = {
  cover: PhotoMetaData;
  photos?: string[];
};
