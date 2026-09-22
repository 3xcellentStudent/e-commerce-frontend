import IconNavLink from "@/components/ui/icon-nav/IconNavLink";

import data from "@/components/features/navigation/data-navmenu";

import styles from "./styles.module.scss";

export default function NavigationMenu(){

  console.log("Render !!!")

  return(
    <header className={`${styles.header} fixed w-full max-w-[20rem] bottom-4 left-1/2 -translate-x-1/2 px-6`}>
      <nav className="w-full rounded-3xl bg-surface p-1">
        <menu className="flex flex-row h-full justify-between align-items-center w-full">
          {data.map((props) => (
            <li className="h-inherit" key={props.route}>
              <IconNavLink {...props} />
            </li>
          ))}
        </menu>
      </nav>
      {/* <div className="absolute bg-linear-to-t from-secondary to-secondary/0 w-full h-full top-0 left-0 z-40"></div> */}
    </header>
  )
}