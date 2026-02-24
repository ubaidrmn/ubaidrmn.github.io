import Button from "../../Button";
import Tags from "../../Tags";
import type { Project } from "../types";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectBox({ project }: { project: Project }) {
    return (
        <div className="project-box">
            <img src={project.imageUrl} alt={project.title} />
            <div className="content">
                <div>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <Tags tags={project.tags} />
                </div>
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <Button>
                        View Project <FaExternalLinkAlt style={{ marginLeft: "5px", fontSize: "13px", marginBottom: "-1px"}} />
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default ProjectBox;
