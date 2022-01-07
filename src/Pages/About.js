import React from 'react';
import '../styles/About.css';
import pic from "../assets/photo_me.jpg";

function About() {
    return (
        <div className='about__container'>
            <img src={pic} alt="me" className='about__pic' />
            <p className="about__title">Antoine Jonville, 33ans, Cannes(06, Alpes-Maritimes)</p>
            <p className="about_desc">J'ai commencé le développement web en autodidacte, étant passionné par le monde de l'informatique,
            j'ai effectué une formation de 6 mois avec OpenClassrooms sur le parcours Développeur Web. Je suis quelqu'un de curieux et passionné,
            j'aime expérimenter, découvrir et apprendre au fur et à mesure de mes projets professionnels et personnels.</p>
            <div className="about__skills">
                <h2 className="skills__title">Mes compétences :</h2>
            </div>
        </div>
    )
}

export default About
