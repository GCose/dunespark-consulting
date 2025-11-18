import type { AppProps } from "next/app";
import { Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={playfair.variable}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
