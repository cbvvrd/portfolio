import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function PortfolioModal({image, alt, info, site, github}) {
    return(
        <div className="fixed top-20 left-10 right-10 px-5 py-4 flex flex-col gap-3 bg-sky-200 border border-black drop-shadow-lg">
            <img src={image} alt={alt}/>
            <p className="text-center">{info}</p>
            <div className="flex gap-8 justify-center underline underline-offset-4">
                <a href={site} target="_blank">Live site</a>
                <a href={github} target="_blank">Github <FontAwesomeIcon icon={faGithub}/></a>
            </div>
        </div>
    )
}

export default PortfolioModal;