import "../../../globals.css";

export default function PhotosWithIdLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="yuyu-regular tiny-dots">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
