import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBar from "@/components/SideBar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongByUserId from "@/actions/getSongByUserId";
import Player from "@/components/Player";
import getActiveProductsWithPrices from "@/actions/getActiveProductsWithPrices";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chill",
  description: "Listen to music",
};
export const revalidate = 0;
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userSongs = await getSongByUserId()
  const products = await getActiveProductsWithPrices();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products}/>
            <SideBar songs={userSongs}>{children}</SideBar>
            <Player/>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
