import Header from "@/components/common/Header/Header";
import { Fragment, ReactNode } from "react";


export default function ShopLayout({children}: {children: ReactNode}){

  return(
    <Fragment>
      <Header/>
      {children}
    </Fragment>
  )
}