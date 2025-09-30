import CurvyLineLeftTopToRightDown from "@/components/SVG/curvyLines/CurvyLineLeftTopToRightDown";
import styles from "../styles.module.scss";

interface Props {
  backgroundImage: string;
  textArray: string[];
}

export default function LeftBlock({ backgroundImage, textArray }: Props){
  return(
      <div className={styles.wrapper}>
        <div className={styles.description_container}>
          <h2 className={`${styles.text_large}`}>
            {textArray.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </h2>
        </div>

        <div className={`${styles.image_block} h-[55%]`}>
          <div className={styles.image_container}>
            <picture>
              <img className={styles.main_picture} src={backgroundImage} alt="Main Page Title Image 1" />
            </picture>
          </div>
          <CurvyLineLeftTopToRightDown className="absolute top-[40px] right-[-350px] w-[400px] h-[400px]" />
        </div>
      </div>
  )
}