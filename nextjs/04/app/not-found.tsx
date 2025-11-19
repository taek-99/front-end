import Link from "next/link";


export default function NotFound() {
    return (
        <>
        <h1>잘못된 경로다</h1>
        <Link href="/">홈으로 돌아가라</Link>
        </>
    )
}