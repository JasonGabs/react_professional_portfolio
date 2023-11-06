import React from "react"
import PersonalPhoto from "../assets/PersonalPhoto.jpg"
const Hero = () => {
    return (
        <>
            <div className="flex flex-initial">
                <div className="flex flex-shrink p-4 max-w-[50%] bg-blue-200 text-4xl font-serif">
                    Hello, and welcome to my portfolio! This page will display and showcase the work and projects I've done as well as projcets I contributed to.
                </div>
                <img className="flex-shrink max-w-[50%]" src={PersonalPhoto} alt="" />
            </div>
        </>
    )
}
export default Hero;