import { ReactNode } from "react";
import Navbar from "../components/Navbar";



export const metadata = {
  title: "Home | Next Movies",
  description: "좋다 좋아",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
