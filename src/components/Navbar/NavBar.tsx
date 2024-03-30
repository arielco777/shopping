import { Link, useNavigate } from "react-router-dom";
import NavItems from "./NavItems";
import { ChevronDown, MenuIcon, XIcon } from "lucide-react";
import { menuList } from "./MenuList";
import { useEffect, useState } from "react";

const NavBar: React.FC<{}> = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [subMenu, setSubMenu] = useState("");
    const [subMenuTwo, setSubMenuTwo] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = showMenu ? "hidden" : "visible";
    }, [showMenu]);

    const handleNavigate = (path) => {
        setShowMenu(false);
        setTimeout(() => {
            setSubMenuTwo("");
            setSubMenu("");
        }, 300);
        navigate(path);
    };

    return (
        <nav className="fixed z-50 lg:w-full lg:border-b lg:py-10 top-0 left-0 text-white lg:bg-black">
            <ul className="hidden lg:flex w-full h-full justify-center">
                <Link to="/">
                    <p className="absolute text-4xl left-8 top-1/3 -translate-y-1/2 rounded hover:bg-neutral-700 transition   hover:underline-offset-2">
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
                                            <p className="font-bold mb-2">
                                                New
                                            </p>
                                            <ul className="select-none w-1/5 text-left">
                                                {item.children.new.map(
                                                    (child, i) => (
                                                        <NavItems
                                                            className="w-max "
                                                            key={`${idx}-${i}`}
                                                            path={`${item.path}${child.path}`}
                                                            itemName={
                                                                child.name
                                                            }
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
                                                            itemName={
                                                                child.name
                                                            }
                                                        />
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-bold mb-2">
                                                Sports
                                            </p>
                                            <ul className="select-none">
                                                {item.children.sports?.map(
                                                    (child, i) => (
                                                        <NavItems
                                                            key={`${idx}-${i}`}
                                                            path={`${item.path}${child.path}`}
                                                            itemName={
                                                                child.name
                                                            }
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
            <div className="lg:hidden h-max flex">
                <button
                    onClick={() => setShowMenu(true)}
                    className="bg-black rounded-br-3xl p-1 pr-2 pb-2"
                >
                    <MenuIcon className="text-white" size={40} />
                </button>
                <div
                    className={`${
                        showMenu ? "w-screen h-screen" : "w-0 h-0"
                    } transition-all fixed top-0 left-0 z-[200] bg-black overflow-hidden `}
                >
                    <div className="w-full h-full">
                        <button onClick={() => setShowMenu(false)}>
                            <XIcon size={40} />
                        </button>
                        <div className="flex flex-col items-start">
                            <button onClick={() => handleNavigate("/")}>
                                <p className="text-4xl mb-2">Logo</p>
                            </button>
                            {menuList.map((item, idx: number) => (
                                <>
                                    <button
                                        className="hover:bg-gray-700"
                                        key={idx}
                                        onClick={() => {
                                            if (item.children)
                                                setSubMenu(item.path);
                                            else handleNavigate(item.path);
                                        }}
                                    >
                                        {item.name}
                                    </button>
                                    {subMenu == item.path && (
                                        <div className="bg-black fixed top-0 left-0 w-screen h-screen flex flex-col items-start">
                                            <button
                                                className="hover:bg-gray-700"
                                                onClick={() => setSubMenu("")}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="hover:bg-gray-700"
                                                onClick={() =>
                                                    setSubMenuTwo("new")
                                                }
                                            >
                                                New
                                            </button>
                                            <button
                                                className="hover:bg-gray-700"
                                                onClick={() =>
                                                    setSubMenuTwo("sports")
                                                }
                                            >
                                                Sport
                                            </button>
                                            <button
                                                className="hover:bg-gray-700"
                                                onClick={() =>
                                                    setSubMenuTwo("casual")
                                                }
                                            >
                                                Casual
                                            </button>
                                            {subMenuTwo == "new" && (
                                                <div className="bg-black fixed h-screen w-screen top-0 left-0 z-50 flex flex-col items-start">
                                                    <button
                                                        className="hover:bg-gray-700"
                                                        onClick={() =>
                                                            setSubMenuTwo("")
                                                        }
                                                    >
                                                        Close
                                                    </button>
                                                    {item.children.new.map(
                                                        (child, i) => (
                                                            <button
                                                                onClick={() => {
                                                                    handleNavigate(
                                                                        `${item.path}${child.path}`
                                                                    );
                                                                }}
                                                                className="hover:bg-gray-700"
                                                                key={i}
                                                            >
                                                                {child.name}
                                                            </button>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                            {subMenuTwo == "sports" && (
                                                <div className="bg-black fixed h-screen w-screen top-0 left-0 z-50 flex flex-col items-start">
                                                    <button
                                                        className="hover:bg-gray-700"
                                                        onClick={() =>
                                                            setSubMenuTwo("")
                                                        }
                                                    >
                                                        Close
                                                    </button>
                                                    {item.children.sports.map(
                                                        (child, i) => (
                                                            <button
                                                                onClick={() => {
                                                                    handleNavigate(
                                                                        `${item.path}${child.path}`
                                                                    );
                                                                }}
                                                                className="hover:bg-gray-700"
                                                                key={i}
                                                            >
                                                                {child.name}
                                                            </button>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                            {subMenuTwo == "casual" && (
                                                <div className="bg-black fixed h-screen w-screen top-0 left-0 z-50 flex flex-col items-start">
                                                    <button
                                                        className="hover:bg-gray-700"
                                                        onClick={() =>
                                                            setSubMenuTwo("")
                                                        }
                                                    >
                                                        Close
                                                    </button>
                                                    {item.children.casual.map(
                                                        (child, i) => (
                                                            <button
                                                                onClick={() => {
                                                                    handleNavigate(
                                                                        `${item.path}${child.path}`
                                                                    );
                                                                }}
                                                                className="hover:bg-gray-700"
                                                                key={i}
                                                            >
                                                                {child.name}
                                                            </button>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
