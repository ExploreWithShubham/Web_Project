import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer-nav">
                <ul className="footer-links">
                    <li><span>Author:</span> Name</li>
                    <li><span>Description:</span> Modern Web Project Footer</li>
                    <li>Copyright <span>&copy;</span> {new Date().getFullYear()}</li>
                </ul>
            </nav>
        </footer>
    )};

export default Footer;