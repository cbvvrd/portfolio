import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return(
        <div id="contact" className="flex flex-col justify-evenly items-center gap-3 mx-12 my-6 border-b border-black font-questrial">
            <div className="flex flex-col justify-evenly items-center gap-3">
                <h2 className="bg-black text-white text-2xl text-center p-3">Contact:</h2>
                <p className="text-center">If you like what you see or have any questions please feel free to contact me. I can be reached using any of the below methods.</p>
            </div>
            <div className="flex flex-col gap-2 underline underline-offset-4">
                <a href="#">Email@ <FontAwesomeIcon icon={faEnvelope}/></a>
                <a href="#">Linkedin: <FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="#">Github: <FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <span className="text-3xl font-marker">Get in touch!</span>
        </div>
    )
}

export default Contact