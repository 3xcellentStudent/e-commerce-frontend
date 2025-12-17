'use client'

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss"
import { ProductVariationModel } from "@/types/global/model/product/variation/product.variation.model";

interface Props {
  image: ProductVariationModel["image"];
}

export default function BigCarousel({image}: Props){

  const [position, setPosition] = useState<number>(0)

  const wrapperRef = useRef<HTMLDivElement | null>(null)

  function pointerPrev(){
    const carouselWidth = wrapperRef.current ? wrapperRef.current?.clientWidth : 0;
    if(position < 0){
      setPosition(prev => prev + carouselWidth)
      // setCarouselIndex(prev => prev - 1)
    }
  }

  function pointerNext(){
    const carouselWidth = wrapperRef.current ? wrapperRef.current?.clientWidth : 0;
    if(position > -carouselWidth * (image?.length - 1)){
      // setCarouselIndex(prev => prev + 1)
      setPosition(prev => prev - carouselWidth)
    }
  }

  function changePositionWithIndex(index: number){
    const carouselWidth = wrapperRef.current ? wrapperRef.current?.clientWidth : 0;
    setPosition(index * -carouselWidth);
  }
  
  // useEffect(() => changePositionWithIndex(carouselIndex), [carouselIndex])

  // useEffect(() => {
  //   window.onresize = () => {wrapperRef.current && setCarouselWidth(wrapperRef.current?.clientWidth)}
  // }, [])

  return(
    <div ref={wrapperRef} className={`w-[50%] relative flex items-center justify-center ${styles.big_slider_wrapper}`}>
      {
        wrapperRef.current !== null ?
        <div className="absolue h-full w-full overflow-hidden">
          <div className={`relative h-full flex overflow-y-hidden w-[${wrapperRef.current?.clientWidth}px]`} >
          {/* sx={wrapperRef.current &&  {width: productData?.mediaContent?.images?.length * wrapperRef.current?.clientWidth}} > */}
            {images?.map((element, idx) => {
              return(
                <div className={`relative w-full h-full ${styles.big_slider_slide} left-[${position}px]`} key={idx}>
                  {/* <picture className="w-full h-full block relative">
                    {element.map((source, idx) => {
                      if(!source.media) return <img className="object-scale-down absolute w-full h-full" key={idx} src={source.src} alt="" />
                      else return <source className="object-scale-down absolute" width="100%" height="100%" 
                      key={idx} srcSet={source.src} media={source.media} />
                    })}
                  </picture> */}
                  <img className="object-scale-down absolute w-full h-full" key={idx} src={element} alt="" />
                </div>
              ) 
            })}
          </div>
        </div> : 
        <div></div>
      }
      {/* <div className="absolue h-full w-full overflow-hidden">
        <div className="relative h-full flex overflow-y-hidden" 
        sx={wrapperRef.current && {width: productData?.mediaContent?.images?.length * wrapperRef.current?.clientWidth}} >
          {images?.map((element, idx) => {
            return(
              <div sx={{left: position}} className={`relative w-full h-full ${styles.big_slider_slide}`} key={idx}>
                <img className="object-scale-down absolute w-full h-full" key={idx} src={element} alt="" />
              </div>
            ) 
          })}
        </div>
      </div> */}

      {/* <CustomButton sx={{backgroundColor: elementsSecondaryBg.hex}} className={`left-[40px] ${styles.big_slider_slide_button}`} 
      onPointerDown={pointerPrev}>
        <ArrowBackIosNewIcon/>
      </CustomButton>
      <CustomButton sx={{backgroundColor: elementsSecondaryBg.hex}} className={`right-[40px] ${styles.big_slider_slide_button}`} 
      onPointerDown={pointerNext} >
        <ArrowForwardIosIcon/>
      </CustomButton> */}
    </div>
  )
}