import data from "@/data/navmenu/data-navmenu"
import IconNavigation from "@/components/ui/icon-nav/IconNavigation";

export default function ProductPage(){

  return (
    <nav className="w-full">
      <menu className="flex flex-row px-4 py-4 justify-between align-items-center w-full">
        {data.map(({Icon, badge, route}) => {
          return(
            <li key={route}>
              <IconNavigation badge={badge} Icon={Icon} route={route}/>
            </li>
          )
        })}
      </menu>
    </nav>
  );
}