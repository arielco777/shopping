import { useEffect, useState } from "react";
import "./CardStyle.css";

const CardContainer = () => {
    const [movingLast, setMovingLast] = useState(false);
    const [movingList, setMovingList] = useState(false);
    const [appearFirst, setAppearFirst] = useState(true);

    const [imageList, setImageList] = useState([
        "HeroPic1.jpg",
        "HeroPic2.jpg",
        "HeroPic3.jpg",
        "HeroPic4.jpg",
    ]);

    let interval;

    //Animation interval
    useEffect(() => {
        animationInterval();
        return () => clearInterval(interval);
    }, []);

    const animationInterval = () => {
        interval = setInterval(() => {
            setMovingLast(true);

            setTimeout(() => {
                setMovingList(true);
            }, 200);

            setTimeout(() => {
                setAppearFirst(false);
                setImageList((prevList) => {
                    const copy = [...prevList];
                    const poppedImage = copy.pop();
                    copy.unshift(poppedImage);
                    return copy;
                });
                setMovingList((prev) => !prev);
                setMovingLast((prev) => !prev);
                setTimeout(() => setAppearFirst((prev) => !prev), 10);
            }, 700);
        }, 4000);
    };

    return (
        <div className="relative w-full h-full">
            {imageList.map((image, idx: number) => (
                <div
                    key={idx}
                    className={`cards w-full ${
                        idx == 0 &&
                        (appearFirst
                            ? "lg:opacity-100 transition-all duration-500"
                            : "lg:opacity-0")
                    } ${
                        movingList &&
                        idx !== imageList.length - 1 &&
                        "lg:translate-x-4 lg:translate-y-4 transition-all duration-500"
                    } ${
                        movingLast &&
                        idx == imageList.length - 1 &&
                        "translate-y-12 opacity-0 transition-all duration-500"
                    } absolute flex justify-center h-full lg:h-max`}
                    style={{
                        left: window.innerWidth > 1024 ? `${idx}rem` : 0,
                        top: window.innerWidth > 1024 ? `${idx}rem` : 0,
                    }}
                >
                    <img
                        src={image}
                        alt={`Image ${idx}`}
                        className="w-[25rem] h-auto max-h-[600px] lg:rounded-lg lg:m-2"
                    />
                </div>
            ))}
        </div>
    );
};

export default CardContainer;
