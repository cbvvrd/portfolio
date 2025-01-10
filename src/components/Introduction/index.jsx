import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Introduction() {
    return (
        <div className="bg-gradient-to-b from-green-400 to-teal-300">
            <div className="flex flex-col justify-evenly items-center gap-3 m-8">
                <img src="images/me.jpg" alt="A picture of Charlie with a city backdrop" className="border-2 border-black rounded-md"/>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl font-semibold">Hi!</span>
                    <p className="bg-black text-white text-lg text-center p-3">I'm Charlie, a junior web developer. I am currently specialising in React, Tailwind and PHP.</p>
                    <p className="text-xl font-semibold">See More <FontAwesomeIcon icon={faArrowDown} size="lg"/></p>
                </div>
            </div>
        </div>
    );
}

export default Introduction;