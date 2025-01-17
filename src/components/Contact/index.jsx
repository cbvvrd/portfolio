import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return(
        <div id="contact" className="flex flex-col justify-evenly items-center gap-5 mx-12 my-5 pt-5 font-questrial md:py-8 md:text-lg md:mx-28">
            <div className="flex flex-col justify-evenly items-center gap-5 ">
                <h2 className="bg-black text-white text-2xl text-center p-3">Contact:</h2>
                <p className="text-center">If you like what you see or have any questions please feel free to contact me. I can be reached using any of the below methods.</p>
            </div>
            <div className="flex flex-col gap-2 underline underline-offset-4">
                <a href="#">Email @ <FontAwesomeIcon icon={faEnvelope}/></a>
                <a href="https://www.linkedin.com/in/charlie-bird-894388338/" target="_blank">Linkedin: <FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="https://github.com/cbvvrd" target="_blank">Github: <FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <span className="text-3xl font-marker py-2">Get in touch!</span>
        </div>
    )
}

export default Contact