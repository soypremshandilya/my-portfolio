import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container text-center">
                <p>Made with ❤️ by Prem Shandilya</p>
                <p className="copyright">&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
