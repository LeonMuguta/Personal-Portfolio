import collection from "./Collection";


const Projects = () => {
    return (
        <div className="projectsSection" id="projectsSec">
            <h1 className="projectsHeading">Projects</h1>
            <div className="projects">

                {collection.map(project => {
                    return (
                        <div className="columns" key={project.id}>
                            <div className="project">
                                <div className="content-overlay"></div>
                                <img src={project.picture} alt="Blog Project" className="projectImage"/>
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
        </div>
        
    );
}
 
export default Projects;