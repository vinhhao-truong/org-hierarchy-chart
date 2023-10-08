import "@/styles/globals.scss";
import type { Metadata } from "next";
import GeneralLayout from "@/components/layout/GeneralLayout";

export const metadata: Metadata = {
  title: "Organizational Hierarchy Chart",
  description:
    "This is a simple organizational hierarchy chart demo built on Next 13.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GeneralLayout>{children}</GeneralLayout>
      </body>
    </html>
  );
}
