
import React from 'react';
import { Page } from '../types';

interface Props {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navigation: React.FC<Props> = ({ currentPage, setPage }) => {
  return (
    <nav className="sticky top-0 z-50 bg-offWhite border-b-6 border-midnight px-6 py-4 flex justify-between items-center">
      <div
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => setPage('home')}
      >
        <img src="/logo-ruta-teatro.png" alt="Ruta Teatro Logo" className="h-[40px] w-auto transition-transform group-hover:scale-105" />
      </div>

      <div className="hidden md:flex items-center gap-8">
        <button
          onClick={() => setPage('home')}
          className={`display-font text-lg font-bold hover:text-magentaEnergy transition-colors ${currentPage === 'home' ? 'underline decoration-sunOrange decoration-4' : ''}`}
        >
          INICIO
        </button>
        <button
          onClick={() => setPage('billboard')}
          className={`display-font text-lg font-bold hover:text-bogotaTeal transition-colors ${currentPage === 'billboard' ? 'underline decoration-magentaEnergy decoration-4' : ''}`}
        >
          CARTELERA
        </button>
        <button className="display-font text-lg font-bold hover:text-festPurple transition-colors">MAPA</button>
        <button className="display-font text-lg font-bold hover:text-salmonPink transition-colors">NOSOTROS</button>
      </div>

      <button
        onClick={() => setPage('billboard')}
        className="bg-festPurple text-offWhite border-3 border-midnight px-6 py-2 display-font font-black hover:bg-magentaEnergy transition-all hover:-translate-y-1 active:translate-y-0"
      >
        TICKETS
      </button>
    </nav>
  );
};

export default Navigation;
