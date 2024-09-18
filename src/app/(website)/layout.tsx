import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import "@/styles/main.scss";
import Header from "@/layouts/website/header/Header";

 
export const metadata: Metadata = {
  title: "Website",
  description: "Powered by Sevenworks Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          pauseOnFocusLoss={false}
          draggable
          newestOnTop
          closeOnClick
        />
      </body>
    </html>
  );
}
