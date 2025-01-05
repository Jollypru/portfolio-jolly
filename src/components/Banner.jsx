import React from 'react';
import myImage from '../assets/image/026.jpg';
import resume from '../assets/files/Portfolio Task..pdf'

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto mt-14 mb-8 flex flex-col-reverse md:flex-row gap-5 items-center'>
            <div>
                <h1 className='text-7xl bg-gradient-to-r from-pink-600 via-purple-500 to-purple-800 text-transparent bg-clip-text uppercase'>Frontend </h1>
                <h1 className='text-7xl bg-gradient-to-r from-pink-600 via-purple-500 to-purple-800 text-transparent bg-clip-text uppercase mt-5'>Developer </h1>
                <h3 className='text-2xl mt-16'>I am Jolly - <span className='text-blue-500'>web-developer</span> with a passion for creating beautiful and responsive landing pages.</h3>
                <a href={resume} download>
                    <button className=' py-2 px-5 rounded-md mt-8 bg-gradient-to-r from-blue-500 to-pink-500 text-white'>Download Resume</button>
                </a>
            </div>
            <div>
                <img src={myImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;