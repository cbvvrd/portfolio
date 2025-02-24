import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import PortfolioModal from "../PortfolioModal";

function PortfolioGallery() {
    
    const [projects, setProjects] = useState([]);
    const [project_id, setProject_id] = useState(0);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetch("data/portfolio.json")
        .then(res => res.json())
        .then(projectData => {
            setProjects(projectData.projects);
        });
    }, []);
  
    function toggleModal() {
        setModal(!modal);
    }

    return (
        <div className="flex flex-col m-auto mb-6 gap-5 md:flex-row md:gap-8">
            {projects.map(project =>
                <div key={project.id} className="bg-gradient-to-b from-green-400 to-teal-300 py-3 px-5 border border-black rounded-lg">
                    <h3 className="p-1 text-xl font-bold">{project.name} - <em className="text-rose-700">{project.techs}</em></h3>
                    <img src={project.img} alt={project.alt_text} onClick={() => {toggleModal(); setProject_id(project.id)}} className="border border-black rounded-sm" />
                    <div className="flex justify-between p-2">
                        <button onClick={() => {toggleModal(); setProject_id(project.id)}} className="bg-black text-white border border-black px-2 rounded hover:bg-white hover:text-black duration-100">More info</button>
                        <a href={project.site_link} target="_blank" className="underline underline-offset-4 hover:font-semibold hover:underline-offset-8 duration-100">Live site</a>
                        <a href={project.github_link} target="_blank" className="underline underline-offset-4 hover:font-semibold hover:underline-offset-8 duration-100">Github <FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
            )}
            {modal && 
                <div onClick={toggleModal} className="modal-backdrop fixed top-0 left-0 right-0 w-full h-full bg-gray-400/25 backdrop-blur-sm">
                    <div onClick={e => e.stopPropagation()} >
                        <PortfolioModal
                            image={projects[project_id-1]["img"]}
                            alt={projects[project_id-1]["alt_text"]}
                            info={projects[project_id-1]["info"]}
                            site={projects[project_id-1]["site_link"]}
                            github={projects[project_id-1]["github_link"]}
                        />
                    </div>
                </div>
            }
        </div>
    );
}

export default PortfolioGallery;