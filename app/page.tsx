import Image from "next/image";
import { ChevronsRightIcon } from "@animateicons/react/lucide";
import { IconHandle } from "@animateicons/react";
import Link from "next/link";
import IconNavLink from "@/components/ui/icon/icon-nav-link/NavigationLink";
import IconLink from "@/components/ui/icon/icon-link/IconLink";
import SectionHeader from "@/components/features/section/section-title/SectionHeader";

export default function Home(){

  return (
    <>
      <main className="min-h-[100svh]">
        <section id="title" className="py-2">
          <h1 className="text-2xl text-center leading-none">Lelora</h1>
        </section>

        <section id="intro" className="h-[calc(100svh-2.5rem)] min-w-6/12 w-min flex flex-col justify-center gap-y-4">
          <h2 className="text-2xl">Very Short Title</h2>
          <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ad debitis ratione nesciunt nostrum deserunt dolor tempora voluptatibus qui ut.</p>
          <IconLink Icon={ChevronsRightIcon} route="#" text="Explore" fontSize="text-base" />
        </section>

        <section id="categories" className="py-[4rem]">
          <SectionHeader text="Section Header" />
        </section>
      </main>
      <footer>
        
      </footer>
    </>
  );
}
