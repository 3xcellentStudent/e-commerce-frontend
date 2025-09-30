// 'use client'

// import {useEffect} from 'react'
// import {useRouter} from 'next/navigation'
import Header from '@/components/common/Header/Header'
import WelcomeSection from '@/components/pages/main/title/WelcomeSection'

import styles from "./styles.module.scss"
import CatalogSection from '@/components/pages/main/catalog/CatalogSection'
import CurvyLinesSVG from '@/components/SVG/curvyLines/CurvyLinesSVG'

export default function Home(){

  // const redirect = useRouter()

  // useEffect(() => {redirect.push('/product/d41d8cd9-8f00-3204-a980-0998ecf8427e')}, [])

  return(
    <body className='relative overflow-x-hidden'>
      <Header/>
      <main className={styles.container}>
        <WelcomeSection/>
        <CatalogSection/>
      </main>
      <footer></footer>

      <CurvyLinesSVG className="-z-1 absolute top-0 left-0 h-[100vh* (1vw + 1vh)] w-[100vw] min-w-[1810px]" />
    </body>
  )
}
