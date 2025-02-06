import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Layout;