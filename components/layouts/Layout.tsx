import { ReactNode } from "react";
import Head from "next/head";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

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
      <div className="min-h-screen max-w-editorial flex flex-col px-4">
        <Navigation />
        <main className="grow pt-24 md:pt-32">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
