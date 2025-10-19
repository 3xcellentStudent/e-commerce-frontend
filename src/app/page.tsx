'use client'

import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
import Header from '@/components/common/Header/Header'
import WelcomeSection from '@/components/pages/main/title/WelcomeSection'

import styles from "./styles.module.scss"
import CatalogSection from '@/components/pages/main/catalog/CatalogSection'
import CurvyLinesSVG from '@/components/SVG/curvyLines/CurvyLinesSVG'
import AboutUs from '@/components/pages/main/about/AboutUs'

export default function Home(){

  const redirect = useRouter()

  useEffect(() => {redirect.push('/product/3125c51e-4ec9-3341-ae55-b51df2fa8969')}, [])

  return(
    <body className='relative overflow-x-hidden'>
      <Header/>
      <main className={styles.container}>
        <WelcomeSection/>
        <CatalogSection/>
        <AboutUs/>
      </main>
      <footer></footer>

      <CurvyLinesSVG className="-z-1 absolute top-0 left-0 h-[100vh* (1vw + 1vh)] w-[100vw] min-w-[1810px]" />
    </body>
  )
}
