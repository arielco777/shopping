import CardContainer from "../../../Cards/CardContainer";
import "./HeroStyle.css";

const Hero = () => {
    return (
        <div className="relative w-full lg:h-[40rem] h-[37rem] lg:pt-[6.5rem] lg:bg-white flex justify-around items-start xl:px-40 px-0">
            <div className="lg:relative w-full lg:w-[30rem] h-full transition flex justify-center lg:mt-3">
                <CardContainer />
            </div>
            <div className="h-full w-full logo-container flex justify-center lg:justify-normal lg:w-max absolute lg:static lg:translate-x-0 lg:left-0 top-0 text-3xl lg:text-6xl text-white lg:text-black">
                <div className="w-full lg:flex">
                    <div className="logos w-max relative lg:h-full mt-16 lg:m-0 overflow-y-hidden flex lg:block">
                        <div className="logos-slide text-right w-full lg:w-max flex lg:flex-col">
                            <p>Define </p>
                            <p>Encapsulate</p>
                            <p>Jetset</p>
                            <p>You are</p>
                            <p>Feel the</p>
                            <p>Expand</p>
                            <p>Design</p>
                            <p>Get with</p>
                        </div>
                        <div className="logos-slide text-right w-full lg:w-max flex lg:flex-col">
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
                    <span className="text-start lg:static my-auto ml-2 bg-black lg:bg-white pl-2 pr-1 tracking-widest font-bold">
                        style
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
