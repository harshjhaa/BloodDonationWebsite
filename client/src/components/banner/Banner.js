import React from 'react';
import LinkButton from '../LinkButton'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content-container">
                <div className="banner-contents">
                    <div className="banner-text ">
                        <h1 className="banner-title">“A single pint can save three lives, a single gesture can create a million smiles”</h1>
                        <h1 className="banner-description">While about 38% of the population qualifies to give blood, according to Red Cross
                        less than 10% are actually donating. Numbers are even lower in the rest of the world, with some countries relying mostly
                        on blood from people that ask money for their gesture.</h1>
                    </div>
                    <div className="banner-registration">
                        <h1 className="proceed-as">Proceed as -</h1>
                        <div style={{ marginRight: '100px' }} className="banner-buttons">
                            <LinkButton to='/reciever-registration' className="banner-button">RECIEVER</LinkButton>
                            <LinkButton to='/donor-registration' className="banner-button">DONOR</LinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;