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


  const requestToDb: Promise<ProductFullModel> = await ProductApi.getOneByIdRecursive(id, "essential-oils");

  console.log(await requestToDb)
  
  // const dispatch = useDispatch()
  // const {id: productId} = useParams();

  // const [themeState, setThemeState] = useState<GlobalDataType>(globalData)
  // const [productState, setProductState] = useState<ProductGetRecursiveDto>(dataModelProduct)

  // function setBodyStyles({theme, title}: ProductIdType){
  //   const {text, backgrounds} = theme.colors
  //   const object = {text, backgrounds, title}

  //   setState(object);
  //   return;
  // }

  // const getGlobalData = useCallback(async () => {
  //   try{
  //     const url = GLOBAL_DATA_ROUTE;
  //     const request = await fetch(url, {})
  //     const data: GlobalDataType = await request.json()

  //     dispatch(actionCallGlobalData(data))
  //     setThemeState(data)
  //     return data;
  //   } catch(error){
  //     console.error(error);
  //     return;
  //   }
  // }, [themeState])


  // const getProductDataRecursive = useCallback(async () => {
  //   try{
  //     const url = PRODUCT_DATA_ROUTE + `?id=${productId}&collectionName=${collectionName}`;
  //     const request = await fetch(url, {
  //       method: "GET",
  //     })
  //     const data: ProductGetRecursiveDto = await request.json()

  //     dispatch(actionCallProductData(data))
  //     // setProductState(data)
  //     console.log(data)
  //     return data;
  //   } catch(error){
  //     console.error(error);
  //     return;
  //   }
  // }, [productState])
  
  // useEffect(() => {
  //   getProductDataRecursive();
  // }, [])

  // const response = useSelector(({
  //   cartObject: {response}
  // }: {cartObject: CartObjectType}) => (response))

  // useEffect(() => {
  //   if(!!response?.message) enqueueSnackbar(
  //     response?.message, {variant: response?.severity, autoHideDuration: 1500}
  //   )
  // }, [response])

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
