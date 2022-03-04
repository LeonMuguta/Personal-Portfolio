import Picture from "./Images/blank.png";

const Projects = () => {
    return (
        <div className="projectsSection" id="projectsSec">
            <h1 className="projectsHeading">Projects</h1>
            <div className="projects">
                <div className="columns">
                    <img src={Picture} alt="Projects Done" />
                    <p className="projectDescription">Enter Project description here...</p>
                </div>
                <div className="columns">
                    <img src={Picture} alt="Projects Done" />
                    <p className="projectDescription">Enter Project description here...</p>
                </div>
                <div className="columns">
                    <img src={Picture} alt="Projects Done" />
                    <p className="projectDescription">Enter Project description here...</p>
                </div>
            </div>
        </div>
        
    );
}
 
export default Projects;