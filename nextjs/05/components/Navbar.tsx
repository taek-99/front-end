"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Navigation.module.css"


export default function Navbar() {
    const path = usePathname()

    return (
        <nav className={styles.nav}>
        <ul>
            <li>
                <Link href='/'>Home</Link>{path === '/' ? '★' : ''}
            </li>
            <li>
                <Link href='/about-us'>About-us</Link>{path === '/about-us' ? '★' : ''}
            </li>
        </ul>
        </nav>
    );
}