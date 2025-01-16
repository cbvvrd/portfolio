import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Introduction() {
    return (
        <div className="bg-gradient-to-b from-green-400 via-teal-400 to-teal-300 pt-10">
            <div className="flex flex-col justify-evenly items-center gap-3 m-8 font-questrial md:flex-row">
                <img src="images/me.jpg" alt="A picture of Charlie with a city backdrop" className="border-2 border-black rounded-md w-56"/>
                <div className="flex flex-col items-center gap-5">
                    <span className="text-3xl font-marker md:text-4xl">Hi!</span>
                    <p className="bg-black text-white text-lg text-center p-3 md:text-xl">I'm Charlie, a full stack developer. My current specialisations are in React, Tailwind, Laravel and MySQL.</p>
                    <a href="#about" className="text-2xl font-marker md:text-3xl">See More <FontAwesomeIcon icon={faArrowDown} size="lg"/> </a>
                </div>
            </div>
        </div>
    );
}

export default Introduction;