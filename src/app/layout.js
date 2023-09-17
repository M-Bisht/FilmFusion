import "./global/style.css";

export const metadata = {
  title: "Film Fusion",
  description: "Film fusion is a online free movie website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
