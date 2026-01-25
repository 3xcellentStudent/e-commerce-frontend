import Link from "next/link";
import styles from "./styles.module.scss"
import ArrowRightUpSVG from "@/components/SVG/ArrowRightUpSVG";
import WelcomeSchema from "@/data.models/pages/main/sections/welcome/schema";

interface Props {
  data: WelcomeSchema["textBlock"]
}

export default function TextBlock({data}: Props){

  const href = "";

  return(
    <div className={`${styles.container}`}>
      <h3 className="text-xl font-bold text-content-neutral ml-1.5">{data.suptitle}</h3>
      <h2 className="text-7xl my-4 font-bold uppercase text-content-accent">{data.title}</h2>
      <h4 className="text-content-base ml-1.5">{data.lead}</h4>
      <button className={`${styles.navigation_button} bg-base text-content-bright w-min whitespace-nowrap`}>
        <Link className="px-1 flex flex-row items-center" href={href}>
          <span className="text-xl">See More</span>
          <ArrowRightUpSVG className="ml-2" weight={1.5} size={28} color="stroke-content-bright" />
        </Link>
      </button>
    </div>
  )
}