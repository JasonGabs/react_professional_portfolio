import React from "react";
import personalPhoto from "../assets/personalPhoto.png";
const Hero = () => {
    return (
        <>
            <div id="aboutme" className="sm:flex flex-initial block outline outline-1">
                <div className="flex flex-col">
                    <h1 className=" bg-blue-800 p-8 text-5xl font-serif text-blue-200 text-center">
                        About Me
                    </h1>
                    <div className="flex-grow flex p-4 bg-blue-200 text-3xl font-serif text-left">
                        Hello! <br></br><br></br> Welcome to my portfolio, my name is Jason Gabianelli. I am a recent UC Berkeley FullStack Web Development bootcamp graduate born and raised in the Bay Area. This page displays and showcases the work and projects I've done as well as projects I contributed to. Feel free to see some of my work so far. I have a passion for coding and I am meticulous, hard-working, outgoing, friendly, and I am ready to take on any challenge.
                        My contact information is below. Feel free to check out my LinkedIn, projects, contributions, etc.<br></br><br></br> Thanks,<br></br><br></br>
                        Jason Gabianelli
                    </div>
                </div>
                <img className="sm:max-w-[30%] outline outline-1" src={personalPhoto} alt="" />
            </div>
        </>
    )
}
export default Hero;