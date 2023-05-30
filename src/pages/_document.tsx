import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
