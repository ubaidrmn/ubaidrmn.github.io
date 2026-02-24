import Rating from "../../Rating";
import { FaTrophy } from "react-icons/fa";

function ContentSection() {
    return (
        <div className="container content-section">
            <p>
                I'm a Software Engineer who loves solving problems and building 
                things that matter. I enjoy turning ideas into reality and 
                learning something new with every project.
            </p>

            <div>
                <h3>WORK EXPERIENCE</h3>
                <p>Software Engineer @ Techstack Digital (Present)</p>
            </div>

            <div>
                <h3>PROFESSIONAL REVIEWS</h3>
                <div style={{ display: "flex", gap: "10px" }}>
                    <Rating rating={5} />
                    <p><i>“Ubaid was so responsible, professional, and responsive. 
                    He delivered quality work on time and exceeded my expectations. 
                    I highly recommend him for any project.”</i> — Upwork Client</p>
                </div>
                <br />
                <div style={{ display: "flex", gap: "10px" }}>
                    <Rating rating={5} />
                    <p><i>“I really like the way you communicate! Looking forward to having a long-term collaboration with you.”</i> — Upwork Client</p>
                </div>
                <br />
                <div style={{ display: "flex", gap: "10px" }}>
                    <Rating rating={5} />
                    <p><i>“Hes really good.”</i> — Upwork Client</p>
                </div>
            </div>

            <div>
                <h3>ACHIEVEMENTS</h3>
                <div style={{ display: "flex", gap: "10px" }}>
                    <FaTrophy color={"#ffc107"} />
                    <p>Won 2nd place at the KarachiDotAI startup pitching competition, presenting <a style={{ textDecoration: "underline" }} target="_blank" href="https://cloudnooe.com">CloudNOOE</a> alongside my teammate.</p>                </div>
                <br />
                <div style={{ display: "flex", gap: "10px" }}>
                    <FaTrophy color={"#ffc107"} />
                    <p>Got selected for incubation at IoBM University, SSKIC Cohort 5, pitching <a style={{ textDecoration: "underline" }} target="_blank" href="https://cloudnooe.com">CloudNOOE</a> alongside my teammate.</p>
                </div>
                <br />
                <div style={{ display: "flex", gap: "10px" }}>
                    <FaTrophy color={"#ffc107"} />
                    <p>Selected as Web Development Co-Lead for GDSC at my university.</p>
                </div>
                <br />
                <div style={{ display: "flex", gap: "10px" }}>
                    <FaTrophy color={"#ffc107"} />
                    <p>Contributed multiple pull requests to Zulip, a large-scale open-source 
                        team chat app used by thousands.</p>
                </div>
            </div>

            <div>
                <h3>SKILLS</h3>
                <p>Unit Testing, Object Oriented Programming, Problem Solving, Communication, Teamwork</p>
            </div>

            <div>
                <h3>TOOLS & TECHNOLOGIES</h3>
                <p>Python, Django, PyTest, Celery, NodeJs, React / Next, AWS, Docker, Scrapy, Selenium, Postgres</p>
            </div>

            <div>
                <h3>EDUCATION</h3>
                <p>Bachelor of Science in Computer Science (BS CS) - UIT University</p>
                <p>Intermediate (Pre-Engineering) - Govt Dehli Inter Science College, Karachi</p>
            </div>
        </div>
    );
}

export default ContentSection;
