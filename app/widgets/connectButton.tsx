import { FC } from "react";

const ConnectButton: FC = () => {
    return(
        <button className="border-2 h-[45px] w-[132px] relative overflow-hidden rounded-md group border-white hover:border-[#3D8BFF] py-1 px-4 hover:bg-[#3D8BFF] transition-all duration-[1s] ease-in-out">
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-[1s] ease-in-out group-hover:translate-y-[-65px] ">Connect</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[100%] transition-all duration-[1s] ease-in-out group-hover:translate-y-[-8px] ">Connect</span>
        </button>
    )
};

export default ConnectButton;