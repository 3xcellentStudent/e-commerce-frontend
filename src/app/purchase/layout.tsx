import Header from "@/components/common/Header/Header";
import Snackbar from "@/components/common/Snackbar/Snackbar";
import { Fragment, ReactNode } from "react";

export default function PurchaseLayout({children}: {children: ReactNode}){

  return(
    <Fragment>
      <Header/>
      <main className="pt-[4rem] max-w-main mx-auto">
        {children}
      </main>
      <Snackbar/>
    </Fragment>
  )
}