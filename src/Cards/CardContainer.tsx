import { useEffect, useState } from "react";

const CardContainer = () => {
    const [movingLast, setMovingLast] = useState(false);
    const [movingList, setMovingList] = useState(false);
    const [appearFirst, setAppearFirst] = useState(true);

    const [loading, setLoading] = useState(true);

    const [imageList, setImageList] = useState([
        "HeroPic1.jpg",
        "HeroPic2.jpg",
        "HeroPic3.jpg",
        "HeroPic4.jpg",
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
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
        }, 4000); // Interval for shifting images

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <div className="relative">
            <div
                className={`fixed top-0 left-0 w-screen h-screen bg-white  ${
                    loading
                        ? "opacity-100 z-[999]"
                        : "opacity-0 invisible z-[-1]"
                } transition-all duration-1000 flex justify-center items-center`}
            >
                <h1 className="">Welcome to the future of design</h1>
            </div>

            {imageList.map((image, idx) => (
                <div
                    key={idx}
                    className={`${
                        idx == 0 &&
                        (appearFirst
                            ? "opacity-100 transition-all duration-500"
                            : "opacity-0")
                    } ${
                        movingList &&
                        idx !== imageList.length - 1 &&
                        "translate-x-4 translate-y-4 transition-all duration-500"
                    } ${
                        movingLast &&
                        idx == imageList.length - 1 &&
                        "translate-y-12 opacity-0 transition-all duration-500"
                    }`}
                    style={{
                        position: "absolute",
                        left: `${idx}rem`,
                        top: `${idx}rem`,
                    }}
                >
                    <img
                        src={image}
                        alt={`Image ${idx}`}
                        className="w-[25rem] h-auto max-h-[600px]"
                    />
                </div>
            ))}
        </div>
    );
};

export default CardContainer;
