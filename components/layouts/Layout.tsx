import Head from "next/head";
import Footer from "./Footer";
import { LayoutProps } from "@/types";
import Navigation from "./Navigation";

const Layout = ({
  children,
  title = "Dunespark Consulting",
  description = "Install elegant, AI-powered growth systems that generate leads, close deals, and scale your business effortlessly.",
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="min-h-screen flex flex-col px-4">
        <Navigation />
        <main className="flex-grow pt-32">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
