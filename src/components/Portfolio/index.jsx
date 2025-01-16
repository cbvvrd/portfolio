import PortfolioGallery from "../PortfolioGallery";


function Portfolio() {
    return (
        <div id="portfolio" className="flex flex-col justify-evenly items-center gap-4 mx-5 border-b py-5 scroll-mt-20 border-black font-questrial">
            <h2 className="bg-black text-white text-2xl text-center p-3">Portfolio:</h2>
            <p className="text-center">These are some projects I have worked on:</p>
            <PortfolioGallery />
        </div>
        
    );
}

export default Portfolio;