
import React from 'react';
import { Play } from '../types';

interface Props {
  play: Play;
  onClick: () => void;
}

const TicketCard: React.FC<Props> = ({ play, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="ticket-cutout relative flex w-full border-3 border-midnight bg-offWhite cursor-pointer hover:border-magentaEnergy transition-colors group mb-6"
    >
      <div className="w-1/4 md:w-32 bg-bogotaTeal border-r-3 border-midnight p-6 flex flex-col items-center justify-center text-center">
        <span className="display-font text-3xl font-black leading-none">{play.date.split(' ')[1]}</span>
        <span className="display-font text-sm font-bold">{play.date.split(' ')[0]}</span>
        <div className="w-8 h-1 bg-midnight my-2"></div>
        <span className="display-font text-xs font-bold">{play.time}</span>
      </div>

      <div className="flex-grow p-6 flex flex-col justify-center">
        <h3 className="display-font text-2xl md:text-3xl font-black group-hover:text-magentaEnergy transition-colors">
          {play.title}
        </h3>
        <p className="text-lg font-semibold text-midnight/70">{play.venue}</p>
      </div>

      <div className="hidden md:flex w-48 border-l-3 border-dashed border-midnight p-6 flex-col items-center justify-center gap-2">
        <span className="bg-midnight text-offWhite px-3 py-1 text-xs font-bold">{play.genre}</span>
        <button className="bg-sunOrange border-3 border-midnight px-4 py-1 display-font text-xs font-black">
          {play.genre.includes('CALLE') ? 'GRATIS' : play.isBarter ? 'TRUEQUE' : 'ENTRADA $30k'}
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
