import DashboardMainLayout from "@vui/layouts/dashboard/MainLayout/DashboardMainLayout";
import { hasPermissionTo } from "@vui/utils";
import { getSessionUserPermissions } from "@vui/utils/auth";

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const permissions = await getSessionUserPermissions();
  const isPermitted = hasPermissionTo(permissions, []);
  const dashboardRoute = process.env.DASHBOARD_ROUTE;

  const navItems = [
    {
      header: "Website",
      items: [
        {
          icon: "diagram-3",
          title: "Pages",
          link: `${dashboardRoute}/pages`,
        },
        {
          icon: "flag",
          title: "Banners",
          link: `${dashboardRoute}/banners`,
        },
        {
          icon: "camera",
          title: "Gallery",
          itemChildren: [
            {
              title: "Albums",
              link: `${dashboardRoute}/albums`,
            },
            {
              title: "Gallery Items",
              link: `${dashboardRoute}/gallery-items`,
            },
          ],
        },

        {
          icon: "telephone-inbound",
          title: "Contacts",
          link: `${dashboardRoute}/contacts`,
        },
        {
          icon: "envelope",
          title: "Newsletter",
          link: `${dashboardRoute}/newsletter`,
        },
      ],
    },
    {
      header: "Settings",
      items: [
        {
          icon: "key",
          title: "IAM",
          itemChildren: [
            {
              title: "Users",
              link: `${dashboardRoute}/users`,
            },
            {
              title: "Roles",
              link: `${dashboardRoute}/roles`,
            },
            {
              title: "Permissions",
              link: `${dashboardRoute}/permissions`,
              isVisible: isPermitted,
            },
          ],
        },
      ],
    },
  ];

  return <DashboardMainLayout navItems={navItems}>{children}</DashboardMainLayout>;
};

export default DashboardLayout;
