import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { ChevronDown } from "lucide-react";
import { menuList } from "./MenuList";

const NavBar: React.FC<{}> = () => {
    return (
        <nav className="fixed z-[999] w-full border-b py-10 text-white bg-black">
            <ul className="flex w-full h-full justify-center">
                <Link to="/">
                    <p className="absolute text-4xl top-3 left-12 px-2 py-1 rounded hover:bg-neutral-200 transition   hover:underline-offset-2">
                        Logo
                    </p>
                </Link>
                {menuList.map((item, idx) => (
                    <li key={idx} className="group/main px-3">
                        <Link to={`${item.path}`}>
                            <span className="cursor-pointer w-max group/parent ">
                                <span className="flex">
                                    {item.name}
                                    <ChevronDown
                                        className={`w-4 h-auto ${
                                            item.children
                                                ? "visible"
                                                : "invisible"
                                        } group-hover/main:-rotate-180 transition`}
                                    />
                                </span>
                                <div className="border-b w-0 group-hover/main:w-full transition-all border-neutral-700"></div>
                            </span>
                        </Link>
                        <div
                            className={`absolute top-24 text-black flex left-0 invisible ${
                                item.children && "group-hover/main:visible"
                            } bg-white border-y border-b-neutral-700 w-full justify-center divide-x`}
                        >
                            {item.children && (
                                <div className="py-2 px-5 w-1/2 flex flex-col items-end justify-right">
                                    <div className="w-40 ">
                                        <p className="font-bold mb-2">New</p>

                                        <ul className="select-none w-1/5 text-left">
                                            {item.children.new.map(
                                                (child, i) => (
                                                    <NavItems
                                                        className="w-max "
                                                        key={`${idx}-${i}`}
                                                        path={`${item.path}${child.path}`}
                                                        itemName={child.name}
                                                    />
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {item.children !== null && (
                                <div className="flex gap-20 px-5 py-2 w-full">
                                    <div>
                                        <p className="font-bold mb-2">
                                            Catalog
                                        </p>
                                        <ul className="select-none">
                                            {item.children.casual.map(
                                                (child, i) => (
                                                    <NavItems
                                                        key={`${idx}-${i}`}
                                                        path={`${item.path}${child.path}`}
                                                        itemName={child.name}
                                                    />
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold mb-2">Sports</p>
                                        <ul className="select-none">
                                            {item.children.sports?.map(
                                                (child, i) => (
                                                    <NavItems
                                                        key={`${idx}-${i}`}
                                                        path={`${item.path}${child.path}`}
                                                        itemName={child.name}
                                                    />
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
