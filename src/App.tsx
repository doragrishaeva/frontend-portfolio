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
      <div className='bg-bg sticky top-0 sm:invisible md:visible z-[100]'>
        <TopBar></TopBar>
      </div>
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

        <div className='mt-[60vh] sm:mx-[10%] md:mx-[5%] lg:mx-[10%]' id='Pet Projects'>
          <div className='text-title font-semibold text-[32px] mb-3'>Pet Projects</div>
          <div className='text-text text-sm mb-6'>
            <div className='flex sm:flex-col lg:flex-row items-center gap-x-4 mb-4'>
              <div className='basis-1/2'>
              <div className='text-highlight'>Welcome to my pet projects section!</div>
                Explore the early drafts of my latest project, currently in progress.<br />
                This project gives you a sneak peek into the early ideas and sketches that are guiding its creation and I'm excited to share it with you. <br />
                Your thoughts and feedback are welcome as we move forward. Keep an eye out for more updates! <br />
              </div>
              <a href={data?.new?.link} target="_blank" className='sm:w-full lg:basis-1/2'>
                <div className='rounded-xl my-8 relative h-[50vh] w-full bg-no-repeat bg-cover bg-left' 
                    style={{ backgroundImage: `url(${data?.new?.image})` }}>
                  <div className='overlay-text'></div>
                </div>
              </a>
            </div>

            Below you'll find a collection of works that I passionately crafted during <span className='text-highlight'>2020-2021.</span><br /> 
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
