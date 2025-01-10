import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function PortfolioGallery() {
    
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("data/portfolio.json")
        .then(res => res.json())
        .then(projectData => {
            setProjects(projectData.projects);
        });
    }, []);

    return(
        <div>
            {projects.map(project => 
                <div>
                    <h3>{project.name}</h3>
                    <img src={project.img} alt={project.alt_text}/>
                    <div>
                        <button>Info</button>
                        <a href={project.site_link} target="_blank">Live site</a>
                        <a href={project.github_link} target="_blank">Github<FontAwesomeIcon icon={faGithub} /></a>
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default PortfolioGallery;