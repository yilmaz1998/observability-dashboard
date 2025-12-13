import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/app/components/Sidebar"

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <SideBar />
        {children}
      </body>
    </html>
  );
}