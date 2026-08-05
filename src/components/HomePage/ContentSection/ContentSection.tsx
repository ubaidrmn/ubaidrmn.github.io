import Rating from "../../Rating";
import { FaTrophy } from "react-icons/fa";

function ContentSection() {
    return (
        <div className="container content-section">
            <div>
                <h3>WORK EXPERIENCE</h3>
                <p>Software Engineer @ Techstack Digital (Present)</p>
                <ul>
                    <li>Developed 20+ REST APIs using Django REST Framework for enterprise SaaS applications serving thousands of users.</li>
                    <li>Built AI-powered applications using LangChain, implementing RAG pipelines, tool-using agents, and multi-step LLM workflows for contextual reasoning and external data integration.</li>
                    <li>Debugged and resolved production issues using Sentry, CloudWatch logs, and performance metrics.</li>
                    <li>Improved system reliability through automated testing using PyTest and Selenium.</li>
                    <li>Contributed to CI/CD workflows in GitHub Actions for automated deployments.</li>
                </ul>
            </div>

            <div>
                <h3>PROFESSIONAL REVIEWS</h3>
                <div className="icon-row">
                    <Rating rating={5} />
                    <p><i>“Ubaid was so responsible, professional, and responsive.
                        He delivered quality work on time and exceeded my expectations.
                        I highly recommend him for any project.”</i></p>
                </div>
                <br />
                <div className="icon-row">
                    <Rating rating={5} />
                    <p><i>“Ubaid was great to work with! Understood needs quickly and proposed solutions that ended up saving costs. Responsive and clear communicator who was clear and upfront about their areas of strength. Delivered solutions before the agreed upon deadline. Would definitely hire them again.”</i></p>
                </div>
            </div>
            <div>
                <h3>ACHIEVEMENTS</h3>
                <div className="icon-row">
                    <FaTrophy color={"#ffc107"} />
                    <p>Co-founded and pitched <a style={{ textDecoration: "underline" }} target="_blank" href="https://cloudnooe.com">CloudNOOE</a>, securing selection for incubation in IoBM University's SSKIC Cohort 5.</p>
                </div>
                <br />
                <div className="icon-row">
                    <FaTrophy color={"#ffc107"} />
                    <p>Served as the Web Development Co-Lead, GDSC at my University.</p>
                </div>
                <br />
                <div className="icon-row">
                    <FaTrophy color={"#ffc107"} />
                    <p>Contributed multiple pull requests to <a href="https://github.com/zulip/zulip" target="_blank" style={{ textDecoration: "underline" }}>Zulip</a>. (22k+ GitHub stars)</p>
                </div>
            </div>

            <div>
                <h3>TOOLS & TECHNOLOGIES</h3>
                <p>AWS, Python, JavaScript/Node.js + TypeScript, Docker, Django, ReactJS, PostgreSQL, Redis, Celery, Selenium, Postman, LangChain</p>
            </div>

            <div>
                <h3>EDUCATION</h3>
                <p>Bachelor of Science in Computer Science (BS CS) - UIT University</p>
            </div>
        </div>
    );
}

export default ContentSection;
