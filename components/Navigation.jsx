import Link from "next/link";
import "../app/globals.css";
export default function Navigation() {
    return (
        <>
            <div className="flex flex-row gap-4">
                <div> <Link href="/">Home</Link></div>
                <div> <Link href="/about">About</Link></div>
                <div> <Link href="/clientcomp">ClientComp</Link></div>
                <div> <Link href="/servercomp">ServerComp</Link></div>
                <div><Link href="/contact">Contact</Link></div>
                <div><Link href="/image">Image</Link></div>
                <div><Link href="/products">Products</Link></div>
                <div><Link href="/blog">CatachAll Segment</Link></div>
                <div><Link href="/datafetch/servercomp">Datafetch</Link></div>
                <div><Link href="/projects/jokes">jokes</Link></div>
                <div><Link href="/static">Doctors</Link></div>
                <div><Link href="/rendering/dynamic">Dynamic Route</Link></div>
                <div><Link href="/rendering/static">Static Route</Link></div>
            </div></>
    )
}
