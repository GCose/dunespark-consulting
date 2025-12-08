import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=boska@200,201,300,301,400,401,500,501,700,701,900,901&display=swap"
          rel="stylesheet"
        />
       <link href="https://api.fontshare.com/v2/css?f[]=gambarino@400&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
