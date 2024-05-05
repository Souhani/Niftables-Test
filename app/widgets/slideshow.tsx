import { FC } from "react";
import { styles } from "../styles";
import Image, { StaticImageData } from "next/image";

export type SlideshowProps = {
    title: string;
    description: string;
    image: StaticImageData;
}
const Slideshow:FC<SlideshowProps> = ({title, description, image}) => {
    return (
      <div className="bg-[#13171d99] grid 1200px:grid-cols-3 rounded-md overflow-hidden gap-4">
        <div className="1200px:order-1 order-2 1200px:col-span-2 p-10">
           <h2 className={styles.subtitle}>{title}</h2>
           <p className={styles.paragraph}>{description}</p>
        </div>
        <div className="1200px:order-2 order-1 h-full w-full overflow-hidden relative">
        <div className={styles.overlayEffect}></div>
          <Image src={image} alt={title} className="h-full w-full" />
        </div>
      </div>  
    )
};

export default Slideshow