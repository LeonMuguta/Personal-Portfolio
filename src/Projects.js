// import Picture1 from "./Images/blog-project.PNG";
// import Picture2 from "./Images/link-shortener.PNG";
// import Picture3 from "./Images/todolist.PNG";
// import Picture4 from "./Images/crudapp.PNG";

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
                                </div>
                            </div>
                            <p className="projectTitle">{project.title}</p>
                        </div>
                    )
                })}

                {/* <div className="columns">
                    <div className="project">
                        <div className="content-overlay"></div>
                        <img src={Picture1} alt="Blog Project" className="projectImage"/>
                        <div className="content-details fadeIn-top">
                            <p>This application is a blogging site, allowing users to add & delete their own custom blog entries</p>
                            <p>Stack - HTML, CSS, JavaScript & ReactJS</p>
                        </div>
                    </div>
                    <p className="projectTitle">Blog Project</p>
                </div>

                <div className="columns">
                    <div className="project">
                        <div className="content-overlay"></div>
                        <img src={Picture2} alt="Link Shortening Project" />
                        <div className="content-details fadeIn-top">
                            <p>This application can by used by users to shorten long links, for cases where they may want
                            to share a particular webpage. This was accomplished by using the bitly API.</p>
                            <p>Stack - HTML, CSS, JavaScript & ReactJS</p>
                        </div>
                    </div>
                    <p className="projectTitle">Link Shortener</p>
                </div>

                <div className="columns">
                    <div className="project">
                        <div className="content-overlay"></div>
                        <img src={Picture3} alt="To-Do List App" />
                        <div className="content-details fadeIn-top">
                            <p>This is a simple to-do list app where users can input tasks they need to complete.</p>
                            <p>Stack - HTML, CSS & JavaScript</p>
                        </div>
                    </div>
                    <p className="projectTitle">To-Do List App</p>
                </div>

                <div className="columns">
                    <div className="project">
                        <div className="content-overlay"></div>
                        <img src={Picture4} alt="CRUD App" />
                        <div className="content-details fadeIn-top">
                            <p>This is a short application where users input fruits and their weekly consumption of them.
                            Users can also delete and update their entries</p>
                            <p>Stack - HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS & MongoDB</p>
                        </div>
                    </div>
                    <p className="projectTitle">CRUD Application</p>
                </div> */}

            </div>
        </div>
        
    );
}
 
export default Projects;