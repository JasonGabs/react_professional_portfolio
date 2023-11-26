import React from "react";

const Contact = () => {
    return (
        <div className="outline outline-1"> 
            <div id="contact" className=" bg-blue-300 font-serif p-8 text-5xl text-center">
                Contact
            </div>
            <div className="bg-blue-300 font-serif text-3xl p-4">
                If you'd like to contact me, here is my LinkedIn:
            </div>
            <a href="https://www.linkedin.com/in/jason-gabianelli-640b20212/ "className="flex truncate font-serif bg-blue-300 text-3xl p-4 min-w-full">
            https://www.linkedin.com/in/jason-gabianelli-640b20212/
            </a>
        </div>
    )
}

export default Contact;