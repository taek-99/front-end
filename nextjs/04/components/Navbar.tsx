"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";


export default function Navbar() {
    const path = usePathname()

    return (
        <ul>
            <li>
                <Link href='/'>Home</Link>{path === '/' ? "★" : ''}
            </li>
            <li>
                <Link href='/about-us'>Aboutus</Link>{path === '/about-us' ? "★" : ''}
            </li>
        </ul>
    );
}