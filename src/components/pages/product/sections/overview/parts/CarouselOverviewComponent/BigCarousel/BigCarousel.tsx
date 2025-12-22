'use client'

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss"
import { ProductVariationModel } from "@/types/global/model/product/variation/product.variation.model";
import styled from "styled-components";

interface Props {
  images: ProductVariationModel["image"];
}

const ImageContainer = styled.div<{position: number}>`
  left: ${props => `calc(${props.position} * 100%)`};
  transition: 200ms ease-in;
`

export default function BigCarousel({images}: Props){

  // const [position, setPosition] = useState<number>(0)

  // const wrapperRef = useRef<HTMLDivElement | null>(null)

  // function pointerPrev(){
  //   const carouselWidth = wrapperRef.current ? wrapperRef.current?.clientWidth : 0;
  //   if(position < 0){
  //     setPosition(prev => prev + carouselWidth)
  //     // setCarouselIndex(prev => prev - 1)
  //   }
  // }

  // function pointerNext(){
  //   const carouselWidth = wrapperRef.current ? wrapperRef.current?.clientWidth : 0;
  //   if(position > -carouselWidth * (images?.length - 1)){
  //     // setCarouselIndex(prev => prev + 1)
  //     setPosition(prev => prev - carouselWidth)
  //   }
  // }

  // function changePositionWithIndex(index: number){
  //   const carouselWidth = wrapperRef.current ? wrapperRef.current?.clientWidth : 0;
  //   setPosition(index * -carouselWidth);
  // }
  
  // useEffect(() => changePositionWithIndex(carouselIndex), [carouselIndex])

  // useEffect(() => {
  //   window.onresize = () => {wrapperRef.current && setCarouselWidth(wrapperRef.current?.clientWidth)}
  // }, [])



  const [position, setPosition] = useState<number>(0)

  function pointerPrev(){
    if(position < 0){
      setPosition(prev => prev + 1)
    }
  }

  function pointerNext(){
    if(position > -images.length + 1){
      setPosition(prev => prev - 1)
    }
  }

  return(
    <div className={`w-[50%] relative flex items-center flex-row justify-center overflow-hidden ${styles.wrapper}`}>
      {images?.map(({media, src, srcset}, index) => {
        return(
          <ImageContainer key={src + index} position={index + position} className={`absolute h-full w-full`} >
            <picture className={`${styles.images_container}`}>
              {media !== "" ? <source className="absolute w-full h-full object-scale-down left-0 top-0" media={media} srcSet={srcset} /> : 
              <img className="absolute w-full h-full object-scale-down left-0 top-0" src={src} alt="Product variation image" />
              }
            </picture>
          </ImageContainer>
        ) 
      })}

      <button className={`left-[40px] ${styles.big_slider_slide_button}`} 
      onPointerDown={pointerPrev}>
        left
      </button>
      <button className={`right-[40px] ${styles.big_slider_slide_button}`} 
      onPointerDown={pointerNext}>
        right
      </button>
    </div>





    // <div ref={wrapperRef} className={`w-[50%] relative flex items-center justify-center ${styles.big_slider_wrapper}`}>
    //   {
    //     wrapperRef.current !== null ?
    //     <div className="absolue h-full w-full overflow-hidden">
    //       <div className={`relative h-full flex overflow-y-hidden w-[${wrapperRef.current?.clientWidth}px]`} >
    //         {images?.map(({media, src, srcset}, index) => {
    //           return(
    //             <picture className={`${styles.images_container}`}>
    //               {media !== "" ? <source className="absolute w-full h-full object-scale-down left-0 top-0" key={src + index} media={media} srcSet={srcset} /> : 
    //               <img className="absolute w-full h-full object-scale-down left-0 top-0" key={src + index} src={src} alt="Product variation image" />
    //               }
    //             </picture>
    //           ) 
    //         })}
    //       </div>
    //     </div> : 
    //     <div></div>
    //   }

    //   <button className={`left-[40px] ${styles.big_slider_slide_button}`} 
    //   onPointerDown={pointerPrev}>
    //     left
    //   </button>
    //   <button className={`right-[40px] ${styles.big_slider_slide_button}`} 
    //   onPointerDown={pointerNext}>
    //     right
    //   </button>
    // </div>
  )
}