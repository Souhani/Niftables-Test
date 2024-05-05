import { FC } from "react";
import Image from "next/image";
import image18 from "../assets/images/image18.png";
import SocialLinks from "../widgets/socialLinks";

const Footer:FC = () => {
    return(
        <div className="w-full flex justify-center">
            <footer className="w-[75%] 800px:flex grid justify-between items-center py-10 gap-5">
               <div className="flex gap-20 items-center">
                  <p className="text-[16px] font-Satoshi_R">© Creon 2023. All rights reserved.</p>
                  <SocialLinks />
               </div>
               <div className="flex gap-2 items-center">
                 <p className="text-[16px] font-Satoshi_R">Powered by</p>
                 <Image src={image18} alt="niftables logo" className="h-[16px]"/>
               </div>
            </footer>
        </div>
    )
};

export default Footer;