import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_ui/Header";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick & Morty",
  description: "Rick and morty based on filter characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-slate-800 text-stone-100`}>
        <div className="min-h-dvh grid grid-rows-[auto_1fr] ">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
