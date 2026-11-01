import SectionIcon from "../../../ui/icon/section-icon/SectionIcon";


export default function SectionHeader({text}: {text: string}){

  return(
    <div className="flex flex-col items-center">
      <h2 className="w-full flex items-center font-semibold text-xl">
        <div className="w-full h-[2px] relative bg-muted mr-2">
          <span className="absolute w-[1rem] h-full bg-muted-foreground top-0 right-0"></span>
        </div>
        <div className="w-min whitespace-nowrap">{text}</div>
        <div className="w-full h-[2px] relative bg-muted ml-2">
          <span className="absolute w-[1rem] h-full bg-muted-foreground top-0 left-0"></span>
        </div>
      </h2>
      <SectionIcon/>
    </div>
  )
}