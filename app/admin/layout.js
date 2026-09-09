
import Navigation from "@/components/Navigation";


export default function RootLayout({ children }) {
  return (
    <html>
      <body > <div><Navigation/></div>
        {children}
        </body>
    </html>
  );
}
