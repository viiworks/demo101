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

  const navItems = [
    {
      header: "Website",
      items: [
        {
          icon: "diagram-3",
          title: "Pages",
          link: "/admin7c6ba567/pages",
        },
        {
          icon: "flag",
          title: "Banners",
          link: "/admin7c6ba567/banners",
        },
        {
          icon: "camera",
          title: "Gallery",
          itemChildren: [
            {
              title: "Albums",
              link: "/admin7c6ba567/albums",
            },
            {
              title: "Gallery Items",
              link: "/admin7c6ba567/gallery-items",
            },
          ],
        },

        {
          icon: "telephone-inbound",
          title: "Contacts",
          link: "/admin7c6ba567/contacts",
        },
        {
          icon: "envelope",
          title: "Newsletter",
          link: "/admin7c6ba567/newsletter",
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
              link: "/admin7c6ba567/users",
            },
            {
              title: "Roles",
              link: "/admin7c6ba567/roles",
            },
            {
              title: "Permissions",
              link: "/admin7c6ba567/permissions",
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
