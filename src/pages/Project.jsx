import React from 'react'
import Landingpage from '../components/Landingpage'
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import VideoAnimation from '../components/VideoAnimation';
import FAQ from '../components/FAQ';
import Founder from '../components/Founder';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';

function Project() {
    let text = {
        title1: 'Let’s start',
        title2: 'a project',
        title3: 'together',
        url: 'img/asserts/start.jpg',
        subtitle: "We don't make slides only :-)",
        description: "We make soulful presentations which make your audience feel something",
        btnText: "Our Approach",
        scroll: 0
    };

    let msg = {
        title: 'Founder’s Message',
        text: 'We are a team of professional designers and developers who are dedicated to creating beautiful and effective websites and presentations. We are passionate about our work and we love to turn our clients visions into reality. We are committed to providing the best possible service to our clients and we are always looking for new ways to improve our work. We are always looking for new challenges and we'
    };

    return (
        <div>
            <Navbar />
            <Landingpage {...text} />
            <ContactForm />
            <VideoAnimation />
            <FAQ />
            <Reviews />
            <Founder {...msg} />
            <Cards />
            <Footer />
        </div>
    )
}

export default Project