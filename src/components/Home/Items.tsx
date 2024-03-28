import React from "react";

interface ItemType {
    name: string;
    price: number;
}

const HomeItems: React.FC<{ item: ItemType }> = ({ item }) => {
    return (
        <div className="w-44 h-44 min-w-44 rounded-lg bg-neutral-200 text-black flex flex-col items-center justify-center text-center hover:scale-105 transition">
            <p className="whitespace-nowrap">{item.name}</p>
            <p>
                <span>$</span>
                {item.price}
            </p>
        </div>
    );
};

export default HomeItems;
