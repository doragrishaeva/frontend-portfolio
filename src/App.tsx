import React from 'react';
import classNames from 'classnames';

import { Button, TopBar, SocialMedia, Player } from './components';
import { infoData } from './assets/info';
import { Info } from './interfaces';

import './App.scss';

export const App: React.FC = () => {
  const [data, setData] = React.useState<Info|null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setData(infoData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const contactClick = () => {
    const link = 'mailto:d.grishaevaa@gmail.com';
    window.open(link);
  };

  return (
    <div className='bg-bg'>
      <TopBar></TopBar>
      <div>
        <div className='mt-[10vh] sm:mx-[10%] md:mx-[5%] lg:mx-[20%]'>
          <div className='text-highlight'>Hi, my name is</div>
          <div className='sm:text-[32px] md:text-[70px] font-semibold text-title typing-element'>Daria Grishaeva</div>
          <div className='text-text mb-12'>I'm a 
            <span className='text-highlight'> Frontend Developer</span> experienced in React, Angular, and microfrontends. 
            <div>UI/UX is my jam – I thrive on creating awesome user experiences. </div>
            Agile-driven and always learning. 
            <div>Let's build something amazing together! <div className="rocket-icon"></div></div>
          </div>
          <Button onClick={contactClick}>Contact Me</Button>
        </div>

        <div className='mt-[60vh] sm:mx-[10%] md:mx-[5%] lg:mx-[20%]' id='About'>
          <div className='text-title font-semibold text-[32px]'>About</div>
          <div>
            <div className='text-text mb-3'>Here are few <span className='text-highlight'>technologies</span> I work with:</div>
            {data?.technologies.map(tech => {
              return <div key={tech.id} className='text-text text-sm mb-1'>
                <span className='font-semibold before:content-["▹"] before:text-highlight before:mr-2'>{tech.name}: </span>
                <span>{tech.items.join(', ')}</span>
              </div>
            })}
          </div>
          <div className='text-text mt-3'>
            <div>I worked as a</div>
            {data?.experience.map(experience => {
              return (
                <div className='text-sm' key={experience.id}>
                  <span className='text-highlight'>{experience.position}</span>  at 
                  <span className={classNames('text-highlight', { 'cursor-pointer': experience.link })}>
                  {experience.link ? <a href={experience.link} target='_blank'> {experience.company}</a> : <span> {experience.company}</span>}</span>,
                  <span> {experience.country}</span>
                  <div><span className='text-highlight'>Stack: </span>{experience.tech.join(', ')}</div>
                  <div>{experience.dates}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div className='mt-[60vh] sm:mx-[10%] md:mx-[5%] lg:mx-[10%]' id='Projects'>
          <div className='text-title font-semibold text-[32px] mb-3'>Projects</div>
          <div className='text-text text-sm mb-6'>
            <div className='text-highlight'>Welcome to my projects section!</div>
            Here, you'll find a collection of works that I passionately crafted during 2020-2021.<br /> 
            While these projects showcase my skills and creativity during that period, please note that they might be a bit outdated as my journey in tech continues to evolve. <br />
            I'm currently cooking up something bigger and even more exciting! <br />
            Stay tuned for what's next, and thank you for exploring my portfolio.<br />
          </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[80vw] h-full mx-auto gap-8'>
            {data?.projects.map(project => {
              return (<div key={project.id}>
                <Player videoLink={project.video} repoLink={project.github}></Player>
              </div>)
            })}
          </div>
        </div>
      </div>
      <SocialMedia items={data?.socialMedia}></SocialMedia>
    </div>
  )
}
