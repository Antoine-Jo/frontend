import React from 'react';
import FormContact from '../components/FormContact';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className='contact__container'>
            <h3>Contactez-moi</h3>
            <p>Via :</p>
            <img src="https://img.icons8.com/color/48/000000/linkedin-2--v1.png" width='40px' height='40px' />
            <p>Téléphone : 06.29.89.42.74</p>
            <p>Email: antoinejonville@yahoo.fr</p>
            <FormContact/>
        </div>
    )
}

export default Contact
