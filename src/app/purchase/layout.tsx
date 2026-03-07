'use client'

import Header from "@/components/common/Header/Header";
import { Fragment, ReactNode } from "react";

export default function PurchaseLayout({children}: {children: ReactNode}){

  return(
    <Fragment>
      <Header/>
      <main>
        {children}
      </main>
    </Fragment>
  )
}