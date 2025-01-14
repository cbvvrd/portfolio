import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"


function Header() {

    const [hiddenLinks, setHiddenLinks] = useState(true);

    function toggleMenu() {
        setHiddenLinks(prev => !prev);
    }

    return (
        <header className="bg-white p-2 border-b border-black font-questrial">
            <div className="flex items-center gap-4 px-4">
                <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className="text-2xl"/>
                <h1 className="text-lg font-semibold text-center">Charlie Bird - Software Developer</h1>
            </div>
            <nav className={hiddenLinks ? "hidden " : "flex flex-row justify-center gap-4 text-lg"} >
                <a href="#about" className="border-b-2 border-black hover:text-xl hover:border-b-4 ease-linear duration-100">About</a>
                <a href="#portfolio" className="border-b-2 border-black hover:text-xl hover:border-b-4 ease-linear duration-100">Portfolio</a>
                <a href="#contact" className="border-b-2 border-black hover:text-xl hover:border-b-4 ease-linear duration-100">Contact</a>
            </nav>
        </header>
    );
}
 
export default Header;