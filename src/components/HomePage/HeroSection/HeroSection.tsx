import { GoOrganization } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import type { Tag } from "../../Tags";
import Tags from "../../Tags";
import Button from "../../Button";
import SocialIcons from "../../SocialIcons";

function HeroSection() {
    const tags: Tag[] = [
        { name: "Software Engineer", url: "#" },
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
                        <span style={{marginLeft: "5px"}}>Software Engineer @ Techstack Digital</span>
                    </p>
                    <p className="description">
                        With a strong background in software engineering, I specialize in building scalable and maintainable applications. My experience spans backend development with Python and Django, cloud infrastructure on AWS, and frontend work with React, allowing me to deliver end-to-end solutions that are both efficient and user-friendly.
                    </p>
                    <p className="location"><FaLocationDot /> Karachi, Pakistan</p>
                    <Tags tags={tags} />
                    <div style={{ display: "flex", gap: "10px" }}>
                        <a href="mailto:rehmanubaid2003@gmail.com" target="_blank"><Button>CONTACT ME</Button></a>
                        <Button>DOWNLOAD RESUME</Button>
                    </div>
                    <SocialIcons />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
