// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <header>
                {/* Include your logo and navigation menu */}
                <h1>Namaste</h1>
                <nav>
                    <ul>
                        <li><Link to="/guided-meditation">Guided Meditation</Link></li>
                        <li><Link to="/mindfulness-exercises">Mindfulness Exercises</Link></li>
                        <li><Link to="/community">Community</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </nav>
            </header>

            <section>
                {/* Add your hero section with a compelling headline and call-to-action */}
                <h2>Welcome to Namaste</h2>
                <p>Discover a calmer, more centered you with our guided meditation sessions and mindfulness exercises.</p>
                <Link to="/signup">Join Now</Link>
            </section>

            {/* Add other sections like featured guided meditations, mindfulness exercises, testimonials, etc. */}
        </div>
    );
}

export default Home;
