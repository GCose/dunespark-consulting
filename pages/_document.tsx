import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        {/* Fonts */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=boska@200,201,300,301,400,401,500,501,700,701,900,901&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=gambarino@400&display=swap"
          rel="stylesheet"
        />

        {/*==================== Preloading ALL Videos ====================*/}
        <link
          rel="preload"
          href="/videos/home-page/hero-section.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/videos/home-page/hero-section2.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/videos/home-page/hero-section3.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/videos/home-page/apart-section.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/videos/home-page/process-section.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/videos/home-page/benefits-section.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/videos/home-page/growth-section.mp4"
          as="video"
          type="video/mp4"
        />
        {/*==================== End of Preloading ALL Videos ====================*/}

        {/*==================== Preloading All Images ====================*/}
        <link rel="preload" href="/images/home-page/hero-1.jpg" as="image" />
        <link rel="preload" href="/images/home-page/hero-2.jpg" as="image" />

        <link
          rel="preload"
          href="/images/home-page/promise-section.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="/images/home-page/promise-card-1.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/home-page/promise-card-2.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/home-page/promise-card-3.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/home-page/promise-card-4.webp"
          as="image"
        />

        <link rel="preload" href="/images/home-page/apart-1.webp" as="image" />
        <link rel="preload" href="/images/home-page/apart-2.webp" as="image" />
        <link rel="preload" href="/images/home-page/apart-3.webp" as="image" />
        <link rel="preload" href="/images/home-page/apart-4.webp" as="image" />
        <link rel="preload" href="/images/home-page/apart-5.webp" as="image" />

        <link rel="preload" href="/images/home-page/challenge.jpg" as="image" />
        {/*==================== End of Preloading All Images ====================*/}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
