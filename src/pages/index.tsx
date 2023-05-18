import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "./main";
// const inter = Inter({ subsets: ["latin"] });
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>KMC Genetics</title>
        <meta
          name="description"
          content="Manipal Genetics Update VII
Cellular and Animal Models
for Rare Genetic Diseases
18-20 January 2024"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <main className={`${inter.className}`}> */}
      <main>
        <Main />
      </main>
    </>
  );
}
