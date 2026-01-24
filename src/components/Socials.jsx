import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';
import './Socials.css';

const Socials = () => {
    const socialLinks = [
        { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/premshandilya/', class: 'linkedin' },
        { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/soypremshandilya', class: 'github' },
        { name: 'LeetCode', icon: <SiLeetcode />, url: 'https://leetcode.com/u/premshandilya/', class: 'leetcode' },
        { name: 'Codeforces', icon: <SiCodeforces />, url: 'https://codeforces.com/profile/iampremshandilya', class: 'codeforces' },
        { name: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/iamPremshandilya/', class: 'facebook' },
        { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/iampremshandilya', class: 'instagram' },
    ];

    return (
        <section id="contact" className="socials-section">
            <div className="container text-center">
                <h2 className="section-title">Get In Touch</h2>
                <p className="social-text">Feel free to connect with me on social media!</p>

                <div className="social-icons">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`social-link ${social.class}`}
                            aria-label={social.name}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Socials;
