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
      ${styles.container} group relative overflow-hidden rounded-lg shadow-2 shadow-cyan-500/50 hover:text-white
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
      <h5 className={`${styles.title} pointer-events-none relative w-full flex text-center`}>
        <div>{text.title}</div>
      </h5>
      <div className={`${styles.description} pointer-events-none absolute w-full z-1 ${tailwindStyles.description}`}>{text.description}</div>
      <div className="hidden 
      bg-[linear-gradient(102deg,_rgba(255,0,0,0.85)_0%,_rgba(3,5,29,0.85)_0%)] group-hover:bg-[linear-gradient(102deg,_rgba(255,0,0,0.85)_3%,_rgba(3,5,29,0.85)_100%)]
      text-brown-dark text-white group-hover:text-white" />
    </div>
  )
}