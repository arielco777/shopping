import CardContainer from "../../Cards/CardContainer";
import "./HeroStyle.css";

const Hero = () => {
    return (
        <div className="h-[40rem] w-full px-96 bg-white flex justify-between items-start">
            <div className="relative w-[30rem] h-full transition">
                {/* <img
                    className="w-full h-auto border-2 border-neutral-900 hover:scale-105 transition"
                    src="HeroPic1.jpg"
                /> */}
                <CardContainer />
            </div>
            <div className="h-full logo-container flex overflow-y-hidden ">
                <div className="logos w-max relative text-6xl items-center h-full m-0 ">
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
                    <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-t from-transparent to-white"></div>
                    <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-b from-transparent to-white"></div>
                </div>
                <span className="my-auto text-6xl ml-2">style</span>
            </div>
            {/* <img className="w-1/4 h-auto" src="HeroPic2.jpg" /> */}
        </div>
    );
};

export default Hero;
