import { Montserrat, PT_Serif } from "next/font/google";
import { Metadata } from "next";
import { ReactNode, JSX } from "react";
import './globals.css';

type LayoutProps = {
  children: ReactNode;
};

export const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Personal Blog",
  openGraph: {
    title: "Personal Blog First Page",
    description: "This website is a personal blog website.",
  },
};

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <html>
      <head></head>
      <body>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
};

export default Layout;
