'use client'

import { AnimatedIconComponent } from "@/types/icons/lib/animateicons/interactive/icon.props";
import { IconHandle } from "@animateicons/react";
import Link from "next/link"
import { useRef } from "react"

export default function IconLinkButton({Icon, route, text, fontSize}: {
  Icon: AnimatedIconComponent, route: string, text: string, fontSize?: string
}){

  const iconRef = useRef<IconHandle | null>(null);

  return (
    <Link 
      className={`
        bg-accent/90 duration-200 hover:bg-accent/100 w-min whitespace-nowrap py-2 px-4 rounded-lg ${fontSize} 
      `} 
      href={route}
      onPointerEnter={() => iconRef.current?.startAnimation()}
      // onPointerLeave={() => iconRef.current?.stopAnimation()}
      onTouchStart={() => iconRef.current?.startAnimation()}
    >
      <span>{text}</span>
      <Icon ref={iconRef} className="pl-2 pointer-events-none" />
    </Link>
  )
}