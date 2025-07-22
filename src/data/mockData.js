export const dashboardStats = [
  {
    id: 1,
    title: "Total Calls Today",
    value: "24",
    icon: "phone",
  },
  {
    id: 2,
    title: "Total Calls This Week",
    value: "135",
    icon: "chart",
  },
  {
    id: 3,
    title: "Avg Call Duration",
    value: "2h 42m",
    icon: "clock",
  },
  {
    id: 4,
    title: "Failed Calls",
    value: "6",
    icon: "exclamation",
  },
];

export const activeAgents = [
  {
    id: 1,
    name: "Adam Burns",
    department: "Sales",
    phoneNumber: "555-1234",
    isActive: true,
  },
  {
    id: 2,
    name: "Selina Garcia",
    department: "Support",
    phoneNumber: "555-5678",
    isActive: true,
  },
];

export const navigationItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: "home",
    href: "/",
    active: true,
  },
  {
    id: 2,
    name: "Agents & Departments",
    icon: "users",
    href: "/agents",
    active: false,
  },
  {
    id: 3,
    name: "Fallback Logic",
    icon: "refresh",
    href: "/fallback",
    active: false,
  },
  {
    id: 4,
    name: "Calendar Integration",
    icon: "calendar",
    href: "/calendar",
    active: false,
  },
  {
    id: 5,
    name: "Prompts & Persona",
    icon: "chat",
    href: "/prompts",
    active: false,
  },
  {
    id: 6,
    name: "Call Logs & Recordings",
    icon: "document",
    href: "/logs",
    active: false,
  },
  {
    id: 7,
    name: "Settings",
    icon: "cog",
    href: "/settings",
    active: false,
  },
];
