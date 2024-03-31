import { ChevronLeft, XIcon } from "lucide-react";

const SubMenu = ({ item, close, handleNavigate, showMenu }) => {
    return (
        <div
            className={`fixed top-0 ${
                showMenu ? "w-screen h-screen" : "w-0 h-0"
            } z-10 bg-neutral-900 overflow-hidden transition-all`}
        >
            <div className="flex items-center justify-between px-1 py-2">
                <button onClick={() => close("")}>
                    <ChevronLeft size={40} />
                </button>
                <button
                    className="hover:bg-gray-700"
                    onClick={() => {
                        handleNavigate("/");
                    }}
                >
                    <XIcon size={"40px"} />
                </button>
            </div>
            <div className="h-1/2 flex flex-col justify-between">
                <div className="flex flex-col items-start divide-y divide-neutral-500 justify-between w-full">
                    {item.map(
                        (child: { name: string; path: string }, i: number) => (
                            <button
                                className="relative h-20 hover:bg-gray-700 w-full text-left pl-4 flex items-center"
                                onClick={() => {
                                    handleNavigate(`${item.path}${child.path}`);
                                }}
                                key={i}
                            >
                                {child.name}
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubMenu;
