import DesktopNav from "./Desktop/DesktopNav";
import MobileNav from "./Mobile/MobileNav";

const NavBar: React.FC<{}> = () => {
    return (
        <nav className="fixed z-50 lg:w-full lg:border-b lg:py-10 top-0 left-0 text-white lg:bg-black">
            <DesktopNav />
            <MobileNav />
        </nav>
    );
};

export default NavBar;
