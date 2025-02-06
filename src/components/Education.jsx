import React from 'react';
import SectionTitle from './SectionTitle';
import image from '../assets/image/graduationhat.png';
import { MdLocationOn } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";

const Education = () => {
    return (
        <section id='education' className='w-11/12 mx-auto mt-14'>
            <SectionTitle heading={'Educational Background'} />
            <div className='flex gap-10 md:gap-20 items-center justify-center flex-col md:flex-row mt-10'>
                {/* Image Section */}
                <div className="relative">
                    <img
                        className="h-[120px] w-[120px] rounded-full shadow-lg transform transition-transform duration-1000 hover:scale-110"
                        src={image}
                        alt="Graduation Hat"
                    />
                    {/* Floating timeline dot */}
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -top-3 -right-3"></div>
                </div>

                {/* Education Details Section */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                    <p className="text-3xl font-semibold text-white">BSc. in Electrical and Electronic Engineering</p>
                    <p className="text-xl text-gray-300 flex items-start justify-center sm:items-center gap-0 sm:gap-2"><FaUniversity className='self-start mt-1'></FaUniversity>Chittagong University of Engineering & Technology</p>

                    {/* Timeline */}
                    <div className="flex items-center space-x-4">
                        <span className="text-lg font-medium text-gray-400 flex items-center gap-2"><FaGraduationCap></FaGraduationCap> 2020 - 2025</span>
                        <div className="w-1 h-10 bg-gray-300"></div>
                        <span className="text-lg font-medium text-gray-500">Expected Graduation</span>
                    </div>

                    {/* Location */}
                    <p className="text-lg text-gray-400 mt-2 flex items-center gap-1">< MdLocationOn></MdLocationOn>Chittagong, Bangladesh</p>
                    
                </div>
            </div>
            <div className='flex gap-10 md:gap-20 items-center justify-center flex-col md:flex-row-reverse mt-16'>
                {/* Image Section */}
                <div className="relative">
                    <img
                        className="h-[120px] w-[120px] rounded-full shadow-lg transform transition-transform duration-1000 hover:scale-110"
                        src={image}
                        alt="Graduation Hat"
                    />
                    {/* Floating timeline dot */}
                    <div className="absolute w-4 h-4 bg-green-600 rounded-full -top-3 -right-3"></div>
                </div>

                {/* Education Details Section */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                    <p className="text-3xl font-semibold text-white">Higher Secondary School Certificate (HSC)</p>
                    <p className="text-xl text-gray-300 flex items-start justify-center sm:items-center gap-0 sm:gap-2"><FaUniversity className='self-start mt-1'></FaUniversity>Bandarban Cant. Public School and College</p>

                    {/* Timeline */}
                    <div className="flex items-center space-x-4">
                        <span className="text-lg font-medium text-gray-400 flex items-center gap-2"><FaGraduationCap></FaGraduationCap> 2017 - 2019</span>
                        <div className="w-1 h-10 bg-gray-300"></div>
                        <span className="text-lg font-medium text-gray-500">Graduated</span>
                    
                    </div>

                    {/* Location */}
                    <p className="text-lg text-gray-400 mt-2 flex items-center gap-1">< MdLocationOn></MdLocationOn>Bandarban, Chittagong, Bangladesh</p>
                    
                </div>
            </div>
            <hr className='mt-20' />
        </section>
    );
};

export default Education;
