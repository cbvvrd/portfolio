import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function PortfolioModal({image, alt, info, site, github}) {
    return(
        <div>
            <img src={image} alt={alt}/>
            <p>{info}</p>
            <a href={site}>Live site</a>
            <a href={github}>Github <FontAwesomeIcon icon={faGithub}/></a>
        </div>
    )
}

export default PortfolioModal;