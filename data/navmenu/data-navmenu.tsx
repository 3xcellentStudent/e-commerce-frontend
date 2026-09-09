import {HouseIcon, LayoutDashboardIcon} from "@animateicons/react/lucide";

export interface IconNavigationType  {
  Icon: React.ReactElement;
  route: string;
  badge: number;
}

const data: IconNavigationType[] = [
  {Icon: <HouseIcon/>, route: "/", badge: 0},
  {Icon: <LayoutDashboardIcon/>, route: "/product", badge: 0},
];

export default data;