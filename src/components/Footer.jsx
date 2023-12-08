import React from "react";

const Footer = () => {
    return (
        <>
            <div className="flex p-4 font-serif bg-emerald-200 text-3xl min-w-full">
                Click on the link for my github where these projects can be found:
            </div>
            <a href="https://github.com/JasonGabs" target="_blank" rel="noreferrer" className="flex truncate p-4 font-serif bg-emerald-100 text-3xl text-blue-700 min-w-full underline bg-emerald-100">
                https://github.com/JasonGabs
            </a>
            <div className="flex-col font-serif h-40 p-4  bg-emerald-100 text-5xl text-center justify-items-center bg-emerald-200">
                Thanks for visiting!
            </div>
        </>
    )
}

export default Footer;