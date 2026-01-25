import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Car Price Predictor',
        description: 'A Machine Learning web app that predicts used car prices using Flask and Scikit-Learn (Random Forest). Live demo deployed on Render.',
        tags: ['Python', 'Machine Learning', 'Scikit-Learn', 'Flask', 'Random Forest'],
        image: '/projects/car-price-predictor.png',
        link: 'https://car-price-predictor-noyy.onrender.com',
        github: 'https://github.com/soypremshandilya/car_price_predictor'
    },
    {
        id: 2,
        title: 'Audiobook Generator',
        description: 'Full-stack AI audiobook platform converting PDFs into natural-sounding speech using Neural TTS and React, featuring real-time processing and a scalable RESTful architecture.',
        tags: ['React', 'Python', 'Flask', 'Neural TTS', 'REST API', 'Render'],
        image: '/projects/storybud-audiobook.png',
        link: 'https://audiobook-ui.onrender.com/',
        github: 'https://github.com/soypremshandilya/audiobook'
    },
    {
        id: 3,
        title: 'Live Translator App',
        description: 'A multimodal real-time translation web application enabling instant translation across languages with dynamic user input and real-time processing.',
        tags: ['ReactJS', 'Python', 'ML/NLP', 'Real-time', 'Rest APIs'],
        image: '/projects/live-translator-app.png',
        link: 'https://webrealtime-translator.vercel.app/',
        github: 'https://github.com/soypremshandilya/Live-Translator-App'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="card-image">
                                <img src={project.image} alt={project.title} />
                                <div className="card-overlay">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Live Demo">
                                        <FaExternalLinkAlt />
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub Code">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="card-tags">
                                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-text">Live Preview &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
