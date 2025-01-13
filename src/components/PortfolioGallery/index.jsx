import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import PortfolioModal from "../PortfolioModal";

function PortfolioGallery() {
    
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("data/portfolio.json")
        .then(res => res.json())
        .then(projectData => {
            setProjects(projectData.projects);
        });
    }, []);

    const [modal, setModal] = useState(false);

    const [project_id, setProject_id] = useState(0);

    function toggleModal() {
        setModal(!modal);
        console.log("Box is " + modal);
    }

    // console.log(projects[1]["name"]);
    // useEffect(toggleDialog, []);

    return(
        <div className="flex flex-col m-auto mb-6 gap-5">
            {/* <p>{projects[1]["name"]}</p> */}
            {projects.map(project => 
                <div className="bg-sky-100 py-3 px-5 border border-black rounded-sm">
                    <h3 className="p-1 text-xl font-bold">{project.name}</h3>
                    <img src={project.img} alt={project.alt_text}/>
                    <div className="flex justify-between p-2">
                        <button onClick={() => {toggleModal(); setProject_id(project.id)}} className="bg-slate-50 border border-black px-2 rounded">Info</button>
                        <a href={project.site_link} target="_blank">Live site</a>
                        <a href={project.github_link} target="_blank">Github<FontAwesomeIcon icon={faGithub} /></a>
                        
                    </div>
                </div>
            )}
            {modal && 
                <div onClick={toggleModal} className="modal-backdrop fixed top-0 left-0 right-0 w-full h-full bg-gray-400/25">
                    <div className="modal-content fixed top-10 left-10 right-10 bg-red-500">
                        <p>Hello</p>
                        <p>Is this a box yet?</p>
                        <PortfolioModal project_id={project_id}/>
                    </div>
                </div>
            }
        </div>
    );
}

export default PortfolioGallery;