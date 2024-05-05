import { FC } from "react";
import NewSection from "../utils/newSection";
import Card, { CardProps } from "../widgets/card";
import image9 from "../assets/images/image9.png";
import image10 from "../assets/images/image10.png";
import image11 from "../assets/images/image11.png";

const Section5:FC = () => {
  const cardInfo:CardProps[] = [
    {
        title: "token",
        subtitle: "The Gateway token to the world of AI",
        description: "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
        image: image9
    },
    {
        title: "revenue",
        subtitle: "Driving income and growth through decentralization",
        description: "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
        image: image10
    },
    {
        title: "launchpad",
        subtitle: "Driving the future of AI Innovation",
        description: "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
        image: image11
    }
  ]
    return (
        <NewSection>
           <div className="w-full flex flex-wrap justify-center gap-6">
           {cardInfo.map((item:CardProps, index) => (
                <Card key={index} title={item.title} subtitle={item.subtitle} description={item.description} image={item.image} />
            ))} 
           </div>
        </NewSection>
    )
};

export default Section5;