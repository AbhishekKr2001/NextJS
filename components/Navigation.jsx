import Link from "next/link";
import "../app/globals.css";
export default function Navigation() {
    return (
        <>
            <div className="flex flex-row gap-4">
                <div> <Link href="/">Home</Link></div>
                <div> <Link href="/about">About</Link></div>
                <div><Link href="/about/teams">Teams</Link></div>
                <div><Link href="/contact">Contact</Link></div>
            </div></>
    )
}
