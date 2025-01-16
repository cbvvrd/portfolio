

function About() {
    return (
        <div id="about" className="flex flex-col justify-evenly items-center gap-3 mx-12 my-6 border-b py-5 scroll-mt-20 border-black font-questrial">
            <h2 className="bg-black text-white text-2xl text-center p-3">About me:</h2>
            <div className="text-center p-3 flex flex-col gap-3">
                <p>I'm a software developer currently focusing on full-stack web applications.</p>
                <p>I'm eager to keep improving my knowledge and learn new technologies, which is partly what attracted me to this field in the first place.</p>
                <p>In December 2024 I completed a software development course with iO Academy. This gave me valuable experience working as part of a team and collaborating on projects with Git. </p>
                <p>Currently I'm building a web page for a client who is a  self-employed contracter, as a way to reinforce my skills and use them in a real-world situation.</p>
            <div>
                    <h4 className="underline text-xl pt-3 pb-1">Technologies:</h4>
                <ul className="flex flex-col gap-1">
                    <li className="flex gap-1 justify-center">React 
                        <img src="images/react.png" className="h-5 self-center" />
                    </li>
                    <li className="flex gap-1 justify-center">Tailwind 
                        <img src="images/tailwind.svg" className="w-5"/>
                    </li>
                    <li className="flex gap-1 justify-center">Laravel
                        <img src="images/laravel.png" className="h-5 self-center"/>
                    </li>
                    <li className="flex gap-1 justify-center">PHP
                        <img src="images/php.png" className="h-5 self-center"/>
                    </li>      
                    <li className="flex gap-1 justify-center">MySQL
                        <img src="images/mysql.png" className="h-6 self-center"/>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default About