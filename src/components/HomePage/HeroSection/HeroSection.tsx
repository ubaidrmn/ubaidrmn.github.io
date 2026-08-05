import { GoOrganization } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import type { Tag } from "../../Tags";
import Tags from "../../Tags";
import Button from "../../Button";
import SocialIcons from "../../SocialIcons";

function HeroSection() {
    const tags: Tag[] = [
        { name: "Python", url: "https://www.python.org/" },
        { name: "AWS", url: "https://aws.amazon.com/" },
        { name: "React", url: "https://react.dev/" },
    ];

    return (
        <div className="container">
            <div className="hero-section">
                <div className="left">
                    <div className="img-container">
                        <img src="/me.jpg" />
                    </div>
                </div>
                <div className="right">
                    <h1>UBAID UR REHMAN</h1>
                    <p className="employment">
                        <GoOrganization />
                        <span style={{ marginLeft: "5px" }}>Software Engineer @ Techstack Digital</span>
                    </p>
                    <p className="description">
                        Software Engineer with 4+ years of experience building scalable backend systems and AI-powered applications. Skilled in Python, Django, AWS, and modern LLM frameworks, with experience designing cloud-native solutions, automating deployments, and developing production-ready software.
                    </p>
                    <p className="location"><FaLocationDot /> Karachi, Pakistan</p>
                    <Tags tags={tags} />
                    <div className="hero-buttons">
                        <a href="mailto:rehmanubaid2003@gmail.com" target="_blank"><Button>CONTACT ME</Button></a>
                        <a href="/RESUME.pdf"><Button>DOWNLOAD RESUME</Button></a>
                    </div>
                    <SocialIcons />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
