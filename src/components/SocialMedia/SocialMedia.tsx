import React from 'react';

import { SocialMediaItem } from '../../interfaces';
import './SocialMedia.scss';

interface ISocialMedia {
  items: SocialMediaItem[];
}

export const SocialMedia: React.FC<ISocialMedia> = ({ items }) => {

  return (
    <div className='flex lg:flex-col h-[150px] justify-between lg:sticky lg:bottom-10 lg:ml-10 sm:mt-16 sm:w-[50%] md:w-[30%] sm:mx-auto'>
      {items?.map(item => {
        return (
          <a href={item.link} target="_blank"  key={item.id} className='social-media-icon bg-title hover:bg-highlight cursor-pointer transition-[background-color] duration-300 ease-in-out w-[25px] h-[25px]'></a>
        )
      })}
    </div>
  )
}