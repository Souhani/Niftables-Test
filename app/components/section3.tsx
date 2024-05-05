import { FC } from "react";
import { styles } from "../styles";
import image2 from "../assets/images/image2.png"
import Image from "next/image";
import NewSection from "../utils/newSection";

const Section3:FC = () => {
    return (
       <NewSection>
                <div className="w-full">
                    <h1 className={styles.title}>Profiting Through</h1>
                    <div className="w-full text-end">
                    <h2 className={styles.subtitle}>
                    <span className="gradient-text">
                      AI Innovation & Decentralization
                    </span>
                    </h2>
                    </div>
                </div>
                <div className="grid 1000px:grid-cols-3 gap-10 mt-20 justify-items-center">
                  <div className=" 1000px:col-span-2 content-center relative w-full h-full overflow-hidden">
                  <div className={styles.overlayEffect}></div>
                    <Image src={image2} alt="earth from outer space" className="rounded-md w-full object-cover"/>
                  </div>
                  <div className=" border-x content-center  border-[#13171D] h-full px-8 ">
                    <h3 className="font-Satoshi_B text-[22px] mb-6">The dynamic community driven business model of the future.</h3>
                    <p className="font-Satoshi_R text-[18px]">At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.</p>
                  </div>
                </div>
       </NewSection>
    )
};

export default Section3;