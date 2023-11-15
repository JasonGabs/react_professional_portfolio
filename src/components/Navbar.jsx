import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const manageNav = () => {
        setNav(!nav);
    }
    return (
        <div className="flex justify-between m-4 items-center max-h-[96px] mx-auto px-4 bg-blue-900 text-blue-200">
            <h1 className="w-full sm:p-6 font-bold text-6xl">
                Jason Gabianelli
            </h1>
            <ul className="hidden lg:flex font-semibold ">
                <li className="text-xl px-10 ">About</li>
                <li className="text-xl px-10 ">Projects</li>
                <li className="text-xl px-10 ">Contributions</li>
                <li className="text-xl px-10 ">Contact</li>
            </ul>
            <div onClick={manageNav} className="block lg:hidden">
                {!nav ? <LuMenu  size={30}/> : <AiOutlineClose size={30} />}
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[80%] border-r border-r-grey-400 h-full bg-blue-900 ease-in-out duration-500" : "fixed left-[-100%]"}>
                <h1 className="w-full items-center p-6 font-bold text-5xl">
                    Jason Gabianelli
                </h1>
                <ul className="pt-12 uppercase">
                    <li className="text-2xl font-semibold p-5 border-b">About</li>
                    <li className="text-2xl font-semibold p-5 border-b">Projects</li>
                    <li className="text-2xl font-semibold p-5 border-b">Contributions</li>
                    <li className="text-2xl font-semibold p-5 border-b">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;