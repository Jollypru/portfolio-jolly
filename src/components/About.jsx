import React from 'react';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <div id='about'>
            <hr />
            <div  className='w-11/12 mx-auto my-20'>
               <SectionTitle heading={'About Me'}></SectionTitle>
                <div className='flex items-baseline gap-3'>
                    <div className='w-36 h-1 bg-gradient-to-r from-blue-500 to-pink-500'></div>
                    <p>Hi, I’m Jolly! I’m a passionate web developer with a background in Electrical and Electronic Engineering. My journey into web development started out of curiosity, and now it’s become something I genuinely enjoy. I love building user-friendly websites, experimenting with designs, and bringing ideas to life through code. Beyond coding, I’m always eager to learn new things and grow both personally and professionally. Let’s create something awesome together!</p>
                </div>
            </div>
            <hr className='mt-12' />
        </div>
    );
};

export default About;