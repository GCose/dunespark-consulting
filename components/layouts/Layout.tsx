import Footer from "./Footer";
import Navigation from "./Navigation";
import { LayoutProps } from "@/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-28">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
