import React from 'react';
import classNames from 'classnames';

import { Button, TopBar, SocialMedia, Player } from './components';
import { infoData } from './assets/info';
import { Info } from './interfaces';

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
        <div className='mt-[10vh] ml-[20%]'>
          <div className='text-highlight'>Hi, my name is</div>
          <div className='text-[70px] font-semibold text-title'>Daria Grishaeva</div>
          <div className='text-text mb-12'>I'm a 
            <span className='text-highlight'> Frontend Developer</span> experienced in React, Angular, and microfrontends. 
            <div>UI/UX is my jam – I thrive on creating awesome user experiences. </div>
            Agile-driven and always learning. 
            <div>Let's build something amazing together! 🚀</div>
          </div>
          <Button onClick={contactClick}>Contact Me</Button>
        </div>

        <div className='mt-[60vh] ml-[20%]' id='About'>
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

        <div className='mt-[60vh] mx-auto' id='Projects'>
          <div className='text-title font-semibold text-[32px] ml-[20%] mb-3'>Projects</div>
          <div className='grid grid-cols-3 max-w-[80vw] h-full mx-auto gap-8'>
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
