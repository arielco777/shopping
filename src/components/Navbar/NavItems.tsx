// import { Link } from "react-router-dom";

import { useEffect } from "react";

const NavItems: React.FC<{
    itemName: string;
    path?: string;
    className?: string;
}> = ({ itemName, path = "", className }) => {
    useEffect(() => {
        console.log("Path", path);
    }, []);

    return (
        // <Link to={path}>
        <li className={`group/item cursor-pointer w-max ${className}`}>
            <span>{itemName}</span>
            <div className="border-b border-neutral-600 w-0 group-hover/item:w-full transition-all"></div>
        </li>
        // </Link>
    );
};

export default NavItems;
