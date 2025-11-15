"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

export default function Navbar() {
    const path = usePathname();
    return (
        <>
            <ul>
                <li>
                    <Link href="/">Home</Link>{path === "/" ? "ㅁㅁ" : ""}
                </li>
                <li>
                    <Link href="/about-us">About-us</Link>{path === "/about-us" ? "ㅁㅁ" : ""}
                </li>
            </ul>
        </>
    );
}