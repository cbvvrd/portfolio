import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function PortfolioModal({image, alt, info, site, github}) {
    return(
        <div className="fixed top-24 left-10 right-10 px-5 py-4 flex flex-col gap-3 bg-sky-200 border border-black rounded-lg drop-shadow-lg md:w-1/2 md:inset-x-1/4 md:text-lg">
            <img src={image} alt={alt} />
            <p className="text-center">{info}</p>
            <div className="flex gap-8 justify-center">
                <a href={site} target="_blank" className="underline underline-offset-4 hover:font-semibold hover:underline-offset-8 duration-100">Live site</a>
                <a href={github} target="_blank" className="underline underline-offset-4 hover:font-semibold hover:underline-offset-8 duration-100">Github <FontAwesomeIcon icon={faGithub}/></a>
            </div>
        </div>
    )
}

export default PortfolioModal;