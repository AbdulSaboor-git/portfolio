import "./globals.css";
import CursorGlow from "./components/CursorGlow";

export const metadata = {
  title: "Abdul Saboor — Full-Stack & AI Engineer",
  description:
    "Full-stack software engineer specializing in Next.js, Node.js, FastAPI, and Python NLP/LLM microservices. BSCS (Hons.) graduate based in Lahore, Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
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
