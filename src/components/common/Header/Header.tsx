'use client'

import {Box, styled, Typography} from '@mui/material';
import styles from "./styles.module.scss"
import { useSelector } from 'react-redux';
import { usePathname, useParams } from 'next/navigation';
import BadgeButton from '../BadgeButton/BadgeButton';
import { useCallback, useEffect, useRef, useState } from 'react';
import { GlobalDataType } from '@/types/main/globalData.type';
import BasicSpeedDial from '../BasicSpeedDial/BasicSpeedDial';
import Link from 'next/link';
import navigationData from "@/data.models/navigation.json"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';

const CustomHeader = styled("header")({});

export default function Header(){

  const pathname = usePathname()

  // const {elementsPrimaryBg, elementsOptionalBg, elementsSecondaryBg, secondaryBg, primaryText, optionalText, secondaryText} = useSelector(
  //   ({globalData: {colors: {backgrounds, text}}}: {globalData: GlobalDataType}) => ({...backgrounds, ...text})
  // )

  const [headerState, setHeaderState] = useState<boolean>(false)

  // const scrollEffects = useCallback(() => {
  //   if(window.scrollY > 100){
  //     setHeaderState(false)
  //     document.querySelector(styles.container)?.classList.add("container_hidden")
  //   } else if(window.scrollY < 100){
  //     setHeaderState(true)
  //     document.querySelector(styles.container)?.classList.remove("container_hidden")
  //   }
  // }, [headerState])

  useEffect(() => {
    // scrollEffects()

    const selector = document.querySelector(`.${styles.header}`);

    const scrollHandler = () => {
      if(window.scrollY > 100){
        setHeaderState(false)
        selector?.classList.add(styles.header_hidden)
      } else if(window.scrollY < 100){
        setHeaderState(true)
        selector?.classList.remove(styles.header_hidden)
      }
    };

    window.onscroll = scrollHandler;
  }, [])

  return (
    // <CustomHeader className={`${styles.header}`} sx={{
    //   backgroundColor: elementsPrimaryBg.rgb, ...(headerState ? {
    //     opacity: 1, backdropFilter: "brightness(100%) blur(2px)", color: primaryText.hex,
    //   } : {
    //     opacity: 0, backdropFilter: "brightness(90%) blur(2px)", color: secondaryText.hex,
    //   }),
    //   "&:hover": {opacity: 1, color: secondaryText.hex},
    // }}>
      <CustomHeader className={`${styles.header}`}>
    {/* <CustomHeader className={`${styles.header}`} sx={{
      backgroundColor: elementsPrimaryBg.rgb, opacity: headerState ? 1 : 0, backdropFilter: "brightness(90%) blur(2px)", 
      color: headerState ? primaryText.hex : secondaryText.hex,
      "&:hover": {opacity: 1, color: secondaryText.hex},
    }}> */}
      <div className={`${styles.container}`}>
        <Box className='w-6/12 flex items-center justify-between pl-6' >
          <Typography className='w-min' variant="h4" noWrap component="h1"
            sx={{display: { xs: 'none', sm: 'block' }, }}>My Store</Typography>

          <nav className='flex flex-row items-center ml-4'>
            {navigationData.map((item, index) => {
              return(
                <Link key={index} href={item.href} 
                className={`whitespace-nowrap px-2 before:bg-brown-dark/50 text-brown-dark hover:text-brown-dark/70 ${styles.navigation_link}`}>
                  {item.text}
                </Link>
              )
            })}
          </nav>
        </Box>

        {/* <BasicSpeedDial direction="right" speedDialProps={{className: `absolute`}} /> */}

        <Box className="w-min flex items-center pl-8 pr-6" 
        sx={{borderColor: headerState ? "transparent" : "#ccc"}}>
        {/* sx={{borderColor: headerState ? "transparent" : secondaryBg.hex,}}> */}
          {!pathname.includes("purchase") && 
          <>
            <BadgeButton className='text-brown-dark bg-light-warm rounded-full p-2 hover:bg-brown-dark hover:text-white mr-4'>
              <PersonIcon sx={{width: "28px", height: "28px"}}/>
            </BadgeButton>
            <BadgeButton className='text-brown-dark bg-light-warm rounded-full p-2 hover:bg-brown-dark hover:text-white'>
              <LocalMallIcon className='' sx={{width: "28px", height: "28px"}} />
            </BadgeButton>
          </>}
        </Box>
      </div>
      {/* <Box className={`${styles.bottom_line}`}></Box> */}
    </CustomHeader>
  );
}