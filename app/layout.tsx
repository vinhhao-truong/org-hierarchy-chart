import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GeneralLayout from "@/components/layout/GeneralLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organizational Hierarchy Chart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <GeneralLayout/> to separate SSR and the client for some libraries usage */}
        <GeneralLayout>{children}</GeneralLayout>
      </body>
    </html>
  );
}
