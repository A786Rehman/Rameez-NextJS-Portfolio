import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-primary">
        <Navbar openNav={function (): void {
          throw new Error("Function not implemented.");
        } }/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
