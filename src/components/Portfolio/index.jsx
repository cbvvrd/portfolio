import PortfolioGallery from "../PortfolioGallery";


function Portfolio() {
    return (
        <div id="portfolio" className="flex flex-col justify-evenly items-center gap-3 mx-5 my-6 border-b border-black font-questrial">
            <h2 className="bg-black text-white text-2xl text-center p-3">Portfolio:</h2>
            <p className="text-center">Below are some projects I have worked on.</p>
            <PortfolioGallery />
        </div>
        
    );
}

export default Portfolio;