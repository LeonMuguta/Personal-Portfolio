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
                    <div className="project">
                        <div className="content-overlay"></div>
                        <img src={Picture1} alt="Blog Project" className="projectImage"/>
                        <div className="content-details fadeIn-top">
                            <p>This is a short description</p>
                        </div>
                    </div>
                    <p className="projectTitle">Blog Project</p>
                </div>

                <div className="columns">
                    <div className="project">
                        <div className="content-overlay"></div>
                        <img src={Picture2} alt="Link Shortening Project" />
                        <div className="content-details fadeIn-top">
                            <p>This is a short description</p>
                        </div>
                    </div>
                    <p className="projectTitle">Link Shortener</p>
                </div>

                <div className="columns">
                    <div className="project">
                        <div className="content-overlay"></div>
                        <img src={Picture3} alt="To-Do List App" />
                        <div className="content-details fadeIn-top">
                            <p>This is a short description</p>
                        </div>
                    </div>
                    <p className="projectTitle">To-Do List App</p>
                </div>

                <div className="columns">
                    <div className="project">
                        <div className="content-overlay"></div>
                        <img src={Picture4} alt="CRUD App" />
                        <div className="content-details fadeIn-top">
                            <p>This is a short description</p>
                        </div>
                    </div>
                    <p className="projectTitle">CRUD Application</p>
                </div>

                {/* <div className="columns">
                    <img src={Picture2} alt="Link Shortening Project" />
                    <p className="projectDescription">Enter Project description here...</p>
                </div>
                <div className="columns">
                    <img src={Picture3} alt="To-Do List App" />
                    <p className="projectDescription">Enter Project description here...</p>
                </div>
                <div className="columns">
                    <img src={Picture4} alt="CRUD App" />
                    <p className="projectDescription">Enter Project description here...</p>
                </div> */}
            </div>
        </div>
        
    );
}
 
export default Projects;