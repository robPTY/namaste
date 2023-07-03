// Home.js
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container">
            <header>
                <h1>Welcome to Our Website</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id libero in lorem facilisis pellentesque. Proin semper rutrum tellus eu consequat. Sed fermentum, dui eget tempor iaculis, nulla felis semper turpis, sit amet pharetra mauris felis sit amet enim.</p>
                <a href="#about">Learn More</a>
            </header>
            <section id="about">
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id libero in lorem facilisis pellentesque. Proin semper rutrum tellus eu consequat. Sed fermentum, dui eget tempor iaculis, nulla felis semper turpis, sit amet pharetra mauris felis sit amet enim.</p>
                </div>
                <div className="about-image">
                    <img src="/path/to/image" alt="About" />
                </div>
            </section>
            <section id="features">
                <h2>Key Features</h2>
                <div className="feature-card">
                    <img src="/path/to/feature-image" alt="Feature" />
                    <h3>Feature 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="feature-card">
                    <img src="/path/to/feature-image" alt="Feature" />
                    <h3>Feature 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="feature-card">
                    <img src="/path/to/feature-image" alt="Feature" />
                    <h3>Feature 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </section>
            <section id="testimonial">
                <h2>Testimonials</h2>
                <div className="testimonial-card">
                    <img src="/path/to/user-image" alt="User" />
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id libero in lorem facilisis pellentesque. Proin semper rutrum tellus eu consequat."</p>
                    <h4>- John Doe</h4>
                </div>
                <div className="testimonial-card">
                    <img src="/path/to/user-image" alt="User" />
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id libero in lorem facilisis pellentesque. Proin semper rutrum tellus eu consequat."</p>
                    <h4>- Jane Smith</h4>
                </div>
            </section>
            <footer>
                <p>&copy; 2023 Your Website. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
