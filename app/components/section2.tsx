import React, { FC } from "react";
import { styles } from "../styles";
import NewSection from "../utils/newSection";

const Section2: FC = () => {
  const features: string[] = [
    "Pre-launch investment opportunities for upcoming AI projects",
    "Free and early access to Creon built AI projects",
    "Higher allocation limits on the Creon AI Launchpad",
    "Revenue share distribution from Creon built AI projects",
  ];
  return (
    <NewSection>
      <div className="flex flex-col 1000px:flex-row gap-10 items-center justify-center">
        <div className="order-2 1000px:order-1 1000px:w-1/2 grid gap-2">
          <h1 className={styles.title}>creon pass nft</h1>
          <hr className="border-t border-[#13171D]" />
          <div className={styles.comment}>
            The Creon NFT pass unlocks access to AI projects, the Creon
            launchpad, and a ticket to generate passive income through AI-driven
            tools
          </div>
          <div className=" font-Satoshi_R  gap-2 text-[18px]">
            {features.map((item: string, index) => (
              <div key={index} className="my-2">
                <p className="border inline-block border-[#13171D] rounded-md p-4">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <button className=" w-max font-Satoshi_B rounded-md text-[18px] 1000px:px-[225px] px-[125px]  py-5  mt-2 group relative overflow-hidden transition-all duration-500 ease-in-out">
          <div className="absolute w-full h-full  bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] opacity-100 group-hover:opacity-0 left-0 top-0 transition-all duration-[1s] ease-in-out"></div>
            <div className="absolute w-full h-full bg-blue-500  left-0 top-0 z-[-9] transition-all duration-[1s] ease-in-out"></div>
  <span className="w-full absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 transition-all duration-[1s] ease-in-out group-hover:translate-y-[-65px] ">
    Buy Creon Pass
  </span>
  <span className="w-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[100%] transition-all duration-[1s] ease-in-out group-hover:translate-y-[-7px] ">
    Buy Creon Pass
  </span>
</button>

        </div>
        <div className="order-1 1000px:order-2 1000px:w-1/2 relative w-full h-full overflow-hidden">
          <div className={styles.overlayEffect}></div>
          <video
            autoPlay
            muted
            loop
            className="z-[-999]  w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dqxkzecxp/video/upload/v1715029369/vd3_tbbhep.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute top-0 left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[160%] h-[17%] rounded-[50%] bg-gradient-to-b from-[#000000]  from-70%  to-[#00000000]  to-100% "></div>
          <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 translate-y-1/2 w-[160%] h-[17%] rounded-[50%] bg-gradient-to-t from-[#000000]  from-70%  to-[#00000000]  to-100% "></div>
          <div className="absolute  top-[-50%] left-0 transform -translate-x-1/2 translate-y-1/2 w-[17%] h-[100%] rounded-[50%] bg-gradient-to-r from-[#000000]  from-70%  to-[#00000000]  to-100% "></div>
          <div className="absolute  top-[-50%] right-0 transform -translate-x-1/2 translate-y-1/2 w-[17%] h-[100%] rounded-[50%] bg-gradient-to-r from-[#00000000]  from-70%  to-[#000000]  to-100%  "></div>
        </div>
      </div>
    </NewSection>
  );
};

export default Section2;
