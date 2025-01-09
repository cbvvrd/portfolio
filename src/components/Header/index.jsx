import { useState } from "react"

function Header() {

    const [hiddenLinks, setHiddenLinks] = useState(true);

    function toggleMenu() {
        hiddenLinks ? setHiddenLinks(false) : setHiddenLinks(true);
    }

    return (
        <header className="bg-sky-300 p-1 border-b border-black flex flex-col items-center">
            <h1 className="text-3xl p-1 text-wrap">Charlie Bird - Developer</h1>
            <button onClick={toggleMenu} className="bg-black text-white rounded-md p-1">Menu</button>
            <nav className={hiddenLinks ? "hidden " : "flex flex-row gap-2 text-lg"} >
                <a href="#about" className="border-b-2 border-black hover:text-xl hover:border-b-4 ease-linear duration-100">About</a>
                <a href="#portfolio" className="border-b-2 border-black hover:text-xl hover:border-b-4 ease-linear duration-100">Portfolio</a>
                <a href="#contact" className="border-b-2 border-black hover:text-xl hover:border-b-4 ease-linear duration-100">Contact</a>
            </nav>
        </header>
    );
}
 
export default Header