import myPicture from "./Images/tadiwa.png";

const About = () => {
    return (
        <div className="container" id="aboutSec">
            <div className="leftItem">
                <img src={myPicture} alt="Tadiwa Muguta" className="portfolioPic" />
                <hr />
                <h1 className="name">Tadiwa Leon Muguta</h1>
            </div>
            <div className="rightItem">
                <h1 className="position">Junior Web Developer</h1>
                <hr />
                <p className="description">Hey there! 👋🏾 My name's Tadiwa Leon Muguta, and I'm a junior developer.
                Focused on web development & software engineering. Currently I'm primarily focused on becoming a full-stack developer,
                as well as learning additional languages and frameworks on top of what I already know. I love to code, build applications,
                as well as learning and exploring as much as I can when it comes to topics and challenges I've never experienced before.
                I'm always trying to learn, build, grow & become better in this field every day! 👨🏾‍💻</p>

                <p className="description">My current tech stack: <b>HTML, CSS, JavaScript, Java, Python, ReactJS, NodeJS, ExpressJS & MongoDB</b></p>
            </div>
        </div>
    );
}
 
export default About;