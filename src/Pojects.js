import Picture1 from "./Images/blog-project.PNG";
import Picture2 from "./Images/link-shortener.PNG";
import Picture3 from "./Images/todolist.PNG";
import Picture4 from "./Images/crudapp.PNG";


const Projects = () => {
    return (
        <div className="projectsSection" id="projectsSec">
            <h1 className="projectsHeading">Projects</h1>
            <div className="projects">
                <div className="columns">
                    <img src={Picture1} alt="Projects Done" />
                    <p className="projectDescription">Enter Project description here...</p>
                </div>
                <div className="columns">
                    <img src={Picture2} alt="Projects Done" />
                    <p className="projectDescription">Enter Project description here...</p>
                </div>
                <div className="columns">
                    <img src={Picture3} alt="Projects Done" />
                    <p className="projectDescription">Enter Project description here...</p>
                </div>
                <div className="columns">
                    <img src={Picture4} alt="Projects Done" />
                    <p className="projectDescription">Enter Project description here...</p>
                </div>
            </div>
        </div>
        
    );
}
 
export default Projects;