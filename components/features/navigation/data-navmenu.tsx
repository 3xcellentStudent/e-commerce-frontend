// import { HouseIcon, LayoutDashboardIcon, ShoppingCartIcon, ShoppingBasketIcon };
import { AnimatedIconComponent } from "@/types/icons/lib/animateicons/interactive/icon.props";
import type { IconHandle } from "@animateicons/react";
import { HouseIcon, LayoutDashboardIcon, ShoppingBasketIcon } from "@animateicons/react/lucide";
import type React from "react";

export interface IconNavigationType {
  Icon: AnimatedIconComponent;
  name: string;
  route: string;
  badge: boolean;
}

const data: IconNavigationType[] = [
  { Icon: HouseIcon, name: "home", route: "/", badge: false },
  { Icon: LayoutDashboardIcon, name: "categories", route: "/product", badge: false },
  { Icon: ShoppingBasketIcon, name: "cart", route: "/cart", badge: true },
];

export default data;