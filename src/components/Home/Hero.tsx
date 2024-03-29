import CardContainer from "../../Cards/CardContainer";
import "./HeroStyle.css";

const Hero = () => {
    return (
        <div className="lg:h-[40rem] h-[37rem] lg:pt-[6.8rem] w-full lg:bg-white flex justify-around items-start relative lg:pl-20 md:px-10 px-0">
            <div className="relative w-full lg:w-[30rem] h-full transition">
                <CardContainer />
            </div>
            <div className="h-full logo-container flex justify-center lg:justify-normal w-full lg:w-max absolute lg:static left-0 top-0 text-3xl lg:text-6xl text-white lg:text-black">
                <div
                    className="logos lg:w-max relative lg:h-full m-0 overflow-y-hidden"
                    style={{}}
                >
                    <div className="logos-slide text-right">
                        <p>Define </p>
                        <p>Encapsulate</p>
                        <p>Jetset</p>
                        <p>You are</p>
                        <p>Feel the</p>
                        <p>Expand</p>
                        <p>Design</p>
                        <p>Get with</p>
                    </div>
                    <div className="logos-slide text-right">
                        <p>Define</p>
                        <p>Encapsulate</p>
                        <p>Jetset</p>
                        <p>You are</p>
                        <p>Feel the</p>
                        <p>Expand</p>
                        <p>Design</p>
                        <p>Get with</p>
                    </div>

                    <div className="absolute hidden lg:block top-0 right-0 w-full h-32 bg-gradient-to-t from-transparent to-white"></div>
                    <div className="absolute hidden lg:block bottom-0 right-0 w-full h-32 bg-gradient-to-b from-transparent to-white"></div>
                </div>
                <span className="absolute bottom-10 right-0 lg:static my-auto ml-2 bg-black lg:bg-white pl-2 pr-1 tracking-widest font-bold">
                    style
                </span>
            </div>
        </div>
    );
};

export default Hero;
