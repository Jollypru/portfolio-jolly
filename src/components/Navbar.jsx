import React from 'react';

const Navbar = () => {
    const links = <>
        <li><a href="#about">About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#projects'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
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
            <ul className="menu menu-horizontal px-1">
                {links}
            </ul>
        </div>
        <div className="navbar-end">
            <button className='py-2 px-5 rounded-md bg-gradient-to-r from-blue-500 to-pink-500 text-white'>Download Resume</button>
        </div>
    </div>
    );
};

export default Navbar;