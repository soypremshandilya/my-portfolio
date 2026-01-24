import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content animate-fade-in">
                <h1 className="title">
                    <span className="highlight">AI & Machine Learning Engineer</span>
                </h1>
                <span className="subtitle" style={{ margin: '-1rem 0 2rem' }}>
                    Final Year MCA Student
                </span>
                <p className="description">
                    I design intelligent, data-driven systems and scalable applications using machine learning, deep learning, and modern software engineering practices.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn cta-btn">View My Projects</a>
                    <a href="#contact" className="btn outline-btn">Let’s Collaborate</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
