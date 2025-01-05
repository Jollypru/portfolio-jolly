import React, { useState } from 'react';
import resume from '../assets/files/Portfolio Task..pdf'
import { MdOutlineFileDownload } from 'react-icons/md';

const Navbar = () => {
    const [active, setActive] = useState("#about");
    const handleActive = (hash) => {
        setActive(hash);
    }
    const links = <>
        <li><a href="#about" onClick={()=> handleActive("#about")} className={active === "#about" ? "active" : ""}>About</a></li>
        <li><a href='#skills' onClick={()=> handleActive("#skills")} className={active === "#skills" ? "active" : ""}>Skills</a></li>
        <li><a href='#education' onClick={()=> handleActive("#education")} className={active === "#education" ? "active" : ""}>Education</a></li>
        <li><a href='#projects' onClick={()=> handleActive("#projects")} className={active === "#projects" ? "active" : ""}>Portfolio</a></li>
        <li><a href='#contact' onClick={()=> handleActive("#contact")} className={active === "#contact" ? "active" : ""}>Contact</a></li>
    </>
    return (
        <div className="navbar sticky z-10 top-0 bg-black bg-opacity-35 text-white uppercase md:px-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <h1>Jolly Pru Marma</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href={resume} download>
                    <button className='py-2 px-5 rounded-md bg-gradient-to-r from-blue-500 to-pink-500 text-white flex items-center gap-1'><MdOutlineFileDownload></MdOutlineFileDownload>Download Resume</button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;