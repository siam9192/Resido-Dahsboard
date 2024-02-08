import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <div className="flex">
      <div className="w-[30%]"></div>
      <div className="w-full">
        <Navbar></Navbar>
       <div className="p-5">
       {children}
       </div>
      </div>
    </div>
  
        
        </body>
    </html>
  );
}