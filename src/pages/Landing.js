import React from 'react';
import '../styles/pages/Landing.css';
import { Link } from 'react-router-dom';

function Landing(){
    return(
        <div id='landing-page'>
            <div className='content-wrapper'>
               <main>
                   <h1>Astronomy Picture Of the Day</h1>
                   <p>Daily pictures of our beautiful universe</p>
               </main>
               
                <Link to="/app" className="enter-app">
                    Get Started
                </Link>
            </div>
        </div>
    )
}

export default Landing;