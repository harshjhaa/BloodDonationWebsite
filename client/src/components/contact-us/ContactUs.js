import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div class="jumbotron container bg-danger jumbotron-container" style={{ marginTop: 70 }}>
            <h1 class="display-4">You can find us on -</h1>
            <hr class="my-4" />
            <h6>Email -</h6>
            <p>findblood.org@gmail.com</p>
            <h6>Contact Number -</h6>
            <p>9898989898 | 8989898989 | 8888899999</p>
            <h6>Address</h6>
            <p>Building No. 10, Nehru Place, New Delhi</p>
            <hr class="my-4" />
        </div>
    );
};

export default ContactUs;