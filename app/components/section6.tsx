import { FC } from "react";
import NewSection from "../utils/newSection";
import Slideshow, { SlideshowProps } from "../widgets/slideshow";
import image12 from "../assets/images/image12.jpg";
import image13 from "../assets/images/image13.jpg";
import image14 from "../assets/images/image14.jpg";
import BottomBackground from "./bottomBackground";

const Section6:FC = () => {
    const features:SlideshowProps[] = [
        {
            title: "AI Prospects, Market Size, and Development Pace",
            description: "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
            image: image12
        },
        {
            title: "AI Tools and Market",
            description: "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
            image: image13
        },
        {
            title: "AI, Crypto, and NFT Market",
            description: "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
            image: image14
        }
    ]
    return (
        <div>
            <BottomBackground />
        <NewSection>
           <div className="grid gap-5">
            {features.map((item:SlideshowProps, index) => (
                <Slideshow key={index} title={item.title} description={item.description} image={item.image}/>
            ))}
           </div>
        </NewSection>
        </div>
    )
};

export default Section6;