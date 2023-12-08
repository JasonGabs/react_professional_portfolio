import React from "react";

const Contact = () => {
    return (
        <div className="outline outline-1">
            <div id="contact" className=" bg-blue-300 font-serif p-8 text-5xl text-center">
                Contact
            </div>
            <div className="bg-blue-200 font-serif text-3xl p-4">
                Click on the link for my LinkedIn if you'd like to contact me:
            </div>
            <a href="https://www.linkedin.com/in/jason-gabianelli-640b20212/" target="_blank" rel="noreferrer" className="flex truncate font-serif bg-blue-300 text-3xl text-blue-700 p-4 min-w-full underline">
                https://www.linkedin.com/in/jason-gabianelli-640b20212/
            </a>
        </div>
    )
}

export default Contact;