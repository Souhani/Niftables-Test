import { FC } from "react";
import { styles } from "../styles";

const BottomBackground:FC = () => {
    return (
      <div className="absolute  bottom-0 left-0 w-full z-[-999] overflow-hidden">
                <div className="relative w-full h-full">
                <div className={styles.overlayEffect}></div>
                <div className="absolute  top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000] from-0% to-[#00000079] to-50%"></div>
                <div className="absolute  top-0 left-0 w-full h-full bg-gradient-to-b from-[#000000] from-0% to-[#00000079] to-50%"></div>
                <video autoPlay muted loop className="z-[-999]  w-full object-cover">
                    <source src="https://res.cloudinary.com/dqxkzecxp/video/upload/v1714834970/roadmap-video_2_1_rlg1nk.mp4" type="video/mp4" />
                </video>
                </div>
      </div>
    )
};

export default BottomBackground