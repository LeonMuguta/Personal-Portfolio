import collection from "./Collection";
import mobileDev from "./MobileDevCollection";


const Projects = () => {
    return (
        <div className="projectsSection" id="projectsSec">
            <h1 className="projectsHeading">Web Development</h1>
            <div className="projects">

                {collection.map(project => {
                    return (
                        <div className="columns" key={project.id}>
                            <div className="project">
                                <div className="content-overlay"></div>
                                <img src={project.picture} alt={project.title} className="projectImage"/>
                                <div className="content-details fadeIn-top">
                                    <p>{project.description}</p>
                                    <p>{project.stack}</p>
                                    <p>Click on the title below to access project files</p>
                                </div>
                            </div>
                            <p className="projectTitle"><a href={project.link} target="_blank" rel="noreferrer">{project.title}</a></p>
                        </div>
                    )
                })}

            </div>

            <h1 className="mobProjectsHeading">Mobile App Development</h1>
            <div className="projects">

                {mobileDev.map(mobileProject => {
                    return (
                        <div className="mobColumns" key={mobileProject.id}>
                            <div className="project" >
                                <div className="mobContent-overlay"></div>
                                <img src={mobileProject.picture} alt={mobileProject.title} className="projectImage"/>
                                <div className="mobContent-details fadeIn-top">
                                    <p>{mobileProject.description}</p>
                                    <p>{mobileProject.stack}</p>
                                    <p>Click on the title below to access project files</p>
                                </div>
                            </div>
                            <p className="projectTitle"><a href={mobileProject.link} target="_blank" rel="noreferrer">{mobileProject.title}</a></p>
                        </div>
                    )
                })}

            </div>
        </div>
        
    );
}
 
export default Projects;