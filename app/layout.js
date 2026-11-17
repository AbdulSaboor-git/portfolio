import "./globals.css";
import CursorGlow from "./components/CursorGlow";

export const metadata = {
  title: "Abdul Saboor — Full-Stack Developer",
  description:
    "Full-stack developer specialising in React, Next.js, Node.js and Python AI integrations. BSCS (Hons.) Graduate based in Lahore, Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
