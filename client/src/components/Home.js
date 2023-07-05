// Home.js
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import imageUrl from '../img/monk-logo.png';

function Home() {
    const imageSize = 250;
    return (
        <div className="home-container">
            <div className="buttons-top-page">
                <Link to="/Profile" className="btn">Profile</Link>
                <Link to="/Login" className="btn">Login/Signup</Link>
            </div>
            <div className="hero-section">
                <h1>Welcome to namaste.</h1>
                <p>Where tranquility meets with productivity.</p>
                <img src={imageUrl} width={imageSize} height={imageSize} alt="Monk Logo" /><br></br>
                <Link to="/About" className="btn">About Section </Link>
            </div>
            <section className="features-section">
                <div className="feature">
                    <img src="feature1.png" alt="Feature 1" />
                    <h2>Feature 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="feature">
                    <img src="feature2.png" alt="Feature 2" />
                    <h2>Feature 2</h2>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="feature">
                    <img src="feature3.png" alt="Feature 3" />
                    <h2>Feature 3</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </section>
            <section className="testimonial-section">
                <h2>What People Say</h2>
                <div className="testimonial">
                    <img src="avatar1.png" alt="Avatar 1" />
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                    <p className="testimonial-author">- John Doe</p>
                </div>
                <div className="testimonial">
                    <img src="avatar2.png" alt="Avatar 2" />
                    <p>"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    <p className="testimonial-author">- Jane Smith</p>
                </div>
            </section>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} namaste. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
