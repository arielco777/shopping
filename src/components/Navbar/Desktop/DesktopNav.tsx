import React from "react";
import NavItems from "../NavItems";
import { ChevronDown } from "lucide-react";
import { menuList } from "../MenuList";
import { Link } from "react-router-dom";

const DesktopNav: React.FC<{}> = () => {
    return (
        <ul className="hidden lg:flex w-full h-full justify-center">
            <Link to="/">
                <p className="absolute text-4xl left-8 top-1/3 -translate-y-1/2 rounded hover:bg-neutral-700 transition   hover:underline-offset-2">
                    Logo
                </p>
            </Link>
            {menuList.map((item, idx) => (
                <li key={idx} className="group/main px-3">
                    {/* <Link to={`${item.path}`}> */}
                    <div className="cursor-pointer w-max group/parent ">
                        <span className="flex w-max">
                            {item.name}
                            <ChevronDown
                                className={`w-4 h-auto ${
                                    item.children
                                        ? "visible block"
                                        : "invisible hidden"
                                } group-hover/main:-rotate-180 transition`}
                            />
                        </span>
                        <div className="border-b w-0 group-hover/main:w-full duration-75 transition-all border-neutral-400"></div>
                    </div>
                    {/* </Link> */}
                    <section
                        className={`absolute w-screen top-176 text-black left-0 invisible ${
                            item.children && "group-hover/main:visible"
                        } bg-white border-y border-b-neutral-700 w-full`}
                    >
                        <h1 className="border-b w-full text-center text-2xl uppercase tracking-widest">
                            {item.name}
                        </h1>
                        <div className="flex divide-x">
                            {item.children && (
                                <div className="py-2 w-full flex justify-end">
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
                    </section>
                </li>
            ))}
        </ul>
    );
};

export default DesktopNav;
