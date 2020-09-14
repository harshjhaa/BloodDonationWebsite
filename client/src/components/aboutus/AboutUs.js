import React from 'react';
import './AboutUs.css';

const AboutUs = () => {

    const teamMembers = [
        { name: "Jhon Doe", image: "./member1.png" },
        { name: "Jhon Doe", image: "./member2.png" },
        { name: "Jhon Doe", image: "./member3.png" },
        { name: "Jhon Doe", image: "./member4.png" },
    ]

    const getTeamMemberData = () => {
        return (teamMembers.map(member => {
            return (
                <div key={member.name}>
                    <img src={member.image} height="80" width="80" alt="member image" />
                    <h5>{member.name}</h5>
                </div>
            )
        }))
    }

    return (
        <div >
            <h2 className="aboutus-title aboutus-center"> KNOW ABOUT FINDBLOOD.IO</h2>
            <div className="under-line"> </div>
            <div className="aboutus-description">
                <p>It's a blood donation tracking platform, where we promote blood-donation, facilitate
                tracking it from depos and banks till destination. We also allow users to register
                on our website as 'DONOR' or 'RECIEVER', using which he/she can track the availability
                of blood in a region. Reciever can get the contact details of the donors after rgistering
                to the website. This website is completely free and highly secured where all the information is
                kept confidential.</p>
            </div>
            <div className="team-container">
                <h2 className="aboutus-title aboutus-center">TEAM MEMBERS</h2>
                <div className="under-line"> </div>
                <div className="team-members">
                    {getTeamMemberData()}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;