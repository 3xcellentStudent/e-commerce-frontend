'use client'

import { AnimatedIconComponent } from "@/components/features/navigation/data-navmenu";
import { IconHandle } from "@animateicons/react";
import Link from "next/link"
import { useRef } from "react"

export default function IconLink({Icon, route, text, fontSize}: {
  Icon: AnimatedIconComponent, route: string, text: string, fontSize?: string
}){

  const iconRef = useRef<IconHandle | null>(null);

  return (
    <Link 
      className={`bg-accent w-min whitespace-nowrap py-2 px-4 rounded-2xl ${fontSize}`} href={route}
      onPointerEnter={() => iconRef.current?.startAnimation()}
      // onPointerLeave={() => iconRef.current?.stopAnimation()}
      onTouchStart={() => iconRef.current?.startAnimation()}
    >
      <span>{text}</span>
      <Icon ref={iconRef} className="pl-2" />
    </Link>
  )
}