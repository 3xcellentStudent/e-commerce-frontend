
interface Props {
  tailwindStyles: string;
}

export default function PlusIcon({tailwindStyles}: Props){

  return(
    <svg viewBox="0 0 24 24" className={tailwindStyles} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M9 12H15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12 9L12 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </g>
    </svg>
  )
}