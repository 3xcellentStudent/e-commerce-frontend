'use client'

import { Dispatch, PointerEvent, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss"
import { GlobalDataType } from "@/types/main/globalData.type";
import { ProductFullModel } from "@/types/global/model/product/product.full.model";
import { ProductVariationModel } from "@/types/global/model/product/variation/product.variation.model";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {change} from "@/lib/redux/product/carousel/reducers"
import useMediaQuery from "@/lib/hooks/useMediaQuery";

interface Props {
  images: ProductVariationModel["image"];
}

// const ImageContainer = styled.div<{position: number}>`
//   top: ${props => `calc(${props.position} * 100px)`};
//   transition: 200ms ease-in;
// `
const ImageContainer = styled.div<{position: number, index: number}>`
  transform: translateY(${props => `calc(${props.index} * -100px + ${props.position}px)`});
  transition: 75ms;
`

export default function SmallCarousel({images}: Props){

  const [position, setPosition] = useState<number>(0)
  // const [slideSize, setSlideSize] = useState<number>(0)

  const productCarousel = useAppSelector(state => state.productCarousel);
  const mediaQuery = useMediaQuery('(max-width: 1024px)');
  const itemSize = 100;

  const dispatch = useAppDispatch();

  // const wrapperRef = useRef<HTMLDivElement | null>(null)
  // const activeElementIndex = useRef<number>(0)

  const conditions = useRef({
    isButtonPressed: false,
    isButtonUnpressed: true,
    downY: 0,
    lastPosition: 0,
    mainLock: false
  }).current;

  const pointerMove = useCallback((e: PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    const {downY, lastPosition, isButtonPressed, isButtonUnpressed, mainLock} = conditions
    if(isButtonPressed && !isButtonUnpressed && !mainLock){
      const {clientY} = e
      setPosition(-(downY - clientY))
    } else if(isButtonPressed && !isButtonUnpressed && mainLock){
      const {clientY} = e
      setPosition(lastPosition - (downY - clientY))
    }
  }, [])

  function pointerDown(e: PointerEvent<HTMLDivElement>){
    e.preventDefault();
    conditions.isButtonPressed = true
    conditions.isButtonUnpressed = false
    const {clientY} = e
    conditions.downY = clientY;
    conditions.lastPosition = position;
    window.addEventListener("pointermove", pointerMove);
  }

  // const calcFocus = useCallback(() => {
  //   const containerHeight = document.getElementById("small_slider_wrapper")?.clientHeight || 0;
  //   const containerWidth = document.getElementById("small_slider_wrapper")?.clientWidth || 0;
  //   const totalHeight = images.length * containerWidth
  //   const multiplier = Math.round(position / containerWidth)
  //   if(position > 0){
  //     console.log("11111111111")
  //     setPosition(0)
  //     // dispatch(start())
  //   } else if(position < -(totalHeight - containerHeight)){
  //     setPosition(-(totalHeight - containerHeight))
  //     console.log("22222222222")
  //   } else {
  //     // setPosition(multiplier * containerWidth)
  //     setPosition(images.length)
  //     console.log("33333333333")
  //   }
  // }, [position])

  // console.log(position)

  function calcFocus(state: number){
    const totalSize = images.length * itemSize
    const multiplier = Math.round(state / itemSize)
    if(state > 0){
      return 0;
    } else if(state < -(totalSize - itemSize)){
      return -(totalSize - itemSize);
    } else {
      return multiplier * itemSize;
    }
  }

  const pointerUp = useCallback((event: PointerEvent) => {
    event.preventDefault();
    const {downY} = conditions
    if(!conditions.isButtonPressed) return;
    else if(downY - event.pageY === 0){
      const target = event.target as HTMLButtonElement;
      const index = target.attributes[1].value;
      // activeElementIndex.current = +index
      dispatch(change((+index) - (images.length - 1)))
    } else {
      setPosition(prev => calcFocus(prev))
    }
    conditions.isButtonPressed = false;
    conditions.isButtonUnpressed = true;
    conditions.downY = position;
    conditions.mainLock = true
    window.removeEventListener("pointermove", pointerMove)
  }, [position]);

  useEffect(() => {
    window.addEventListener("pointerup", pointerUp);
    return () => {
      window.removeEventListener("pointerup", pointerUp);
    };
  }, []);

  useEffect(() => setPosition(itemSize * productCarousel), [productCarousel])

  return(
    // <div ref={wrapperRef} id="small_slider_wrapper" onPointerDown={carouselPointerDown} 
    // className={`relative flex-col flex items-center justify-center overflow-hidden ${styles.small_slider_wrapper}`}>
    //   <div className="absolute w-full top-0" onPointerDown={carouselPointerDown}>
    //   <Typography component="div" style={{transform: `translateY(${position}px)`}} 
    //   className={`relative w-full flex flex-col ${styles.small_slider_container}`} 
    //   // sx={wrapperRef.current &&  {transition: conditions.current.isButtonPressed ? "0ms" : "500ms",}} >
    //   sx={{transition: conditions.current.isButtonPressed ? "0ms" : "500ms", }} >
    //     {images?.map((element, index) => {
    //       return(
    //         <CustomButton id={`carousel-button-id_${index}`} key={index} className={`absolute top-0 w-full h-full ${styles.small_carousel_button}`} 
    //         sx={{border: carouselIndex === index ? `2px solid ${elementsSecondaryBg.hex}` : ""}}>
    //           <picture className="w-full h-full block pointer-events-none">
    //             {element.map((source, idx) => {
    //               if(!source.media) return <img key={idx} src={source.src} alt="" />
    //               else return <source width="100%" height="100%" key={idx} srcSet={source.src} media={source.media} />
    //             })}
    //           </picture>
    //         </CustomButton>
    //       ) 
    //     })}
    //   </Typography>
    //   </div>
    // </div>

    <div onPointerMove={pointerMove} onPointerDown={pointerDown} onPointerUp={pointerUp} className={`relative flex items-center flex-col justify-center overflow-hidden ${styles.wrapper}`}>
      {images?.map(({media, src, srcset}, index) => {
          return(
            <ImageContainer key={src + index} position={position} index={index} className={`absolute w-full ${styles.image_container}`} >
              <picture className={`pointer-events-none`}>
                {media !== "" ? <source className="absolute w-full h-full object-scale-down left-0 top-0" media={media} srcSet={srcset} /> : 
                <img className="absolute w-full h-full object-scale-down left-0 top-0" src={src} alt="Product variation image" />
                }
              </picture>
            </ImageContainer>
          ) 
        })}
    </div>
  )
}