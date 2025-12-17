// 'use client'

import ProductApi from '@/api/database/product/product.api'
import Header from '@/components/common/Header/Header'
import { ProductFullModel } from '@/types/global/model/product/product.full.model';
import {   } from 'next/navigation';
// import { useDispatch, useSelector } from 'react-redux'

// import globalData from "@/data.models/global/globalData.model.json"
// import dataModelProduct from "@/data.models/product/data.model.product.json"
// import { Box, Typography } from '@mui/material'
// import { GLOBAL_DATA_ROUTE, PRODUCT_DATA_ROUTE } from '@/api/routes/routes'
// import { GlobalDataType } from '@/types/main/globalData.type'
// import { actionCallProductData, actionCallGlobalData } from '@/redux/database/actions'
import { SnackbarProvider } from 'notistack'
// import { CartObjectType } from '@/types/cartTypes/cartObject.types'
// import { ProductGetRecursiveDto } from '@/types/dto/mongodb/product/product.get.recursive.dto'
// import { DATA_FROM_DB } from '@/redux/constants'

interface Props {
  children: React.ReactNode
  params: {
    id: string
  }
}

export default async function RootLayout({children, params: {id}}: Props){

  return (
    <>
      {/* <head>
        <title>{productState.title}</title>
      </head> */}
      {/* <Box component="body" sx={{backgroundColor: themeState.colors.backgrounds.primaryBg.hex, color: themeState.colors.text.primaryText.hex}} sx={{backgroundColor: themeState.colors.backgrounds.primaryBg.hex, color: themeState.colors.text.primaryText.hex}}> */}
      {/* <body> */}
        {/* <SnackbarProvider maxSnack={3}> */}
          <Header/>
          {children}
        {/* </SnackbarProvider> */}
      {/* </body> */}
      {/* </Box> */}
    </>
  )
}
