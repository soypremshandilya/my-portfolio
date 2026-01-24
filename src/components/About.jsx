import React from 'react';
import { FaDownload } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="lead">
                            I’m <strong>Prem Shandilya</strong>, a final-year MCA student and <strong>Software Engineer</strong> with a strong focus on <strong>Artificial Intelligence and Machine Learning</strong>. I’m deeply interested in designing intelligent systems that can learn from data, recognize patterns, and make meaningful predictions to solve real-world problems.
                        </p>
                        <p>
                            My experience includes working on <strong>machine learning models</strong>, deep learning architectures, and data-driven applications, where I’ve applied concepts like feature engineering, model optimization, and performance evaluation. I enjoy experimenting with algorithms, understanding how models behave, and improving them through iteration and analysis.
                        </p>
                        <p>
                            Alongside AI/ML, I have a solid background in <strong>Python, Java</strong>, data structures, and <strong>full-stack development</strong>, which allows me to build complete end-to-end solutions—from data preprocessing and model training to deployment-ready interfaces. I believe strong software engineering principles are just as important as good models.
                        </p>
                        <p>
                            This portfolio represents my journey in AI, machine learning, and software development, showcasing projects that reflect my curiosity, problem-solving mindset, and commitment to continuous learning. My goal is to grow as an engineer who not only builds intelligent systems but also makes them reliable, scalable, and impactful.
                        </p>

                        <div className="skills-tags">
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Node.js</span>
                            <span>SQL</span>
                            <span>Java</span>
                            <span>Python</span>
                        </div>

                        <a href="/resume.pdf" download="My_Resume.pdf" className="btn download-btn">
                            <FaDownload style={{ marginRight: '8px' }} /> Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
