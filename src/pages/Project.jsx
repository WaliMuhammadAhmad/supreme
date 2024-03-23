import React from 'react'
import Landingpage from '../components/Landingpage'
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import VideoAnimation from '../components/VideoAnimation';

function Project() {
    let text = {
        title1: 'Let`s start',
        title2: 'a project',
        title3: 'together',
        url: 'img/asserts/start.jpg',
        subtitle: "we don't make slides only",
        description: "We put soul in your presentation",
        btnText: "Our Approach",
        scroll: 1
    };

    return (
        <div>
            <Navbar />
            <Landingpage {...text} />
            <ContactForm />
            {/* <VideoAnimation /> */}
        </div>
    )
}

export default Project