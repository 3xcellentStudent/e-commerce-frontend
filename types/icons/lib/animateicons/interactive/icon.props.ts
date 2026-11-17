import { IconHandle } from "@animateicons/react";

export type AnimatedIconComponent = React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & { size?: number; color?: string } & React.RefAttributes<IconHandle>
>;