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
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam dignissim metus, 
                eget mollis quam pulvinar sed. Nunc pellentesque ligula augue, id lobortis tortor rhoncus quis. 
                Duis euismod orci sed velit auctor feugiat. Vivamus sit amet quam et metus pulvinar bibendum at eu mauris. 
                Nunc vel venenatis urna. Vivamus condimentum mauris ut neque luctus cursus vitae at orci. 
                Quisque sed nunc et massa accumsan ultricies.

                Curabitur id maximus tellus. 
                Phasellus rutrum elit quis justo pretium gravida. 
                Praesent commodo elit at leo convallis consequat. Phasellus bibendum placerat volutpat. 
                Proin ultrices nunc ut nibh hendrerit, id pretium lacus luctus. 
                Curabitur quis sapien quis orci varius porttitor a in lectus. 
                Vestibulum vitae metus turpis. Etiam est elit, accumsan at egestas eu, interdum ac dui. 
                Vivamus mollis, justo id laoreet iaculis, urna nisl consequat nunc, ac tempor nunc neque id nunc. 
                Fusce dignissim, lectus in tempor tincidunt, leo ante tincidunt odio, a pharetra ligula nibh sit amet tortor. 
                Nulla auctor pharetra convallis. Duis id tempus elit, vitae mattis ante.</p>
            </div>
        </div>
    );
}
 
export default About;