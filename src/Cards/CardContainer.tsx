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
            }, 1000);
        }, 5000);
    };

    return (
        <div className="relative h-ful w-full lg:w-full">
            {imageList.map((image, idx: number) => (
                <div
                    key={idx}
                    className={`cards w-full lg:w-max ${
                        idx == 0 &&
                        (appearFirst
                            ? "lg:opacity-100 transition-all duration-1000"
                            : "lg:opacity-0")
                    } ${
                        movingList &&
                        idx !== imageList.length - 1 &&
                        "lg:translate-x-4 lg:translate-y-4 transition-all duration-1000"
                    } ${
                        movingLast &&
                        idx == imageList.length - 1 &&
                        "translate-y-12 opacity-0 transition-all duration-1000"
                    } absolute flex justify-center h-full lg:h-max lg:shadow-[0_35px_30px_15px_rgba(0,0,0,0.3)]`}
                    style={{
                        left: window.innerWidth > 1024 ? `${idx}rem` : "0",
                        top: window.innerWidth > 1024 ? `${idx}rem` : 0,
                    }}
                >
                    <img
                        src={image}
                        alt={`Image ${idx}`}
                        className="min-w-[25rem] max-w-[25rem] lg:w-[25rem] h-auto lg:h-[600px] lg:rounded-lg "
                    />
                </div>
            ))}
        </div>
    );
};

export default CardContainer;
