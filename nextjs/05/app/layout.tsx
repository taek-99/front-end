import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import "../styles/global.css"


export default function RootLayout({children} : {children: ReactNode}){
    return (
        <html lang='ko'>
            <body>
                <Navbar/>
                {children}
            </body>
        </html>
    );
}