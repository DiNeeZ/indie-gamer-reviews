import Link from "next/link";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./global.css";
import NavBar from "../components/NavBar";

export const metadata: Metadata = {
  title: "Next Reviews",
  description: "Interesting Next JS Tutorial",
};

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} flex min-h-screen flex-col bg-orange-50 px-4 py-2 antialiased`}
      >
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t pb-3 pt-5 text-center text-xs">
          The game data and images courtesy of{" "}
          <a
            href="https://rawg.io/"
            target="_blank"
            className="font-medium text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
