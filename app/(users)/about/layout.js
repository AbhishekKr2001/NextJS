import Link from "next/link";
export default function RootLayout({ children }) {
    return (
        <div> <div><Link href="/about/teams">Teams</Link></div>
            <section>{children}</section></div>

    );
}
