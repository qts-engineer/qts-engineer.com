import React from 'react';
import aboutImg from '../images/about/about.jpg';
import { Skills } from './Skills';

export const About = () => {
  return (
    <section id="about" className="section about">
      <div className="section-title">
        <h2>
          <span>about</span> me
        </h2>
        <div className="underline"></div>
      </div>

      <div className="section-center about-center">
        {/* about-img  */}
        <article>
          <div className="about-img">
            <img
              src={aboutImg}
              alt="QTS-Engineer"
              className="about-image"
              loading="lazy"
            />
          </div>
        </article>

        <article className="about-info">
        <p>
          {/* text */}
          <strong>A Full Stack Engineer</strong> with over{' '}
          <strong>9 years of experience</strong> building scalable, modern applications across{' '}
          <strong>C#/.NET, TypeScript, JavaScript and it's performant frameworks including React, Vue, Angular and PHP/Laravel, Node, ASP.NET,</strong> and{' '}
          <strong>Python</strong>. Over the years, I've delivered <strong>120+ projects</strong> from
          e-commerce platforms and CRUD apps to production-level client systems and I love transforming
          legacy systems into fast, clean, high-performing applications using solid engineering practices,
          <strong> Agile methodologies</strong>, and strong <strong>team collaboration</strong>.
          <br />
          <br />
          I've worked across <strong>e-commerce, SaaS, fintech, and healthcare</strong>, always focused on
          shipping real-world value and building software that feels great to use while solving meaningful
          problems. Whether it's modernizing outdated systems or architecting new ones, I enjoy partnering
          with cross-functional teams, working iteratively, and delivering solutions that scale.
          <br />
          <br />
          Outside of coding, I'm probably overanalyzing films, debating IMDb scores, watching cricket, or
          trying to convince Rocket League teammates that the lag was real. And yes, {' '}
          <strong>Trevor from GTA is absolutely misunderstood.</strong>
        </p>


          {/* stack */}
          <Skills />
        </article>
      </div>
    </section>
  );
};
