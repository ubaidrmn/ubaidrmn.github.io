import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";

function SocialIcons() {
    return <div style={{ display: "flex", gap: "10px", columnGap: "15px" }}>
        <a href="https://github.com/ubaidrmn" target="_blank"><FaGithub size={25} /></a>
        <a href="https://www.linkedin.com/in/ubaid-ur-rehman-702850194/" target="_blank"><FaLinkedin size={25} /></a>
        <a href="/Ubaid-Ur-Rehman-Resume.pdf" target="_blank"><FaRegFilePdf size={25} /></a>
    </div>
}

export default SocialIcons;
