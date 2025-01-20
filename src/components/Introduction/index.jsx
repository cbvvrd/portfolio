import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Introduction() {
    return (
        <div className="bg-gradient-to-b from-green-400 via-teal-400 to-teal-300 pt-10 md:py-20 md:mt-24 md:pb-20 md:my-8 md:mx-28 md:border md:border-black md:rounded-sm">
            <div className="flex flex-col flex-wrap justify-evenly items-center gap-3 m-8 font-questrial md:flex-row md:justify-center md:gap-8 ">
                <img src="images/me.jpg" alt="A picture of Charlie with a city backdrop" className="border-2 border-black rounded-md w-56"/>
                <div className="flex flex-col items-center gap-5 md:flex-row">
                    <span className="text-3xl font-marker md:text-4xl md:self-start">Hi!</span>
                    <div className="bg-black text-white text-lg text-center p-3 md:text-xl md:w-96">
                    <p>I'm Charlie, a full stack developer. My current specialisations are in React, Tailwind, Laravel and MySQL. I'm open to work and looking for dev positions in the South West.</p>
                    </div>
                </div>
                <a href="#about" className="text-2xl font-marker hover:text-white duration-200 md:text-3xl">See More <FontAwesomeIcon icon={faArrowDown} size="lg"/> </a>
            </div>
            
        </div>
    );
}

export default Introduction;