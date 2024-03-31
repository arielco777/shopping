import { ChevronLeft, ChevronRight, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { menuList } from "../MenuList";
import SubMenu from "./SubMenu";

const menuIcon = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_429_11066)">
            <path
                d="M3 6.00092H20M3 12.0009H20M3 18.0009H15M3"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>
);

const MobileNav: React.FC<{}> = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [subMenu, setSubMenu] = useState("");
    const [subMenuTwo, setSubMenuTwo] = useState("");

    const handleNavigate = (path: string) => {
        setShowMenu(false);
        // setTimeout(() => {}, 500);
        console.log("Path: ", path);
        // navigate(path);
    };

    useEffect(() => {
        document.body.style.overflow = showMenu ? "hidden" : "visible";
    }, [showMenu]);

    return (
        <div className="lg:hidden h-max flex">
            <button
                onClick={() => setShowMenu(true)}
                className="bg-black rounded-br-3xl p-1 pr-2 pb-2 w-12 h-12"
            >
                {menuIcon}
            </button>
            <div
                className={`${
                    showMenu ? "w-screen h-screen" : "w-0 h-0"
                } transition-all fixed top-0 left-0 z-[200] bg-neutral-900 overflow-hidden `}
            >
                <div className="w-full h-full">
                    <div className="flex items-center justify-between px-1 py-2">
                        <button onClick={() => setShowMenu(false)}>
                            <p className="text-4xl mb-1 mr-2">Logo</p>
                        </button>
                        <button
                            className="hover:bg-neutral-700"
                            onClick={() => handleNavigate("/")}
                        >
                            <XIcon size={"40px"} />
                        </button>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="w-full flex flex-col h-full divide-y divide-neutral-500">
                            {menuList.map((item, idx: number) => (
                                <div className="h-20 flex text-3xl">
                                    <button
                                        className="relative hover:bg-gray-700 w-full text-start pl-4 flex items-center"
                                        key={idx}
                                        onClick={() => {
                                            if (item.children)
                                                setSubMenu(item.path);
                                            else handleNavigate(item.path);
                                        }}
                                    >
                                        {item.name}
                                        {item.children && (
                                            <ChevronRight className="mt-1 absolute left-1/2" />
                                        )}
                                    </button>
                                    {subMenu == item.path && (
                                        <div
                                            className={`fixed top-0 ${
                                                showMenu
                                                    ? "w-screen h-screen"
                                                    : "w-0 h-0"
                                            } z-10 bg-neutral-900 overflow-hidden transition-all`}
                                        >
                                            <div className="flex items-center justify-between px-1 py-2">
                                                <button
                                                    onClick={() =>
                                                        setSubMenu("")
                                                    }
                                                >
                                                    <p className="text-4xl mb-1 mr-2">
                                                        <ChevronLeft
                                                            size={40}
                                                        />
                                                    </p>
                                                </button>
                                                <button
                                                    className="hover:bg-gray-700"
                                                    onClick={() => {
                                                        handleNavigate("/");
                                                        console.log("Here");
                                                    }}
                                                >
                                                    <XIcon size={"40px"} />
                                                </button>
                                            </div>
                                            <div className="h-1/2 flex flex-col justify-between ">
                                                <div className="flex flex-col items-start divide-y divide-neutral-500 justify-between w-full">
                                                    <button
                                                        className="relative h-20 hover:bg-gray-700 w-full text-left pl-4 flex items-center"
                                                        onClick={() =>
                                                            setSubMenuTwo("new")
                                                        }
                                                    >
                                                        New
                                                        <ChevronRight className="mt-1 absolute left-1/2" />
                                                    </button>

                                                    <button
                                                        className="relative h-20 hover:bg-gray-700 w-full text-left pl-4 flex items-center"
                                                        onClick={() =>
                                                            setSubMenuTwo(
                                                                "sports"
                                                            )
                                                        }
                                                    >
                                                        Sports
                                                        <ChevronRight className="mt-1 absolute left-1/2" />
                                                    </button>

                                                    <button
                                                        className="relative h-20 hover:bg-gray-700 w-full text-left pl-4 flex items-center"
                                                        onClick={() =>
                                                            setSubMenuTwo(
                                                                "casual"
                                                            )
                                                        }
                                                    >
                                                        Casual
                                                        <ChevronRight className="mt-1 absolute left-1/2" />
                                                    </button>
                                                </div>
                                                {subMenuTwo == "new" && (
                                                    <SubMenu
                                                        handleNavigate={
                                                            handleNavigate
                                                        }
                                                        item={item.children.new}
                                                        close={setSubMenuTwo}
                                                        showMenu={showMenu}
                                                    />
                                                )}
                                                {subMenuTwo == "sports" && (
                                                    <SubMenu
                                                        handleNavigate={
                                                            handleNavigate
                                                        }
                                                        item={
                                                            item.children.sports
                                                        }
                                                        close={setSubMenuTwo}
                                                        showMenu={showMenu}
                                                    />
                                                )}
                                                {subMenuTwo == "casual" && (
                                                    <SubMenu
                                                        handleNavigate={
                                                            handleNavigate
                                                        }
                                                        item={
                                                            item.children.casual
                                                        }
                                                        close={setSubMenuTwo}
                                                        showMenu={showMenu}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`absolute bottom-4 left-4 z-[999] `}>
                    <p className="text-md">Ariel Cohen</p>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
