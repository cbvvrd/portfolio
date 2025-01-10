import PortfolioGallery from "../PortfolioGallery";


function Portfolio() {
    return (
        <div className="flex flex-col justify-evenly items-center gap-3 mx-12 my-6 border-b border-black font-questrial">
            <h2 className="bg-black text-white text-2xl text-center p-3">Portfolio:</h2>
            <p>Below are some projects I have worked on.</p>
            <PortfolioGallery />
        </div>
        
    );
}

export default Portfolio;