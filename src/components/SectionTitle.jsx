import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div>
            <h1 className='text-6xl mt-8 mb-4  bg-gradient-to-r from-pink-500 via-purple-600 to-purple-800 text-transparent bg-clip-text '>{heading}</h1>
        </div>
    );
};

export default SectionTitle;