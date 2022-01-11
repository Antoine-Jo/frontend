import React from 'react';
import '../styles/Home.css';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';


function Home() {
    
    const deleteCursor = () => {
        const cursor = document.querySelector(".Typewriter__cursor")
        cursor.style.display = "none"

    }

    return (
        <div className='home'>
           <h1 className="name">Antoine Jonville</h1> 
           <Typewriter
            onInit={(typewriter) => {
            typewriter.typeString('Développeur Web Junior')
            .callFunction(() => {
                deleteCursor()
              })
            .start();
            }}
            />
            <div className="home__link">
                <Link to="/About" className='link'>Qui suis-je ? </Link>
            </div>
        </div>
    )
}

export default Home