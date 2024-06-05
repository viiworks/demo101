import type { Metadata } from "next";

import DashboardRootLayout from "@vui/layouts/dashboard/RootLayout/DashboardRootLayout";

export const metadata: Metadata = {
  title: "Dashboard",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  console.log("test");
  return <DashboardRootLayout>{children}</DashboardRootLayout>;
};

export default RootLayout;
