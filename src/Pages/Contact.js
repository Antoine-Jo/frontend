import React from 'react';
import FormContact from '../components/FormContact';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className='contact__container'>
            <h1>Contactez-moi</h1>
            <p className='contact__text'>Si vous n'aimez pas les formulaires, il y a toujours les classiques :</p>
            <a href="https://www.linkedin.com/in/antoine-jonville-a12558214/" target="_blank" rel='noreferrer'><img src="https://img.icons8.com/color/48/000000/linkedin-2--v1.png" alt='linkedin' width='40px' height='40px' /></a>
            <p><span>Téléphone : </span> 06.29.89.42.74</p>
            <p><span>Email : </span> <a href="mailto:antoinejonville@yahoo.fr">antoinejonville@yahoo.fr</a></p>
            <FormContact/>
        </div>
    )
}

export default Contact
