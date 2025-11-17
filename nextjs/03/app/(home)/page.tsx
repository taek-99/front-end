"use client"

import { useState } from "react";
import Navbar from "../../components/navbar";


export default function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
        <h1>gdgd</h1>
        <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </>
    );
}