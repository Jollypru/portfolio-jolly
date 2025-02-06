import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ heading }) => {
    return (
        <div>
            <motion.div
                
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h1 className='text-5xl lg:text-6xl mt-8 mb-4  bg-gradient-to-r from-pink-500 via-purple-600 to-purple-800 text-transparent bg-clip-text '>{heading}</h1>
            </motion.div>
        </div>
    );
};

export default SectionTitle;