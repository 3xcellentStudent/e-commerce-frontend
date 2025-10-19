import styles from '../styles.module.scss';
import Link from 'next/link';
import ButtonLines from '@/components/common/Buttons/ButtonLines/ButtonLines';
import LaunchIcon from '@mui/icons-material/Launch';

interface Props {
  backgroundImage: string;
  textArray: string[];
}

export default function RightBlock({ backgroundImage, textArray }: Props){
  return(
      <div className={styles.wrapper}>
        <div className={`${styles.image_block} h-[40%]`}>
          <div className={styles.image_container}>
            <picture>
              <img className={styles.main_picture} src={backgroundImage} alt="Main Page Title Image" />
            </picture>
          </div>
        </div>

        <div className={styles.description_container}>
          <h2 className={`${styles.text_small} text-brown-dark/80`}>
            {textArray.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </h2>
        </div>

        <div className={`${styles.buttons_container} flex flex-row mt-6 w-[70%] justify-start relative`}>
          {/* <button className={`${styles.button} bg-gold hover:bg-brown text-white flex flex-row items-center gap-2`}>
            <span>See Our Catalog</span>
            <div><CallMadeIcon className='mb-1 w-[1.25rem] h-[1.25rem]'/></div>
          </button> */}
          <Link href="#" >
            <ButtonLines className={styles.button} text='See Our Catalog' 
            icon={<LaunchIcon sx={{width: "1.15rem", height: "1.15rem"}} className={`${styles.icon} absolute duration-400 text-white z-[1]`} />}
            />
          </Link>
        </div>
      </div>
  )
}
