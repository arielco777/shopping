import { ArrowDown } from "lucide-react";
import Hero from "../components/Home/Hero";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { articles } from "../components/Home/articlesList";
import HomeItems from "../components/Home/Items";

const Home: React.FC<{}> = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.3, 0]);
    const translateX = useTransform(
        scrollYProgress,
        [0.3, 0.5],
        ["-100%", "50%"]
    );

    const popCatDiv =
        "rounded-lg relative h-72 lg:h-[30rem] w-[calc(50%-2.5rem)] lg:w-1/5 flex flex-col justify-end hover:scale-105 transition cursor-pointer";

    const popCatImg = "w-full h-full object-cover rounded-lg";

    return (
        <div className="h-full w-full bg-black overflow-hidden">
            <Hero />
            <motion.div
                ref={ref}
                style={{
                    position: "relative",
                    width: "100%",
                    height: 200,
                    opacity,
                }}
                className="lg:mt-16 mb-32 lg:mb-60"
            >
                <motion.p
                    className="w-full absolute text-white text-4xl font-bold whitespace-nowrap top-10 lg:top-40 flex items-center justify-center "
                    animate={{ y: ["0%", "50%", "0%"] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <ArrowDown className="text-white" size={40} />
                </motion.p>
            </motion.div>

            <section className="relative lg:w-[calc(100%-20rem)] mx-auto pt-10">
                <motion.h3
                    className="absolute w-full -top-10 -left-1/2 bg-red-10 text-center text-2xl uppercase tracking-widest"
                    style={{
                        color: "white",
                        translateX,
                    }}
                >
                    New Items
                </motion.h3>
                <div className="flex gap-10 items-center overflow-auto h-full py-2 px-14">
                    {articles.map((item, idx: number) => (
                        <HomeItems key={idx} item={item} />
                    ))}
                    <div className="absolute left-0 w-16 h-full bg-gradient-to-l from-transparent to-black"></div>
                    <div className="absolute right-0 w-16 h-full bg-gradient-to-r from-transparent to-black"></div>
                </div>
            </section>

            <section className="mt-20 pb-20">
                <h3>Popular categories</h3>
                <div className="flex flex-wrap gap-5 lg:gap-10 items-center justify-center pb-10">
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
