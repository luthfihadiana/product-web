import { Geist, Geist_Mono } from "next/font/google";
import styles from "./Page.module.scss";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode,
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Page({ children }: Props) {
  return (
    <div
      className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
    >
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}