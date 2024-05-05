import React, { FC } from "react";
import { styles } from "../styles";
import NewSection from "../utils/newSection";

const Section1: FC = () => {
    return (
        <NewSection>
            <div className="flex flex-col w-full justify-end h-full">
            <div className="w-full flex justify-center overflow-hidden ">
                <div className="h-screen z-[-99] absolute top-0 left-0 w-full object-cover mix-blend-overlay bg-gradient-to-t from-[#000000] from-0% via-[#3d8bff] via-47% to-[#ab23ff] to-99% ">
                </div>
                <video autoPlay muted className="h-screen z-[-999] absolute top-0 left-0 w-full object-cover">
                    <source src="https://res.cloudinary.com/dqxkzecxp/video/upload/v1714647295/main-background-video_1_b4oooj.mp4" type="video/mp4" />
                </video>
           </div>
                <div className="mb-20">
                    <h1 className={styles.title}> The world's first platform for Tokenizing AI blockchain projects</h1>
                    <div className="w-full 800px:w-max">
                        <div className="h-[1px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF]"></div>
                        <div className={styles.comment}>
                        Hold the Creon Pass NFT and earn passive income from AI Tools
                        </div>
                        <div className="h-[1px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF]"></div>
                    </div>
                </div>
        </div>
        </NewSection>
    )
};

export default Section1;