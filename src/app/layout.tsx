import "./globals.css";
import { ReactNode, JSX } from "react";

interface layoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Personal Blog',
  openGraph: {
    title: 'Personal Blog First Page',
    description: 'This website is a personal blog website.',
  },
}

const layoutProps: React.FC<layoutProps> = ({ children }): JSX.Element => {
  return (
    <html>
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default layoutProps;
