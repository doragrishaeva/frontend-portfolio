import React from 'react';
import classNames from 'classnames';
import CV from '../../assets/CV.pdf';

import { Button } from '../Button/Button';

interface TopBarTab {
  id: number;
  value: string;
}

export const TopBar: React.FC = () => {
  const tabs: TopBarTab[] = [
    { id: 1, value: 'About' },
    { id: 2, value: 'Projects' }
  ];
  const [activeTab, setActiveTab] = React.useState<number>(null);
  const observer = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    const options: any = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = tabs.find(tab => tab.value === entry.target.id).id;
          setActiveTab(currentId);
        } else {
          setActiveTab(null);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, options);

    tabs.forEach((tab) => {
      const element = document.getElementById(tab.value);
      if (element) {
        observer.current.observe(element);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const goToSection = (value: string) => {
    const targetElement = document.getElementById(value);

    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top;
      const headerOffset = 50;
      const totalOffset = offsetTop + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: totalOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='sm:invisible md:visible flex w-96 ml-auto justify-between items-center mr-12 py-6 sticky top-0'>
      {tabs.map((tab) => {
        return (
          <div key={tab.id} className={classNames('uppercase cursor-pointer transition-[color] duration-300 ease-in-out hover:text-highlight', { 'text-highlight': tab.id === activeTab, 'text-title': tab.id !== activeTab })} onClick={() => goToSection(tab.value)}>{tab.value}</div>
        )
      })}
      <Button onClick={() => window.open(CV, '_blank')}>CV</Button>
    </div>
  )
}