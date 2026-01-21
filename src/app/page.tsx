'use client'

import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
import Header from '@/components/common/Header/Header'
import WelcomeSection from '@/components/pages/main/welcome/WelcomeSection'

import styles from "./styles.module.scss"
import CatalogSection from '@/components/pages/main/catalog/CatalogSection'
import CurvyLinesSVG from '@/components/SVG/curvyLines/CurvyLinesSVG'
import AboutUs from '@/components/pages/main/about/AboutUs'
import StoreProvider from '../components/common/redux/StoreProvider/StoreProvider'
import DrawerComponent from '@/components/common/DrawerComponent/DrawerComponent'
import CartList from '@/components/common/CartList/CartList'
import Snackbar from '@/components/common/Snackbar/Snackbar'

export default function Home(){

  // const redirect = useRouter()

  // useEffect(() => {redirect.push('/product/3125c51e-4ec9-3341-ae55-b51df2fa8969')}, [])

  return(
    <>
      <Header/>
      <main className={`z-[1] relative`}>
        <WelcomeSection/>
        <CatalogSection/>
        <AboutUs/>
      </main>
      <footer></footer>

      <CurvyLinesSVG className="absolute top-0 left-0 h-[100vh* (1vw + 1vh)] w-[100vw] min-w-[1810px]" />
    </>
  )
}
