
import React from 'react';
import { Play } from '../types';

interface Props {
  play: Play;
  onClick: () => void;
}

const PlayCard: React.FC<Props> = ({ play, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative group cursor-pointer border-3 border-midnight ${play.color} transition-transform hover:-translate-y-2 flex flex-col`}
    >
      <div className="relative overflow-hidden aspect-[4/5] border-b-3 border-midnight">
        <img 
          src={play.image} 
          alt={play.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-midnight text-offWhite px-3 py-1 display-font text-xs font-bold border-2 border-offWhite">
          {play.genre}
        </div>
      </div>
      
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="display-font text-2xl font-black leading-none mb-2 group-hover:text-offWhite transition-colors">
          {play.title}
        </h3>
        <p className="text-sm font-bold uppercase opacity-80 group-hover:text-offWhite transition-colors">
          {play.venue}
        </p>
      </div>
    </div>
  );
};

export default PlayCard;
