import { FC } from "react";
import image15 from "../assets/images/image15.png";
import image16 from "../assets/images/image16.png";
import image17 from "../assets/images/image17.png";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const SocialLinks:FC = () => {
    type Social = {
        icon: StaticImageData;
        link: string;
    }
    const social:Social[] = [
        {
          icon: image15,
          link: "#"
        },
        {
            icon: image16,
            link: "#"
         },
        {
            icon: image17,
            link: "#"
        }
    ]
    return (
        <div className="flex gap-2">
                     {social.map((item:Social, index) => (
                        <div key={index}>
                            <Link href={item.link}>
                                <Image src={item.icon} alt="social icon" />
                            </Link>
                        </div>
                     ))}
          </div>
    )
};

export default SocialLinks;