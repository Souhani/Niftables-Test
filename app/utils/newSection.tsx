import React, { FC } from "react"
type CenterProps = {
    children: React.ReactNode
}

const NewSection: FC<CenterProps> = ({ children }) => {
    return (
        <section className="w-full flex justify-center mb-[150px] min-h-screen">
            <div className="w-[75%]">
                { children }
            </div>
        </section>
    )
};

export default NewSection