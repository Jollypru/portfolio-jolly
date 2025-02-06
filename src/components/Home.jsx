import React from 'react';
import Banner from './Banner'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Portfolio from './Portfolio'
import Contact from './Contact'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;