import React from 'react';
import classNames from 'classnames';

import './Player.scss';

interface Player {
  videoLink: string;
  repoLink: string;
}

export const Player: React.FC<Player> = ({ videoLink, repoLink }) => {
  const [isPlaying, setIsPLaying] = React.useState(false);

  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const videoElement = videoRef.current;

    const playVideo = () => {
      if (videoElement) {
        videoElement.currentTime = 2;
        videoElement.play();
        videoElement.playbackRate = 1.5;
        videoElement.loop = true;
        setIsPLaying(true);
      }
    };

    const stopVideo = () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
        setIsPLaying(false);
      }
    };

    videoElement?.addEventListener('mouseenter', playVideo);
    videoElement?.addEventListener('mouseleave', stopVideo);

    return () => {
      videoElement?.removeEventListener('mouseenter', playVideo);
      videoElement?.removeEventListener('mouseleave', stopVideo);
    };
  }, []);


  return (
    <div className='relative cursor-pointer aspect-video' onClick={() => window.open(repoLink, '_blank')}>
      <div className={classNames('absolute top-0 left-0 w-full h-full z-10 pointer-events-none rounded-xl transition-all duration-300 ease-in-out', {'bg-[#000000]/20 shadow-md': !isPlaying, 'bg-[#ffffff]/0.1 shadow-lg': isPlaying })}></div>
      {videoLink ? <video
        muted
        loop
        ref={videoRef}
        className='w-full h-auto rounded-xl block z-0 absolute top-0 left-0'
      >
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video> : <div className='animated-gradient rounded-xl cursor-default'></div>}
    </div>
  )
}