import { ChevronRight, XIcon } from "lucide-react";

const SubMenu = ({ item, close, handleNavigate }) => {
    return (
        <div className="fixed w-full top-0 h-screen z-10 bg-neutral-900 overflow-y-auto">
            <div className="flex items-center justify-between px-1 py-2">
                <button
                    className="hover:bg-gray-700"
                    onClick={() => {
                        close("");
                        console.log("Here");
                    }}
                >
                    <XIcon size={"40px"} />
                </button>
                <button onClick={() => handleNavigate("/")}>
                    <p className="text-4xl mb-1 mr-2">Logo</p>
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
