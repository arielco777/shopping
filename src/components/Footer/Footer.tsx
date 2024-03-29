import React from "react";

const Footer: React.FC<{}> = () => {
    return (
        <footer className="min-h-40 w-full bg-white flex flex-col items-center justify-center gap-3">
            <p>Made by Ariel Cohen</p>
            <a
                href="http://ariel-cohen-portfolio.vercel.app"
                className="group text-blue-700 hover:text-blue-700 transition"
            >
                Find more Projects here
                <div className="lg:w-0 w-full mx-auto border-b border-blue-600 group-hover:w-full transition-all origin-center"></div>
            </a>
        </footer>
    );
};

export default Footer;
