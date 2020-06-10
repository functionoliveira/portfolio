import React, { useRef } from 'react';
// import Section from '../components/Section';
// import Meteor from '../components/Meteor';
// import Astronaut from '../components/Astronaut';
import Navigation from '../components/Navigation';
import Moon from '../components/Moon';
// import Star from '../components/Star';

import Home from '../section/Home';
import AboutMe from '../section/AboutMe';
import Skills from '../section/Skills';
import Projects from '../section/Projects';
import SocialMedia from '../section/SocialMedia';
import Contact from '../section/Contact';



export default function App() {
    const moon = useRef();
    const aboutMe = useRef();

    window.onscroll = evt => {
        moon.current.onScroll(window.scrollY);
        aboutMe.current.onScroll(window.scrollY);
    }

    return (
        <div id="app">
            <Navigation></Navigation>
            {/* <Star count={100}></Star> */}
            {/* <Astronaut></Astronaut> */}
            {/* <Meteor x="100" y="100"></Meteor>
            <Meteor x="200" y="120"></Meteor>
            <Meteor x="300" y="140"></Meteor>
            <Meteor x="100" y="200"></Meteor>
            <Meteor x="200" y="220"></Meteor> */}
            <Moon ref={moon}></Moon>
            <div className="wrap">
                <Home></Home>
                <AboutMe ref={aboutMe}></AboutMe>
                <Skills></Skills>
                <Projects></Projects>
                <SocialMedia></SocialMedia>
                <Contact></Contact>
            </div>
        </div>
    );
}