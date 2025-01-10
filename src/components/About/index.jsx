

function About() {
    return (
        <div className="flex flex-col justify-evenly items-center gap-3 m-12 border-b border-black">
            <h2 className="bg-black text-white text-lg text-center p-3">About me:</h2>
            <div className="text-center p-3 flex flex-col gap-3">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet suscipit earum excepturi! Beatae voluptatem quidem inventore deserunt neque, ullam magnam molestias nesciunt! Cumque nisi error, iusto cupiditate similique quia adipisci!</p>
            <div>
                    <h4 className="underline">Technologies:</h4>
                <ul>
                    <li>Javascript</li>
                    <li>HTML5</li>
                    <li>CSS/Tailwind</li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default About