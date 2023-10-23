import Footer from "src/components/footer/page";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
// import CircleBg from "src/components/circle-bg/page";
import Image from "next/image";
import CircleBg from "src/components/circleBg/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ooink | Hide and share your links",
  description: "Ooink: Share links discreetly using unique codes. Bypass link sharing restrictions effortlessly.",
  keywords: ['Ooink', 'link sharing', 'encoded links', 'code sharing', 'link redirection', 'link', 'URLs', 'encode', 'share', 'redirect', 'encrypt', 'encrypt links', 'encrypt urls', 'share with friends', 'share online']
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8146840112267023" />
        <meta property="og:image" content="https://i.imgur.com/M8nzV2Z.png"></meta>
        <meta property="og:title" content="Ooink | Hide and share your links"></meta>
        <meta property="og:description" content="Ooink: Share links discreetly using unique codes. Bypass link sharing restrictions effortlessly."></meta>
        <meta property="twitter:image" content="https://i.imgur.com/M8nzV2Z.png"></meta>
        <meta property="twitter:title" content="Ooink | Hide and share your links"></meta>
        <meta property="twitter:description" content="Ooink: Share links discreetly using unique codes. Bypass link sharing restrictions effortlessly."></meta>
        <meta name="theme-color" content="#FF78A9"/>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Providers>
          <CircleBg />
          {children}
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
