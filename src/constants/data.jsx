import {
  GroupIcon,
  HomeIcon,
  TimeIcon,
} from "../assets/svgs";

export const navs = [
  { name: "Dashboard", path: "/dashboard", icon: <HomeIcon /> },
  { name: "Transaction History", path: "/transactions", icon: <TimeIcon /> },
  { name: "Customers", path: "/customers", icon: <GroupIcon /> },
];

export const NavIcons = {
  dashboard: <HomeIcon />,
  transactions: <TimeIcon />,
  customers: <GroupIcon />,
  "initiate transaction": <HomeIcon />,
};
