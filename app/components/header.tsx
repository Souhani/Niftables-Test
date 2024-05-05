"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/Logo.png";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";
import ConnectButton from "../widgets/connectButton";
import SocialLinks from "../widgets/socialLinks";

const Header = () => {
  type NavItem = {
    title: string;
    link: string;
    comingSoon: boolean;
  };
  const navItems: NavItem[] = [
    {
      title: "Creon Pass",
      link: "#",
      comingSoon: false,
    },
    {
      title: "Token",
      link: "#",
      comingSoon: true,
    },
    {
      title: "AI Revenue",
      link: "#",
      comingSoon: true,
    },
    {
      title: "AI Launchpad",
      link: "#",
      comingSoon: true,
    },
  ];
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
 
  const handleCloseSidebar = (event: any): void => {
    if (event.target?.id === "screen") {
      setOpenSidebar(false);
    }
  };
  return (
    <header className="w-full flex justify-center z-[9999] absolute top-[30px]">
      <div className="w-[95%] flex justify-between items-center">
        <h1 className="z-[999999]">
          <Image src={Logo} alt="CREON" width={140} />
        </h1>
        <div className="1000px:hidden flex cursor-pointer text-white w-min">
                            <IoMenu 
                            size={30}
                            onClick={ () => setOpenSidebar(true) }/>
        </div>
        <nav className=" gap-10 items-center 1000px:flex hidden">
          <ul className="flex gap-7">
            {navItems.map((item: NavItem, index) => (
              <li key={index} className="flex items-start gap-1">
                <Link href={item.link}>{item.title}</Link>
                {item.comingSoon && (
                  <span className="bg-black rounded-full text-[0.8rem] px-2 text-purple-500">
                    SOON
                  </span>
                )}
              </li>
            ))}
          </ul>
       <ConnectButton />
        </nav>
        {/* for mobile */}
        {
          openSidebar && <div className="1000px:hidden flex">
          <div
          className={`${
            openSidebar &&
            "fixed z-[999] bg-[#0000009f] h-screen w-full right-0 top-0"
          }`}
          onClick={handleCloseSidebar}
          id="screen"
        >
          <div
            className={`fixed z-[9999] bg-black h-screen w-[65%] right-[-70%] top-0 transform ${
              openSidebar ? "translate-x-[-100%]" : "translate-x-[0%]"
            } transition-transform duration-[0.5s] grid content-between`}
          >
            <nav className="flex gap-10 items-center p-10">
              <ul className="grid  w-full">
              <div className="w-full flex justify-center">
              <div className="flex gap-4 w-full">
              <ConnectButton />
              <div className=" flex cursor-pointer text-white w-max p-2 bg-blue-500  rounded-md" onClick={ () => setOpenSidebar(false) }>
                            <RiCloseLargeFill 
                            size={30}
                            />
        </div>
              </div>
              </div>
                {navItems.map((item: NavItem, index) => (
                  <li key={index} className="">
                    <div className="bg-[#ffffff1f] h-[1px] w-full my-4"></div>
                    <div className="flex items-start gap-1">
                    <Link href={item.link}>{item.title}</Link>
                    {item.comingSoon && (
                      <span className="bg-black rounded-full text-[0.8rem] px-2 text-purple-500">
                        SOON
                      </span>
                    )}
                    </div>
                  </li>
                ))}
                                  <div className="bg-[#ffffff1f] h-[1px] w-full my-4"></div>
  
              </ul>
            </nav>
            <div className="p-10">
            <SocialLinks />
            </div>
          </div>
        </div>
          </div>
        }
        
      </div>
    </header>
  );
};

export default Header;
