import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const manageNav = () => {
        setNav(!nav);
    }
    return (
        <div className="flex justify-between m-4 items-center max-h-[96px] mx-auto px-4 bg-purple-400">
            <h1 className="w-full p-6 font-bold text-5xl">
                Jason Gabianelli
            </h1>
            <ul className="hidden md:flex font-semibold ">
                <li className="text-xl px-10 ">About</li>
                <li className="text-xl px-10 ">Featured</li>
                <li className="text-xl px-10 ">All</li>
                <li className="text-xl px-10 ">Contact</li>
            </ul>
            <div onClick={manageNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={30}/> : <LuMenu size={30} />}
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-[80%] border-r border-r-grey-400 h-full bg-purple-400 ease-in-out duration-500" : "fixed left-[-100%]"}>
                <h1 className="w-full p-6 font-bold text-5xl">
                    Jason Gabianelli
                </h1>
                <ul className="pt-12 uppercase">
                    <li className="text-3xl font-semibold p-5 border-b">About</li>
                    <li className="text-3xl font-semibold p-5 border-b">Featured</li>
                    <li className="text-3xl font-semibold p-5 border-b">All</li>
                    <li className="text-3xl font-semibold p-5 ">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;