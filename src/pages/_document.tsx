import { Html, Head, Main, NextScript } from "next/document";
import AnimatedSidebar from "./components/layout/menu";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <AnimatedSidebar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
