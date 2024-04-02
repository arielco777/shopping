import { articles } from "../articlesList";
import "./NewItemsStyle.css";

interface ItemType {
    name: string;
    price: number;
    src: string;
}

const NewItems = () => {
    return (
        <div className="flex gap-10 items-center overflow-auto h-full py-5 px-14">
            {articles.map((item: ItemType, idx: number) => (
                <div
                    key={idx}
                    className="relative cursor-pointer w-44 h-44 min-w-44 rounded-lg bg-neutral-200 text-black text-center hover:scale-105 transition overflow-hidden"
                >
                    <img src={item.src} className="object-fill" />
                    <div className="absolute  bottom-0 text-sm bg-neutral-100 w-full">
                        <p className="whitespace-nowrap">{item.name}</p>
                        <p className="">
                            <span>$</span>
                            {item.price}
                        </p>
                    </div>
                </div>
            ))}
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-l from-transparent to-black"></div>
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-r from-transparent to-black"></div>
        </div>
    );
};

export default NewItems;
