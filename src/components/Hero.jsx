import React from "react";
import personalPhoto from "../assets/personalPhoto.jpg";
const Hero = () => {
    return (
        <>
            <div className="sm:flex flex-initial block">
                <div className="flex flex-col">
                    
                    <h1 className=" bg-blue-800 p-8 text-5xl text-blue-200 text-center">
                        About Me
                    </h1>
                    <div className="flex-grow flex p-4 bg-blue-200 text-3xl font-serif text-left">
                        Hello, and welcome to my portfolio! My name is Jason and I'm a recent bootcamp graduate born and raised in northern California. This page will display and showcase the work and projects I've done as well as projcets I contributed to.
                    </div>
                </div>
                <img className="sm:max-w-[30%]" src={personalPhoto} alt="" />
            </div>
        </>
    )
}
export default Hero;