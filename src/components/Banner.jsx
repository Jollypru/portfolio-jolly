import React from 'react';
import myImage from '../assets/image/026.jpg';
import resume from '../assets/files/Resume_of_Jolly Pru Marma.pdf';
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto mt-14 mb-8 flex flex-col-reverse md:flex-row gap-5 items-center'>
            <div>
            <motion.h1
                    className='text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-pink-600 via-purple-500 to-purple-800 text-transparent bg-clip-text uppercase'
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Frontend
                </motion.h1>
                <motion.h1
                    className='text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-pink-600 via-purple-500 to-purple-800 text-transparent bg-clip-text uppercase md:mt-5 pl-20 md:pl-10'
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    Developer
                </motion.h1>
                <h3 className='text-xl md:text-2xl mt-8 md:mt-16'>I am Jolly - <span className='text-blue-500'>web-developer</span> with a passion for creating beautiful and responsive landing pages.</h3>
                <a href={resume} download>
                    <button className=' py-2 px-5 rounded-md mt-8 bg-gradient-to-r from-blue-500 to-pink-500 text-white flex items-center gap-1'>Download Resume <MdOutlineFileDownload></MdOutlineFileDownload></button>
                </a>
            </div>
            <div>
                <img src={myImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;