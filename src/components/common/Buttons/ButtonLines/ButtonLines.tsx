import { ReactNode } from "react"
import styles from "./styles.module.scss"

interface Props {
  text: string
  className?: string
  icon?: ReactNode
}

export default function ButtonLines({text, className, icon}: Props){

  // const buttonStyles = `
  //   relative flex items-center justify-center group border-transparent hover:border-brown border-2 border-solid 
  //   rounded-2xl hover:rounded-none bg-brown hover:bg-brown text-white font-medium
  // `
  const buttonStyles = `
    relative flex items-center justify-center group 
    rounded-2xl text-white font-medium
  `
  
  return(
    <button className={`${className || styles.button} ${buttonStyles}`}>
    {/* <button className={`${styles.button} group hover:bg-brown rounded-none hover:rounded-2xl text-brown hover:text-white`}> */}
      {text}
      {icon}
      {/* <span className={`${styles.line_top} absolute z-0 w-full h-[2px] bg-brown/60 group-hover:bg-transparent`}></span>
      <span className={`${styles.line_right} absolute z-0 w-[2px] h-full bg-brown/60 group-hover:bg-transparent`}></span>
      <span className={`${styles.line_bottom} absolute z-0 w-full h-[2px] bg-brown/60 group-hover:bg-transparent`}></span>
      <span className={`${styles.line_left} absolute z-0 w-[2px] h-full bg-brown/60 group-hover:bg-transparent`}></span> */}
   </button>
  )
}