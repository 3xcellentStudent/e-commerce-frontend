'use client';

import { Fragment } from 'react';
import styles from './styles.module.scss';

interface Props {
  tailwindStyles: {
    description: string, 
    title: string, 
  },
  text: {
    title: string, 
    description: string,
  },
  images: {alt: string, media: string | null, src: string}[]
}

export default function CategoryCard({images, text, tailwindStyles}: Props){

  return(
    <div 
    className={`
      ${styles.container} group relative overflow-hidden rounded-lg
    `}>
      <div>
        <picture className='absolute top-0 left-0 w-full h-full z-0 object-cover object-center'>
          {images.map(({alt, media, src}, index) => {
            return(
              <Fragment key={index}>
                {media ? (
                  <source key={src} media={media!} srcSet={src} />
                ) : (
                  <img src={src} alt={alt} />
                )}
              </Fragment>
            )
          })}
        </picture>
      </div>
      <h5 className={`${styles.title} pointer-events-none relative w-full flex text-center ${tailwindStyles.title}`}>
        <div className={styles.title_text}>
          {text.title}
          {/* <LaunchIcon sx={{width: "1rem", height: "1rem"}} className={`${styles.icon} absolute duration-400 text-white z-[1]`} /> */}
        </div>
      </h5>
      <div className={`${styles.description} pointer-events-none absolute w-full z-1 ${tailwindStyles.description}`}>{text.description}</div>
      {/* <div className='absolute top-[-4rem] right-[-4rem] duration-200 text-white group-hover:top-[.5rem] group-hover:right-[.5rem] w-[2rem] h-[2rem] z-2'>
        <ArrowOutwardIcon/>
      </div> */}
      <div className="hidden text-white" />
    </div>
  )
}