import NavigationLink from "@/components/ui/icon/interactive/nav-link/NavigationLink";

import data from "@/components/features/navigation/data-navmenu";

import styles from "./styles.module.scss";

export default function NavigationMenu(){

  console.log("Render !!!")

  return(
    <header className={`${styles.header} z-100 fixed w-full bottom-0 left-1/2 -translate-x-1/2 px-6 pb-2 pt-2 border-t-2 border-saturated`}>
      <nav className="w-full">
        <menu className="flex flex-row h-full justify-between align-items-center w-full">
          {data.map((props) => (
            <li className="h-inherit" key={props.route}>
              <NavigationLink {...props} />
            </li>
          ))}
        </menu>
      </nav>
      {/* <div className="absolute bg-linear-to-t from-secondary to-secondary/0 w-full h-full top-0 left-0 z-40"></div> */}
    </header>
  )
}