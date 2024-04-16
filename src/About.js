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
                <h1 className="position">Software Engineer</h1>
                <hr />
                <p className="description">An aspiring software engineer seeking employment, bringing in
                    dedication, motivation, and commitment, with solid expertise in the
                    information technology industry, mainly under Windows and Linux
                    platforms. Capable of learning and working with the latest cutting edge
                    development tools and procedures. Ability to prioritize tasks and manage
                    time effectively, ability to work under pressure. Reliable and able to work
                    on my own initiative or as part of a team, most importantly I deliver
                    high-quality services. I have a passion for programming and learning. The
                    programming languages in my studies were Python and C# but during my
                    spare time I learn languages in online courses to broaden my skills and
                    knowledge, also depending on the type of project I’m dealing with. I am
                    proficient with my work and I'm always eager and willing to learn
                    anything new taught to me if given the opportunity. 👨🏾‍💻
                </p>

                {/* <p className="description">My current tech stack: <b>HTML, CSS, JavaScript, Java, Python, ReactJS, NodeJS, ExpressJS & MongoDB</b></p> */}
            </div>
        </div>
    );
}
 
export default About;