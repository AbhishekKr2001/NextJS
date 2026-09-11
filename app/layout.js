import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";

export const metadata = {
    title: {
        default: "Abhishek | Learning NextJS",
        template: "%s | Abhishek",
    },
    description:
        "Learning NextJS as a Beginner. ",
    keywords: ["React", "Next.js"],
    icons: {
        icon: "/car.jpeg",
    },
    metadataBase: new URL("https://abhishek.com"),
    twitter: {
        card: "summary_large_image",
        title: "Abhishek",
        description: "Learn NextJS from scratch",
        creator: "@abhishekkr",
        images: ["/og-globe.svg"],
    },
};


const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
});

const workSans = Work_Sans({
    subsets: ["latin"],
    variable: "--font-work-sans",
});

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={`${roboto.variable} ${workSans.variable} `}>
                <div> <div><Navigation /></div></div>
                <div>  {children}</div>

            </body>
        </html>
    );
}
