import "@/styles/globals.css";
import { ReactLenis } from "lenis/react";
import type { AppProps } from "next/app";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div className={playfair.variable}>
        <Component {...pageProps} />
      </div>
    </ReactLenis>
  );
};

export default App;
