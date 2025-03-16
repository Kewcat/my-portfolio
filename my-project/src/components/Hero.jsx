import React from 'react'
import profilePic from '/src/assets/space.gif'
const Hero =() => {
    return(
        <div className='pb-4 lg:mb-36'>
            <div className='flex flex-wrap lg:flex-row-reverse'> 
                <div className="w-full lg:w-1/2">
                <div className='flex justify-center lg:p-8'>
                    <img src={profilePic} alt="space" className='border border-stone-900 rounded-3xl'></img> </div>
                </div>
                <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start mt-10'>
                    <h2 className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Khushi Doval</h2>
                    <span className='bg-gradient-to-r from-stone-200 to-stone-600 bg-clip-text text-3xl tracking-tight
                    text-transparent'> Data Scientist
                    </span>
                    <p className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
                    I thrive on solving complex problems with data and uncovering insights that drive real impact. With a strong foundation in Python, Java, and machine learning, I enjoy working at the intersection of AI, analytics, and software development.
Currently, I’m seeking internship opportunities to apply my skills in data science, AI, and cloud computing, while learning from hands-on experience. I believe in continuous growth, collaboration, and building solutions that matter.
Let’s connect and explore opportunities to create something meaningful!
                    </p>
                    <a href= "/resume.pdf" target="_blank" rel="noopener noreferrer" download className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'>
                    Download my resume</a>
                </div>
                </div>
                </div> 
                </div>
    )
}

export default Hero