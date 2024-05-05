"use client"
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { styles } from "../styles";
export type CardProps = {
    title: string;
    subtitle: string;
    description: string;
    image: StaticImageData;
}
const Card:FC<CardProps> = ({title, subtitle, description, image}) => {
  
    return (
       <div className="relative w-[455px] h-[660px] bg-[#13171d99] group rounded-md cursor-pointer">
        <div className="rounded-full bg-white text-black text-[12px] absolute top-0 px-2 transform -translate-y-1/2 right-[5%]"><span className="uppercase">coming soon</span></div>
          <h2 className={`${styles.subtitle} p-5`}>{title}</h2>
          <div className={`${styles.comment} p-5`}><span>{subtitle}</span></div>
         <div className="absolute w-full left-0 top-1/4">
         <div className="w-full overflow-hidden rounded-r-lg relative my-5">
  <div className="absolute top-0 left-0 rounded-r-lg overflow-display w-[95%] h-full mix-blend-color bg-gradient-to-b from-[#ab23ff] to-[#3d6dff] z-[99]"></div>
  <div className="w-[95%] overflow-hidden rounded-r-lg">
    <Image src={image} alt={title} className="w-full object-cover overflow-hidden transition-transform duration-[1s] ease-in-out transform group-hover:scale-[1.2]" />
  </div>
</div>


         </div>
          <p className={`${styles.paragraph} p-5 absolute left-0 top-[65%]`}>{description}</p>
       </div> 
    )
};

export default Card;