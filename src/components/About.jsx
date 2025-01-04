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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi deserunt numquam quae iste dicta adipisci impedit doloribus repudiandae illum quas corporis alias aspernatur, hic ad accusantium velit perferendis excepturi error soluta magni, placeat saepe voluptas accusamus? Officia aliquid, corrupti similique eveniet illum suscipit tenetur, nam nihil aut deserunt libero accusantium.</p>
                </div>
            </div>
            <hr className='mt-12' />
        </div>
    );
};

export default About;