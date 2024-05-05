"use client"
import Image, { StaticImageData } from "next/image";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";
import { FC, useState } from "react";
import { styles } from "../styles";
export type DropdownProps = {
  title: string;
  description: string;
  icon: StaticImageData;
};
const Dropdown: FC<DropdownProps> = ({ title, description, icon }) => {
    const [dropdown, setDropdown] = useState<boolean>(false);
    const handleDropdown = ():void => {
      setDropdown((state) => !state);
    }

  return (
    <div className="py-6 border-b border-[#13171D] w-full">
      <div className=" w-full flex justify-center items-center gap-10 cursor-pointer" onClick = {handleDropdown}>
        <div className="relative h-[114px] w-[100px]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              width="100"
              height="114"
              viewBox="-100 -100 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#3D8BFF" />
                  <stop offset="100%" stop-color="#AB23FF" />
                </linearGradient>
              </defs>
              <polygon
                points="86.6,50 0,100 -86.6,50 -86.6,-50 0,-100 86.6,-50"
                fill="none"
                stroke="url(#gradient)"
                stroke-width="3"
                stroke-dasharray="10,17"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className={`hexagon_1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-[1s] ease-in-out ${dropdown? "bg-[#fff]" : "bg-[#13171d]"}`}>
            <div className="hexagon_2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
              <Image src={icon} alt="icon" width="26" height="26" />
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-between gap-2 transition-all duration-[1s] ease-in-out hover:text-[#3D8BFF] hover:scale-[1.04]">
            <h3 className="font-Satoshi_B text-[22px]">{title}</h3>
            <div className="min-w-[30px]">
            {dropdown ? <MdOutlineKeyboardArrowUp size={30}  /> :  <MdOutlineKeyboardArrowDown size={30} />}
            </div>
        </div>
      </div>
      <div className={`ml-[110px] mt-2 overflow-hidden max-h-0 opacity-0 transition-max-height ${dropdown && 'max-h-screen opacity-100'}`}>
  <p>
    <span className={styles.paragraph}>{description}</span>
  </p>
</div>

        
    </div>
  );
};

export default Dropdown;
