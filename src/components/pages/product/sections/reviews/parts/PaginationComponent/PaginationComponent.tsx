'use client'

import { useSelector } from 'react-redux';
import ReviewsList from '../ReviewsList/ReviewsList';
// import { useEffect, useRef, useState } from 'react';
import { ReviewsType } from '@/types/global/model/reviews/reviews.type';
import getReviewsRecursive from '@/api/database/reviews/reviews.api';
import { ProductFullModel } from '@/types/api/product/product.full.model';

interface Props {
  reviewsId: ProductFullModel["reviewsId"]
}

export default function PaginationComponent({reviewsId}: Props) {

  // const [reviewsList, setReviewsList] = useState<ReviewsType[] | []>([])

  // const reviewsId = useSelector(({productData: {reviewsId}}: {productData: ProductGetRecursiveDto}) => (reviewsId))

  // const sectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToRef = () => {
    // sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   if(reviewsId.length){
  //     const selectedReviewsId = reviewsId.filter((reviewId, index) => index < 10)
  //     getReviewsRecursive(selectedReviewsId, setReviewsList)
  //   }
  // }, [reviewsId])

  function handleChange(event: React.ChangeEvent<unknown>, value: number){
    const selectedReviewsId = reviewsId.filter((reviewId, index) => index >= (value - 1) * 10 && index < (value) * 10)
    // getReviewsRecursive(selectedReviewsId, setReviewsList)
    scrollToRef()
  }

  return (
    // <Stack spacing={2}>
    //   {/* <div ref={sectionRef}></div> */}
    //   {/* <ReviewsList reviewsList={reviewsList} /> */}
    //   <Pagination count={
    //     reviewsId?.length < 10 ? 1 : 
    //     Math.round(reviewsId?.length / 10) * 10 < reviewsId?.length ? Math.round(reviewsId?.length / 10) + 1 : 
    //     Math.round(reviewsId?.length / 10)
    //   } 
    //   onChange={handleChange} />
    // </Stack>
    <div></div>
  );
}