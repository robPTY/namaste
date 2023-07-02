// Home.js
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <header id="main_header">
                <Link to="/"><h1 id="main-logo-header">namaste.</h1></Link>
                <nav>
                    <ul>
                        <li><Link to="/guided-meditation">Meditation</Link></li>
                        <li><Link to="/mindfulness-exercises">Exercises</Link></li>
                        <li><Link to="/community">Community</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/login">Login/Signup</Link></li>
                    </ul>
                </nav>
            </header>

            <section>
                <div>
                    <h2>Welcome to Namaste</h2>
                    <p>Discover a calmer, more centered you with our guided meditation sessions and mindfulness exercises.</p>
                    <Link to="/signup">Join Now</Link>
                </div>
            </section>
            <section>

            </section>
        </div>
    );
}

export default Home;
