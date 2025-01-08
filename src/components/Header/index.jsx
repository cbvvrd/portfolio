

function Header() {
    return (
        <header className="bg-sky-300 p-1 border-b border-black flex flex-col items-center">
            <h1 className="text-3xl p-1 text-wrap">Charlie Bird - Developer</h1>
            <button className="bg-black text-white rounded-md p-1">Menu</button>
            <nav className="flex flex-row gap-2 text-lg">
                <a href="#about" className="border-b-2 border-black">About</a>
                <a href="#portfolio" className="border-b-2 border-black">Portfolio</a>
                <a href="#contact" className="border-b-2 border-black">Contact</a>
            </nav>
        </header>
    )
}
 
export default Header