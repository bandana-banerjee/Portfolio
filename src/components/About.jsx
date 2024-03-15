import React from 'react'
import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section className='bg-white py-20' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutSvg} className='w-full h-64' />
                <article>
                    <SectionTitle text='code and coffee' />
                    <p className='text-slate-600 mt-8 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam adipisci tempore tempora hic voluptatum iusto nobis eaque, similique, aliquam fugit, assumenda facere praesentium ipsa cupiditate veniam officia dolor? Asperiores.</p>
                </article>
            </div>
        </section>
    )
}

export default About