import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Notifications from "@/components/Notifications";
import Navbar from "@/components/Navbar";
import Footers from "@/components/Footers";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "khouloud Restaurant",
  description: "delicious food ever!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <Notifications />
            <Navbar />
            {children}
            <Footers />
            <ToastContainer theme="dark" autoClose={3000} />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
