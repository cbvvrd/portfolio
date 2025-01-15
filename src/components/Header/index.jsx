import { faBars, faCircleXmark, faRectangleXmark, faSquareXmark, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"


function Header() {

    const [hiddenLinks, setHiddenLinks] = useState(true);

    function toggleMenu() {
        setHiddenLinks(prev => !prev);
    }

    return (
        <header className="bg-white p-2 border-b border-black font-questrial fixed top-0 left-0 right-0">
            <div className="flex gap-4 px-4 items-center">
                <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className={hiddenLinks ? "text-xl md:text-2xl" : "rotate-90 text-xl md:text-2xl"}/>
                <h1 className="text-lg font-semibold text-center md:text-2xl">Charlie Bird - Software Developer</h1>
            </div>
            <nav className={hiddenLinks ? "hidden" : "flex flex-row justify-center gap-4 px-4 md:pt-1 md:justify-normal md:text-xl"}>
                <a href="#about" className="underline underline-offset-2 hover:font-semibold hover:underline-offset-8 ease-linear duration-100">About</a>
                <a href="#portfolio" className="underline underline-offset-2 hover:font-semibold hover:underline-offset-8 ease-linear duration-100">Portfolio</a>
                <a href="#contact" className="underline underline-offset-2 hover:font-semibold hover:underline-offset-8 ease-linear duration-100">Contact</a>
            </nav>
        </header>
    );
}
 
export default Header;