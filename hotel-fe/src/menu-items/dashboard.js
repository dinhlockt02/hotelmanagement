import { IconDashboard } from "@tabler/icons";

const dashboard = {
  id: "dashboardGroup",
  title: "Dashboard",
  type: "group",

  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "",
      icon: IconDashboard,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
