import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
    return (
        <div className="contact" id="contactSec">
            <div className="contact-sub-sec">
                <h1>Socials</h1>
                <h4>You can contact me on any of the following social platforms below:</h4>
                <ul className="social-buttons">
                    <li><a href="https://www.linkedin.com/in/tadiwa-muguta-b1815b1a4/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/> LinkedIn</a></li>
                    <li><a href="https://github.com/LeonMuguta" target="_blank" rel="noopener noreferrer"><GitHubIcon/> GitHub</a></li>
                    <li><a href="#aboutSec"><InstagramIcon/> Instagram</a></li>
                    <li><a href="#aboutSec"><TwitterIcon/> Twitter</a></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Contact;