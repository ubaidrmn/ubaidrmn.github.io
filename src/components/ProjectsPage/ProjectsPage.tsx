import PageLayout from "../PageLayout";
import ProjectBox from "./ProjectBox";
import type { Project } from "./types";

function ProjectsPage() {
    const projects: Project[] = [
        {
            title: "CloudNOOE",
            description: "A cloud infrastructure design and cost optimization tool that helps businesses optimize their cloud infrastructure and reduce costs by providing insights and recommendations based on their usage patterns and requirements.",
            imageUrl: "/cloudnooe.png",
            projectUrl: "https://cloudnooe.com/",
            tags: [
                { name: "React", url: "https://react.dev/" },
                { name: "Docker", url: "https://www.docker.com/" },
                { name: "Langchain", url: "https://python.langchain.com/en/latest/" },
                { name: "Python", url: "https://www.python.org/" },
                { name: "Scrapy", url: "https://scrapy.org/" },
                { name: "EC2", url: "https://aws.amazon.com/ec2/" },
                { name: "Amplify", url: "https://aws.amazon.com/amplify/" },
            ]
        },
        {
            title: "FreelanceQuest",
            description: "FreelanceQuest is a database management system (DBMS) course project that models a real-world freelancing platform. It enables clients to post projects, freelancers to place bids, and both parties to communicate and manage projects efficiently.",
            imageUrl: "/freelancequest.png",
            projectUrl: "https://github.com/ubaidrmn/FreelanceQuest",
            tags: [
                { name: "React", url: "https://react.dev/" },
                { name: "Node.js", url: "https://nodejs.org/" },
            ]
        },
        {
            title: "LambdaCRM",
            description: "LambdaCRM is a customer relationship management (CRM) system built using AWS Lambda and DynamoDB. It allows users to manage customer data and interactions efficiently.",
            imageUrl: "/lambdacrm.png",
            projectUrl: "https://github.com/ubaidrmn/LambdaCRM",
            tags: [
                { name: "React", url: "https://react.dev/" },
                { name: "Node.js", url: "https://nodejs.org/" },
                { name: "AWS", url: "https://aws.amazon.com/" },
                { name: "Lambda", url: "https://aws.amazon.com/lambda/" },
            ]
        },
        {
            title: "SpringBoot-Chat",
            description: "SpringBoot-Chat is a chat application built using Spring Boot and WebSockets. It allows users to send and receive messages via websockets.",
            imageUrl: "/springboot-chat.png",
            projectUrl: "https://github.com/ubaidrmn/SpringBoot-Chat",
            tags: [
                { name: "React", url: "https://react.dev/" },
                { name: "SpringBoot", url: "https://spring.io/projects/spring-boot" },
                { name: "Java", url: "https://www.java.com/" },
            ]
        },
        {
            title: "LSTM Sentence Autocompletion",
            description: "Python implementation of a Long Short-Term Memory (LSTM) neural network for sentence autocompletion. The model is trained on a corpus of text data to predict the next word in a sentence based on the previous context.",
            imageUrl: "/lstm.png",
            projectUrl: "https://github.com/ubaidrmn/LSTM-sentence-autocompletion",
            tags: [
                { name: "Python", url: "https://www.python.org/" },
                { name: "NLTK", url: "https://www.nltk.org/" },
            ]
        },
        {
            title: "UIT Portal Feedback Automation",
            description: "Every year, UIT students are asked to submit lengthy and repetitive faculty feedback forms multiple times. I wrote this script to automate that process. It submits all the feedback forms randomly within a few seconds, saving students hours of time and effort.",
            imageUrl: "/uitportal.png",
            projectUrl: "https://github.com/ubaidrmn/uit-portal-feedback-automation",
            tags: [
                { name: "Python", url: "https://www.python.org/" },
                { name: "Selenium", url: "https://www.selenium.dev/" },
            ]
        }
    ];

    return (
        <PageLayout>
            <div className="container projects-page">
                <h1>PROJECTS</h1>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectBox key={index} project={project} />
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}

export default ProjectsPage;
