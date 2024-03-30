import { ArrowDown } from "lucide-react";
import Hero from "../components/Home/Hero/Hero";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import NewItems from "../components/Home/NewItems/NewItems";

const Home: React.FC<{}> = () => {
    const mainRef = useRef<HTMLDivElement>(null);
    const otherRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: mainRef,
        offset: ["end end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.3, 0]);
    const translateXDesktop = useTransform(
        scrollYProgress,
        [0, 0.5],
        ["-100%", "0%"]
    );
    const translateXMobile = useTransform(
        scrollYProgress,
        [0, 0.5],
        ["-100%", "0%"]
    );

    const translateXDesktopPop = useTransform(
        scrollYProgress,
        [0.3, 0.8],
        ["-100%", "0%"]
    );
    const translateXMobilePop = useTransform(
        scrollYProgress,
        [0.3, 0.8],
        ["-100%", "0%"]
    );

    const top = useTransform(scrollYProgress, [0, 0.7], ["50vh", "1.5rem"]);

    const popCatDiv =
        "rounded-lg relative h-72 lg:h-[30rem] w-[calc(50%-2.5rem)] lg:w-1/5 flex flex-col justify-end hover:scale-105 transition cursor-pointer";

    const popCatImg = "w-full h-full object-cover rounded-lg";

    return (
        <div className="relative h-full w-full bg-black overflow-hidden">
            <Hero />
            <motion.div
                ref={mainRef}
                style={{
                    width: "100%",
                    height: 200,
                    opacity,
                }}
                className="lg:relative lg:mt-16 lg:mb-32"
            >
                <motion.p
                    className="w-full absolute text-white text-4xl font-bold whitespace-nowrap top-[70vh] lg:top-40 flex items-center justify-center "
                    animate={{ y: ["0%", "50%", "0%"] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <ArrowDown className="text-white bg-black" size={40} />
                </motion.p>
            </motion.div>
            <motion.p
                style={{
                    top,
                    zIndex: 1000,
                }}
                className="hidden bg-black fixed right lg:block text-white text-center float-right pr-50 text-5xl right-40"
            >
                Bring it with you
            </motion.p>

            <section className="relative lg:w-[calc(100%-20rem)] mx-auto">
                <motion.h3
                    className="w-full text-center text-2xl uppercase tracking-widest"
                    style={{
                        color: "white",
                        translateX:
                            window.innerWidth < 1024
                                ? translateXMobile
                                : translateXDesktop,
                    }}
                >
                    New Items
                </motion.h3>
                <NewItems />
            </section>

            <section className="relative mt-32 pb-20" ref={otherRef}>
                <motion.h3
                    className="w-full bg-red-10 text-center text-2xl uppercase tracking-widest"
                    style={{
                        color: "white",
                        translateX:
                            window.innerWidth < 1024
                                ? translateXMobilePop
                                : translateXDesktopPop,
                    }}
                >
                    Popular categories
                </motion.h3>
                <div className="flex flex-wrap gap-5 lg:gap-10 items-center justify-center py-10">
                    <div className={popCatDiv}>
                        <img
                            src="homeItems/NewArrival.jpg"
                            className={popCatImg}
                        />
                        <div className="absolute text-white px-3 pb-2">
                            <p className="font-bold">New Arrivals</p>
                            <p className="lg:block hidden">
                                Redefine style with these new pieces
                            </p>
                        </div>
                    </div>
                    <div className={popCatDiv}>
                        <img
                            src="homeItems/WomanSport.jpg"
                            className={`${popCatImg} object-right`}
                        />
                        <div className="absolute text-white px-3 pb-2">
                            <p className="font-bold">Women's Sports</p>
                            <p className="lg:block hidden">
                                Prove yourself to yourself with the best
                            </p>
                        </div>
                    </div>
                    <div className={popCatDiv}>
                        <img src="homeItems/ManTop.jpg" className={popCatImg} />
                        <div className="absolute text-white px-3 pb-2">
                            <p className="font-bold">Men's Tops</p>
                            <p className="lg:block hidden w-fit">
                                Be on top of it all
                            </p>
                        </div>
                    </div>
                    <div className={popCatDiv}>
                        <img
                            src="homeItems/ManSuit.jpg"
                            className={popCatImg}
                        />
                        <div className="absolute text-white px-3 pb-2">
                            <p className="font-bold">Men's Suits</p>
                            <p className="lg:block hidden">
                                Dapper doesn't need to be difficult
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
