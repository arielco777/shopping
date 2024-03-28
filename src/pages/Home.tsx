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

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

    return (
        <section className="h-full w-full bg-black overflow-hidden pb-20">
            <Hero />
            <motion.div
                ref={ref}
                style={{
                    position: "relative",
                    width: "100%",
                    height: 100,
                    opacity,
                    marginBottom: "10rem",
                }}
            >
                <motion.p
                    className="w-full absolute text-white text-4xl font-bold whitespace-nowrap top-32 flex items-center justify-center "
                    animate={{ y: ["0%", "50%", "0%"] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <ArrowDown className="text-white" />
                    New Items
                    <ArrowDown className="text-white" />
                </motion.p>
            </motion.div>
            <div className="h-96 w-[calc(100%-20rem)] mx-auto flex gap-10 items-center overflow-auto whitespace-nowrap">
                {articles.map((item, idx: number) => (
                    <HomeItems key={idx} item={item} />
                ))}
            </div>
            <motion.div>
                <div>
                    <p>Popular categories</p>
                    <div className="flex gap-10 items-center justify-center pb-10">
                        <div className="h-[30rem] w-1/5 bg-neutral-200 flex flex-col justify-end hover:scale-105 transition">
                            <p>New Arrivals</p>
                            <p>Redefine style with these new pieces</p>
                        </div>
                        <div className="h-[30rem] w-1/5 bg-neutral-200 flex flex-col justify-end hover:scale-105 transition">
                            {" "}
                            <p>Women's Sports</p>
                            <p>
                                Prove yourself to yourself with the best of the
                                best.
                            </p>
                        </div>
                        <div className="h-[30rem] w-1/5 bg-neutral-200 flex flex-col justify-end hover:scale-105 transition">
                            {" "}
                            <p>Kid's Tops</p>
                            <p>
                                You're small but the world is smaller than you.
                            </p>
                        </div>
                        <div className="h-[30rem] w-1/5 bg-neutral-200 flex flex-col justify-end hover:scale-105 transition">
                            {" "}
                            <p>Men's Suits</p>
                            <p>Dapper doesn't need to be difficult</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;
