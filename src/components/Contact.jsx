import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { LuMessageSquareMore } from "react-icons/lu";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_49eyzgg', 'template_z8hg66k', form.current, {
                publicKey: 'eSR-x31jIheOh0spc',
            })
            .then(
                (result) => {
                    console.log('SUCCESS!', result);
                    toast.success('Your message has send successfully!')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Failed to send message! Please try again.')
                },
            );
    };

    return (
        <div id='contact' className='flex flex-col md:flex-row gap-8 w-11/12 mx-auto mt-24 mb-20'>
            <div>
                <h2 className='text-3xl  bg-gradient-to-r from-pink-600 via-purple-500 to-purple-800 text-transparent bg-clip-text uppercase'>Do you have a project to discuss?</h2>
                <p className='text-2xl text-white uppercase mt-3 mb-7 flex gap-2 items-center'>Get in touch<LuMessageSquareMore></LuMessageSquareMore></p>
                <div className='flex gap-12'>
                    <div>
                        <h3 className='text-xl uppercase text-white'>Contact</h3>
                        <p>+8801585817969</p>
                    </div>
                    <div>
                        <h3 className='text-xl uppercase text-white'>Social Links</h3>
                        <p className='flex gap-3'>
                            <a href="https://www.linkedin.com/in/jolly-pru-marma-9b7a211bb" target="_blank" rel="noopener noreferrer"><CiLinkedin /></a>
                            <a href="https://www.facebook.com/jollypru.marma.7" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/__j.o.l.l.y__" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://wa.me/8801585817969" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                            <a href="https://t.me/jolly_pru" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-2xl text-white mb-5'>Contact Form</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <label className='text-lg'>Name</label>
                    <input type="text" name="user_name" className="bg-transparent outline outline-1 mt-1 mb-2 py-1 rounded-lg w-full"/>
                    <label>Email</label>
                    <input type="email" name="user_email" className="bg-transparent outline outline-1 mt-1 mb-2 py-1 rounded-lg w-full"/>
                    <label>Message</label>
                    <textarea name="message" className="bg-transparent outline outline-1 mt-1 py-1 rounded-lg w-full" />
                    <input type="submit" value="Send" className='py-1 px-10 rounded-md mt-5 bg-gradient-to-r from-blue-500 to-pink-500 text-white' />
                </form>
                <ToastContainer position='top-center'></ToastContainer>
            </div>
        </div>
    );
};

export default Contact;