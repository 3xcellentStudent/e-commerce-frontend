import { HouseIcon, LayoutDashboardIcon } from "@animateicons/react/lucide";
import type { IconHandle } from "@animateicons/react";
import type React from "react";

export type AnimatedIconComponent = React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & { size?: number; color?: string } & React.RefAttributes<IconHandle>
>;

export interface IconNavigationType {
  Icon: AnimatedIconComponent;
  name: string;
  route: string;
  badge: boolean;
}

const data: IconNavigationType[] = [
  { Icon: HouseIcon, name: "home", route: "/", badge: true },
  { Icon: LayoutDashboardIcon, name: "categories", route: "/product", badge: true },
];

export default data;