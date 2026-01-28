
import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import TicketCard from './components/TicketCard';
import { PLAYS, AGRUPACIONES, CENTRAL_BOX_OFFICE_PHONE, EyeIcon, SmileIcon } from './constants';
import { Page, Play, Agrupacion } from './types';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-19T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 md:gap-4 mt-6">
      {[
        { label: 'DÍAS', value: timeLeft.days },
        { label: 'HORAS', value: timeLeft.hours },
        { label: 'MIN', value: timeLeft.minutes },
        { label: 'SEG', value: timeLeft.seconds }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="bg-midnight text-offWhite border-3 border-offWhite w-12 h-12 md:w-20 md:h-20 flex items-center justify-center shadow-[4px_4px_0px_0px_#e40b59]">
            <span className="display-font text-xl md:text-4xl font-black">{item.value.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-[8px] md:text-[10px] font-black mt-2 text-midnight bg-sunOrange px-1">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPlay, setSelectedPlay] = useState<Play | null>(null);
  const [selectedAgrupacion, setSelectedAgrupacion] = useState<Agrupacion | null>(null);
  const [filterGenre, setFilterGenre] = useState<string>('ALL');
  const [filterDate, setFilterDate] = useState<string>('ALL');
  const [isMapZoomed, setIsMapZoomed] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      logoRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${-2 + x / 10}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handlePlaySelect = (play: Play) => {
    setSelectedPlay(play);
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  };

  const handleAgrupacionSelect = (group: Agrupacion) => {
    setSelectedAgrupacion(group);
    setCurrentPage('agrupacion_detail');
    window.scrollTo(0, 0);
  };

  const handleWhatsAppBooking = (play: Play, type: string = "General") => {
    const group = AGRUPACIONES.find(g => g.id === play.collectiveId);
    if (!group) return;

    const message = encodeURIComponent(`Hola, me gustaría reservar entradas para la obra "${play.title}" del grupo ${group.name} (${play.date} a las ${play.time}). Me interesa la opción: ${type}. ¿Cómo puedo proceder con el pago?`);
    const whatsappUrl = `https://wa.me/${CENTRAL_BOX_OFFICE_PHONE}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGeneralBooking = (product: string) => {
    const message = encodeURIComponent(`Hola, estoy interesado en comprar: ${product}. ¿Cómo puedo proceder con el pago?`);
    const whatsappUrl = `https://wa.me/${CENTRAL_BOX_OFFICE_PHONE}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const genres = ['ALL', ...new Set(PLAYS.map(p => p.genre))];
  const festivalDates = ['FEB 19', 'FEB 20', 'FEB 21', 'FEB 22'];
  const dayNamesShort = ['JUE', 'VIE', 'SÁB', 'DOM'];

  const filteredPlays = PLAYS.filter(p => {
    const matchesGenre = filterGenre === 'ALL' || p.genre === filterGenre;
    const matchesDate = filterDate === 'ALL' || p.date === filterDate;
    return matchesGenre && matchesDate;
  });

  const mainCollectives = AGRUPACIONES.slice(0, 5);
  const invitedGroups = AGRUPACIONES.slice(5);

  return (
    <div className="min-h-screen selection:bg-magentaEnergy selection:text-offWhite bg-offWhite">
      <Navigation currentPage={currentPage} setPage={setCurrentPage} />

      <main>
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-700">
            {/* HERO SECTION */}
            <section className="relative h-screen bg-midnight overflow-hidden flex flex-col md:flex-row border-b-6 border-midnight">
              <div className="flex-grow flex h-full">
                {[
                  { d: '19', name: 'JUEVES', color: 'bg-bogotaTeal', img: AGRUPACIONES[0].image },
                  { d: '20', name: 'VIERNES', color: 'bg-festPurple', img: AGRUPACIONES[1].image },
                  { d: '21', name: 'SÁBADO', color: 'bg-sunOrange', img: AGRUPACIONES[2].image },
                  { d: '22', name: 'DOMINGO', color: 'bg-magentaEnergy', img: AGRUPACIONES[3].image }
                ].map((item, i) => (
                  <div
                    key={i}
                    onClick={() => { setFilterDate(`FEB ${item.d}`); setCurrentPage('billboard'); }}
                    className={`relative flex-1 group cursor-pointer overflow-hidden border-r-3 border-midnight transition-all duration-500 ease-out hover:flex-[1.5] ${item.color}`}
                  >
                    <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-multiply" alt="" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="display-font text-offWhite text-xl font-bold -rotate-90 md:rotate-0 mb-4 opacity-60">{item.name}</span>
                      <span className="display-font text-offWhite text-7xl md:text-9xl font-black">{item.d}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-20">
                <div
                  ref={logoRef}
                  className="bg-offWhite p-10 md:p-16 border-8 border-midnight shadow-[12px_12px_0px_0px_#f59d2d] transform transition-transform duration-75 flex flex-col items-center"
                  style={{ transform: 'rotate(-2deg)' }}
                >
                  <img src="/logo-ruta-teatro.png" alt="Ruta 2026 Logo" className="w-[300px] md:w-[600px] h-auto mb-8" />

                  <div className="pointer-events-auto mt-4">
                    <p className="text-xs font-black text-center text-midnight opacity-60 tracking-[0.3em]">Inicio de presentaciones de circuito 3 en:</p>
                    <Countdown />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-midnight py-4 border-t-6 border-offWhite overflow-hidden whitespace-nowrap z-30">
                <div className="animate-marquee inline-block">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className="display-font text-2xl font-black text-offWhite mx-8">
                      BOGOTÁ ES UN ESCENARIO • BOGOTÁ IS A STAGE •
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* VALORES DE BOLETERIA SECTION */}
            <section className="bg-sunOrange py-24 px-6 border-b-6 border-midnight">
              <div className="max-w-7xl mx-auto">
                <h2 className="display-font text-5xl md:text-8xl font-black mb-16 text-midnight leading-[0.8]">
                  VALORES DE <br /> <span className="text-offWhite">BOLETERÍA</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-offWhite border-4 border-midnight p-8 flex flex-col justify-between hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_#2A3535]">
                    <div>
                      <h3 className="display-font text-3xl font-black mb-4">ENTRADA INDIVIDUAL</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-end border-b-2 border-midnight pb-2">
                          <span className="font-bold">GENERAL</span>
                          <span className="display-font text-2xl font-black">$30.000</span>
                        </div>
                        <div className="flex justify-between items-end border-b-2 border-midnight pb-2 opacity-70">
                          <span className="font-bold">ESTUDIANTES / ADULTOS</span>
                          <span className="display-font text-2xl font-black">$20.000</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <p className="text-sm font-bold opacity-60 italic mb-2">* Válido para una función en cualquier sala de la alianza.</p>
                      <p className="text-sm font-black text-magentaEnergy uppercase">Ve a cartelera y elige la obra que quieras ver.</p>
                    </div>
                  </div>

                  <div className="bg-midnight text-offWhite border-4 border-midnight p-8 flex flex-col justify-between hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_#e40b59]">
                    <div>
                      <div className="bg-magentaEnergy text-offWhite inline-block px-3 py-1 display-font text-xs font-black mb-4">TIQUETERA OFICIAL</div>
                      <h3 className="display-font text-3xl font-black mb-4 text-sunOrange">PASAPORTE CENTRO-PERIFERIA</h3>
                      <p className="text-sm font-bold leading-tight mb-6 opacity-80">
                        La tiquetera oficial de la ruta. Incluye 4 funciones (una en cada sala de la alianza) por un valor total de $60.000 ($15.000 c/u).
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="display-font text-5xl font-black">$60.000</span>
                      </div>
                    </div>
                    <button onClick={() => handleGeneralBooking("Pasaporte Centro-Periferia")} className="mt-8 bg-sunOrange text-midnight w-full py-3 display-font font-black hover:bg-magentaEnergy hover:text-offWhite transition-colors">COMPRAR PASAPORTE</button>
                  </div>

                  <div className="bg-bogotaTeal border-4 border-midnight p-8 flex flex-col justify-between hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_#2A3535]">
                    <div>
                      <h3 className="display-font text-3xl font-black mb-4 text-midnight">PROMO: SOMOS 5</h3>
                      <p className="text-sm font-bold leading-tight mb-6 text-midnight/80">
                        Al adquirir 5 boletas para una misma función, el valor total es de $75.000. ¡Teatro para el parche completo!
                      </p>
                      <button onClick={() => handleGeneralBooking("Promo Somos 5")} className="text-left w-full hover:bg-midnight/10 transition-colors p-2 -ml-2 rounded">
                        <span className="display-font text-5xl font-black text-midnight underline decoration-midnight">$75.000</span>
                      </button>
                    </div>
                    <button onClick={() => handleGeneralBooking("Promo Somos 5")} className="mt-8 bg-midnight text-offWhite w-full py-3 display-font font-black hover:bg-magentaEnergy hover:text-offWhite transition-colors">COMPRAR PROMO</button>

                  </div>
                </div>

                <div className="mt-12 text-center border-t-4 border-midnight/10 pt-8">
                  <p className="text-lg font-bold text-midnight/80">
                    <span className="font-black uppercase text-midnight">★ ENTRADA QUE CIRCULA:</span> Cualquier boleta puede donarse a instituciones educativas inscritas.
                  </p>
                </div>
              </div>
            </section>

            {/* COLECTIVOS SECTION */}
            <section className="px-6 py-24 bg-offWhite overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                  <h2 className="display-font text-5xl md:text-8xl font-black leading-[0.85] tracking-normal text-midnight">
                    NUESTROS <br /> <span className="text-magentaEnergy">COLECTIVOS</span>
                  </h2>
                  <p className="max-w-md font-bold text-lg opacity-60 border-l-4 border-sunOrange pl-6 text-midnight">
                    Las mentes maestras que transforman la realidad en drama, comedia y reflexión sobre las tablas bogotanas.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-32">
                  {mainCollectives.map((group, i) => (
                    <div
                      key={group.id}
                      onClick={() => handleAgrupacionSelect(group)}
                      className={`group relative cursor-pointer border-4 border-midnight overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-[16px_16px_0px_0px_#2A3535] h-[500px] ${i % 2 !== 0 ? 'md:mt-12' : ''}`}
                    >
                      <img src={group.image} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" alt="" />
                      <div className={`absolute inset-0 ${group.color} mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                      <div className="absolute inset-0 flex flex-col justify-end p-8 text-offWhite">
                        <div className="translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                          <span className="display-font text-xs font-black bg-midnight text-offWhite px-2 py-1 mb-4 inline-block tracking-widest uppercase">{group.location}</span>
                          <h3 className="display-font text-4xl font-black leading-none mb-4 uppercase">{group.name}</h3>
                          <p className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">
                            {group.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* INVITADOS MOSAIC */}
                <div className="bg-midnight -mx-6 px-6 py-24 border-y-8 border-sunOrange">
                  <div className="max-w-7xl mx-auto">
                    <h3 className="display-font text-3xl md:text-5xl font-black mb-12 text-offWhite flex items-center gap-4">
                      <div className="h-1 flex-grow bg-magentaEnergy" />
                      INVITADOS DE HONOR
                      <div className="h-1 flex-grow bg-magentaEnergy" />
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {invitedGroups.map((group) => (
                        <div
                          key={group.id}
                          onClick={() => handleAgrupacionSelect(group)}
                          className={`group relative aspect-square cursor-pointer border-3 border-offWhite overflow-hidden transition-all duration-300 hover:rotate-1 hover:scale-105 active:scale-95 ${group.color.replace('bg-', 'bg-opacity-20 ')}`}
                        >
                          <img src={group.image} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={group.name} />
                          <div className="absolute inset-0 bg-midnight/40 group-hover:bg-transparent transition-colors" />

                          <div className="absolute bottom-0 left-0 w-full p-4 bg-offWhite translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t-3 border-midnight">
                            <h4 className="display-font text-xs font-black leading-none text-midnight mb-1 line-clamp-1 uppercase">{group.name}</h4>
                            <p className="text-[10px] font-black text-magentaEnergy uppercase tracking-widest">Ver Detalles</p>
                          </div>

                          <div className="absolute top-2 right-2 bg-sunOrange text-midnight display-font text-[8px] font-black px-1.5 py-0.5 border-2 border-midnight -rotate-12 group-hover:rotate-0 transition-transform">
                            2026
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'agrupacion_detail' && selectedAgrupacion && (
          <div className="animate-in fade-in duration-500 pb-20 text-midnight">
            <section className={`${selectedAgrupacion.color} border-b-6 border-midnight py-20 px-6`}>
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h1 className="display-font text-6xl md:text-9xl font-black text-midnight leading-none mb-6 uppercase">
                    {selectedAgrupacion.name}
                  </h1>
                  <p className="display-font text-xl font-bold bg-midnight text-offWhite inline-block px-4 py-2">
                    BOGOTÁ • {selectedAgrupacion.location}
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="border-6 border-midnight rotate-3 group hover:rotate-0 transition-transform bg-offWhite overflow-hidden shadow-[12px_12px_0px_0px_#2A3535]">
                    <img src={selectedAgrupacion.image} alt={selectedAgrupacion.name} className="w-full h-auto grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                </div>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-20">
                <div className="border-l-6 border-sunOrange pl-8">
                  <h2 className="display-font text-4xl font-black mb-8 uppercase text-midnight">NUESTRA HISTORIA</h2>
                  <p className="text-xl md:text-2xl font-semibold leading-relaxed text-midnight/80">
                    {selectedAgrupacion.fullHistory}
                  </p>
                </div>

                {/* VIDEO SECTION FOR MAIN COLLECTIVES */}
                {selectedAgrupacion.podcastUrl && (
                  <div className="bg-midnight p-8 md:p-12 border-6 border-midnight relative shadow-[16px_16px_0px_0px_#f59d2d]">
                    <div className="absolute -top-6 -right-6 bg-magentaEnergy text-offWhite p-4 border-4 border-midnight hidden md:block animate-bounce">
                      <EyeIcon />
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-0.5 flex-grow bg-offWhite/30" />
                      <h3 className="display-font text-2xl md:text-4xl font-black text-offWhite">VIDEO BITÁCORA</h3>
                      <div className="h-0.5 flex-grow bg-offWhite/30" />
                    </div>
                    <div className="aspect-video w-full bg-black border-4 border-offWhite overflow-hidden relative group">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={selectedAgrupacion.podcastUrl}
                        title={`${selectedAgrupacion.name} Video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <div className="absolute top-4 left-4 bg-magentaEnergy text-white text-[10px] font-black px-2 py-1 flex items-center gap-2 border-2 border-midnight">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        LIVE SESSION
                      </div>
                    </div>
                    <p className="mt-6 text-offWhite/60 text-xs font-bold uppercase tracking-widest text-center">
                      Explora el proceso creativo de {selectedAgrupacion.name}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-12">
                <h2 className="display-font text-4xl font-black border-b-6 border-midnight pb-4 text-midnight uppercase">OBRAS EN RUTA</h2>
                <div className="space-y-6">
                  {PLAYS.filter(p => p.collectiveId === selectedAgrupacion.id).map(play => (
                    <div key={play.id} onClick={() => handlePlaySelect(play)} className="group cursor-pointer border-3 border-midnight bg-offWhite hover:bg-magentaEnergy transition-colors p-4 shadow-[4px_4px_0px_0px_#2A3535] hover:shadow-none translate-x-0 hover:translate-x-1 transition-all">
                      <h4 className="display-font text-xl font-black leading-tight group-hover:text-offWhite uppercase">{play.title}</h4>
                      <p className="text-xs font-bold uppercase opacity-60 group-hover:text-offWhite/80">{play.date} • {play.time}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-sunOrange p-6 border-4 border-midnight mt-12 shadow-[8px_8px_0px_0px_#2A3535]">
                  <h4 className="display-font text-lg font-black mb-2 uppercase">UBICACIÓN</h4>
                  <p className="font-black text-sm mb-1">{selectedAgrupacion.location}</p>
                  <p className="font-bold text-xs mb-6 opacity-80 uppercase tracking-tighter">{selectedAgrupacion.address}</p>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => window.open(selectedAgrupacion.mapsLink, '_blank')}
                      className="w-full bg-midnight text-offWhite py-3 display-font text-xs font-black hover:bg-magentaEnergy transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                      GOOGLE MAPS
                    </button>
                    {mainCollectives.some(m => m.id === selectedAgrupacion.id) && (
                      <button
                        onClick={() => {
                          if (selectedAgrupacion.id === 'terceracto') {
                            window.open('https://terceracto.com/', '_blank');
                          } else if (selectedAgrupacion.id === 'changua') {
                            window.open('https://changuamedia.com/', '_blank');
                          } else if (selectedAgrupacion.id === 'occidente') {
                            window.open('https://www.instagram.com/teatro_occidente?igsh=MW1ieGo5bXBjc3R6aQ==', '_blank');
                          } else if (selectedAgrupacion.id === 'vargastejada') {
                            window.open('https://www.instagram.com/vargastejada_teatro_ficstorico?igsh=a3h0cm9ndXYzbGsx', '_blank');
                          } else {
                            const message = encodeURIComponent(`Hola ${selectedAgrupacion.name}, vi su perfil en la Ruta del Teatro 2026 y me interesa conocer más sobre su trabajo.`);
                            window.open(`https://wa.me/${selectedAgrupacion.whatsapp}?text=${message}`, '_blank');
                          }
                        }}
                        className="w-full bg-offWhite border-3 border-midnight text-midnight py-3 display-font text-xs font-black hover:bg-midnight hover:text-offWhite transition-colors"
                      >
                        CONTACTAR COLECTIVO
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'billboard' && (
          <div className="animate-in slide-in-from-bottom duration-500 max-w-7xl mx-auto px-6 py-16">
            <header className="mb-12 border-b-6 border-midnight pb-12 text-midnight">
              <h1 className="display-font text-6xl md:text-8xl font-black mb-12 leading-none">CARTELERA</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="display-font text-xl font-black mb-4">FECHA DEL FESTIVAL</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setFilterDate('ALL')}
                      className={`px-4 py-4 border-3 display-font font-black transition-all border-midnight ${filterDate === 'ALL' ? 'bg-midnight text-offWhite' : 'bg-offWhite'}`}
                    >
                      TODOS
                    </button>
                    {festivalDates.map((date, i) => (
                      <button
                        key={date}
                        onClick={() => setFilterDate(date)}
                        className={`flex-1 p-4 border-3 transition-all flex flex-col items-center justify-center border-midnight
                          ${filterDate === date ? 'bg-sunOrange shadow-[4px_4px_0px_0px_#2A3535]' : 'bg-offWhite'}`}
                      >
                        <span className="text-xs font-bold leading-none">{dayNamesShort[i]}</span>
                        <span className="text-3xl font-black">{date.split(' ')[1]}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="display-font text-xl font-black mb-4">CATEGORÍAS</h3>
                  <div className="flex flex-wrap gap-2">
                    {genres.map(genre => (
                      <button
                        key={genre}
                        onClick={() => setFilterGenre(genre)}
                        className={`px-6 py-3 border-3 transition-all display-font text-xs font-bold border-midnight
                          ${filterGenre === genre ? 'bg-midnight text-offWhite border-magentaEnergy' : 'bg-offWhite'}`}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </header>
            <div className="space-y-12">
              {festivalDates.filter(d => filterDate === 'ALL' || d === filterDate).map(date => {
                const datePlays = filteredPlays.filter(p => p.date === date);
                if (datePlays.length === 0) return null;
                return (
                  <div key={date} className="animate-in fade-in duration-500">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="bg-midnight text-offWhite px-6 py-2 display-font text-2xl font-black">
                        {date === 'FEB 19' ? 'JUEVES 19' : date === 'FEB 20' ? 'VIERNES 20' : date === 'FEB 21' ? 'SÁBADO 21' : 'DOMINGO 22'}
                      </div>
                      <div className="flex-grow h-1 bg-midnight"></div>
                    </div>
                    <div className="space-y-6">
                      {datePlays.map(play => (
                        <TicketCard key={play.id} play={play} onClick={() => handlePlaySelect(play)} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {currentPage === 'detail' && selectedPlay && (
          <div className="animate-in fade-in zoom-in duration-500 min-h-screen pb-32 text-midnight">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-6 lg:p-12">
                <div className="relative sticky top-24">
                  <div className={`overflow-hidden border-6 border-midnight ${selectedPlay.color}`}>
                    <img src={selectedPlay.image} alt={selectedPlay.title} className="w-full h-auto block" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-6 lg:p-20 flex flex-col justify-center">
                <button
                  onClick={() => {
                    const group = AGRUPACIONES.find(g => g.id === selectedPlay.collectiveId);
                    if (group) handleAgrupacionSelect(group);
                  }}
                  className="mb-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-midnight/60 hover:text-magentaEnergy transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
                  VOLVER A LA AGRUPACIÓN
                </button>
                <span className="bg-midnight text-offWhite px-4 py-1 self-start display-font text-lg font-bold mb-4">{selectedPlay.genre}</span>
                <h1 className="display-font text-5xl md:text-7xl font-black mb-8 leading-none text-midnight uppercase">{selectedPlay.title}</h1>

                <div className="mb-12 border-l-6 border-sunOrange pl-6">
                  <h3 className="display-font text-lg font-black mb-2 uppercase text-midnight">SINOPSIS</h3>
                  <p className="text-xl leading-relaxed font-semibold">{selectedPlay.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-12">
                  <div className="bg-offWhite border-3 border-midnight p-4 shadow-[4px_4px_0px_0px_#2A3535]">
                    <h4 className="display-font text-[10px] font-black opacity-50 uppercase">LUGAR</h4>
                    <p className="display-font text-sm font-black">{selectedPlay.venue}</p>
                    {/* Add Map Quicklink in Play Detail */}
                    <button
                      onClick={() => {
                        if (selectedPlay.mapsLink) {
                          window.open(selectedPlay.mapsLink, '_blank');
                        } else {
                          const group = AGRUPACIONES.find(g => g.id === selectedPlay.collectiveId);
                          if (group) window.open(group.mapsLink, '_blank');
                        }
                      }}
                      className="mt-2 text-[10px] font-black text-magentaEnergy hover:underline uppercase tracking-widest flex items-center gap-1"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                      CÓMO LLEGAR
                    </button>
                  </div>
                  <div className="bg-offWhite border-3 border-midnight p-4 shadow-[4px_4px_0px_0px_#2A3535]">
                    <h4 className="display-font text-[10px] font-black opacity-50 uppercase">CALIFICACIÓN</h4>
                    <p className="display-font text-sm font-black">{selectedPlay.ageRating}</p>
                  </div>
                </div>

                {selectedPlay.genre.includes('CALLE') ? (
                  <div className="bg-bogotaTeal text-midnight p-8 border-4 border-midnight mb-12 shadow-[8px_8px_0px_0px_#2A3535] text-center">
                    <h3 className="display-font text-5xl font-black mb-4">ENTRADA LIBRE</h3>
                    <p className="font-bold text-lg uppercase tracking-tight">Obra en espacio público / Teatro de calle</p>
                    <p className="mt-4 text-sm font-bold opacity-80">No requiere reserva ni compra de boletería. ¡Te esperamos!</p>
                  </div>
                ) : selectedPlay.isBarter ? (
                  <div className="bg-sunOrange text-midnight p-8 border-4 border-midnight mb-12 shadow-[8px_8px_0px_0px_#2A3535] text-center">
                    <h3 className="display-font text-5xl font-black mb-4 uppercase">ENTRADA POR TRUEQUE</h3>
                    <p className="font-black text-lg uppercase tracking-tight mb-4">EL PAGO DE ESTA OBRA ES POR TRUEQUE</p>
                    <p className="text-sm font-bold opacity-80 mb-6">Trae un aporte significativo para intercambiar por tu entrada. ¡Apoya el arte local!</p>
                    <button
                      onClick={() => handleWhatsAppBooking(selectedPlay, "Información sobre Trueque")}
                      className="w-full bg-midnight text-offWhite border-3 border-midnight px-12 py-4 display-font text-xl font-black hover:bg-[#25D366] transition-colors flex items-center justify-center gap-4"
                    >
                      CONSULTAR TRUEQUE EN WHATSAPP
                    </button>
                  </div>
                ) : (
                  <div className="bg-midnight text-offWhite p-8 border-4 border-midnight mb-12 shadow-[8px_8px_0px_0px_#f59d2d]">
                    <h3 className="display-font text-2xl font-black mb-6 border-b-2 border-offWhite/20 pb-2">VALORES DE ENTRADA</h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded transition-all duration-300" onClick={() => handleWhatsAppBooking(selectedPlay, "Entrada General")}>
                        <div>
                          <p className="font-black text-sunOrange group-hover:underline decoration-2 underline-offset-4 transition-all">ENTRADA GENERAL</p>
                          <span className="text-[10px] opacity-60">Público Mayor de Edad</span>
                        </div>
                        <span className="display-font text-2xl font-black group-hover:scale-110 transition-transform">$30.000</span>
                      </div>

                      <div className="flex justify-between items-center opacity-70 group cursor-pointer hover:opacity-100 hover:bg-white/5 p-2 -mx-2 rounded transition-all duration-300" onClick={() => handleWhatsAppBooking(selectedPlay, "Entrada Estudiante/Adulto")}>
                        <div>
                          <p className="font-black group-hover:underline decoration-2 underline-offset-4 transition-all">ESTUDIANTES / ADULTOS MAYORES</p>
                          <span className="text-[10px] opacity-60">Presentando carné o documento</span>
                        </div>
                        <span className="display-font text-2xl font-black group-hover:scale-110 transition-transform">$20.000</span>
                      </div>

                      <div className="flex justify-between items-center bg-magentaEnergy/20 p-3 border-l-4 border-magentaEnergy group cursor-pointer hover:bg-magentaEnergy/30 transition-all duration-300" onClick={() => handleWhatsAppBooking(selectedPlay, "Promo Somos 5")}>
                        <div>
                          <p className="font-black text-magentaEnergy group-hover:underline decoration-2 underline-offset-4 transition-all uppercase">SOMOS 5 (PROMO GRUPAL)</p>
                          <span className="text-[10px] opacity-60 italic">5 boletas para esta función</span>
                        </div>
                        <span className="display-font text-2xl font-black group-hover:scale-110 transition-transform">$75.000</span>
                      </div>
                    </div>

                    <div
                      className="bg-offWhite/10 p-4 border border-dashed border-offWhite/30 mb-8 cursor-pointer group hover:bg-white/20 transition-all duration-300"
                      onClick={() => handleWhatsAppBooking(selectedPlay, "Pasaporte Centro-Periferia")}
                    >
                      <p className="text-xs font-bold leading-tight uppercase flex justify-between items-center">
                        <span>
                          <span className="text-sunOrange group-hover:underline decoration-2 underline-offset-4 transition-all font-black">PASAPORTE CENTRO-PERIFERIA:</span>
                          <br />
                          <span className="opacity-70">$60.000 / 4 funciones ($15.000 c/u)</span>
                        </span>
                        <span className="text-sunOrange font-black opacity-40 group-hover:opacity-100 transition-opacity">RESERVAR →</span>
                      </p>
                    </div>

                    <button
                      onClick={() => handleWhatsAppBooking(selectedPlay)}
                      className="w-full bg-sunOrange border-3 border-midnight px-12 py-4 display-font text-2xl font-black text-midnight hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center gap-4"
                    >
                      RESERVAR EN WHATSAPP
                    </button>
                  </div>
                )}

                <div className="border-t-4 border-midnight pt-8 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-bogotaTeal flex items-center justify-center shrink-0">
                    <SmileIcon />
                  </div>
                  <div>
                    <h4 className="display-font text-lg font-black text-midnight uppercase leading-none mb-1">ENTRADA QUE CIRCULA</h4>
                    <p className="text-sm font-bold opacity-60">Dona tu boleta a instituciones educativas aliadas y promueve el acceso solidario.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'map' && (
          <div className="animate-in fade-in duration-500 min-h-screen bg-offWhite flex flex-col items-center py-20 px-6">
            <div className="max-w-5xl w-full">
              <h1 className="display-font text-6xl md:text-8xl font-black mb-12 text-midnight text-center uppercase">
                MAPA OFICIAL
              </h1>

              <div
                className="group relative border-8 border-midnight p-2 bg-white shadow-[12px_12px_0px_0px_#2A3535] mb-12 rotate-1 hover:rotate-0 transition-transform duration-500 cursor-zoom-in"
                onClick={() => setIsMapZoomed(true)}
              >
                <img
                  src="/Mapa Ruta Teatro 220226.jpg"
                  alt="Mapa Ruta Teatro 2026"
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-midnight text-offWhite px-4 py-2 display-font font-black tracking-widest transition-opacity pointer-events-none">
                    AMPLIAR MAPA
                  </span>
                </div>
              </div>

              {/* Zoom Modal */}
              {isMapZoomed && (
                <div
                  className="fixed inset-0 z-[100] bg-midnight/90 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
                  onClick={() => setIsMapZoomed(false)}
                >
                  <button
                    onClick={() => setIsMapZoomed(false)}
                    className="absolute top-4 right-4 md:top-8 md:right-8 text-offWhite hover:text-sunOrange transition-colors"
                  >
                    <svg className="w-12 h-12 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                  <img
                    src="/Mapa Ruta Teatro 220226.jpg"
                    alt="Mapa Ruta Teatro 2026 Full"
                    className="max-w-full max-h-full object-contain shadow-2xl border-4 border-offWhite"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}

              <div className="flex justify-center">
                <button
                  onClick={() => window.open('https://drive.google.com/file/d/1baeByEmVmNDxgAv1VHQdlV4sTDn-Mwfr/view', '_blank')}
                  className="bg-sunOrange text-midnight border-4 border-midnight px-12 py-6 display-font text-2xl md:text-4xl font-black hover:bg-magentaEnergy hover:text-offWhite transition-all hover:-translate-y-2 shadow-[8px_8px_0px_0px_#2A3535] flex items-center gap-4 group"
                >
                  <span>DESCARGAR PROGRAMACIÓN</span>
                  <svg className="w-8 h-8 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </button>
              </div>

              <p className="mt-8 text-center text-midnight opacity-60 font-bold max-w-lg mx-auto">
                * El programa está sujeto a cambios. Revisa nuestras redes sociales para las últimas actualizaciones.
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-offWhite text-midnight px-6 py-20 border-t-6 border-midnight">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-8">
              <img src="/logo-ruta-teatro.png" alt="Ruta Teatro Logo" className="h-[60px] w-auto" />
            </div>
            <p className="text-lg opacity-70 font-bold">El festival de teatro más grande de Bogotá. Celebrando 14 años de historia. Del 19 al 22 de febrero, 2026.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="display-font text-2xl font-black text-midnight uppercase">REDES SOCIALES</h4>
            <div className="flex gap-4">
              {[
                { name: 'FB', url: 'https://www.facebook.com/RutaTeatroBogota' },
                { name: 'IG', url: 'https://www.instagram.com/rutateatrobogota' },
                { name: 'TK', url: 'https://www.tiktok.com/@rutateatrobogota0' },
                { name: 'YT', url: 'https://www.youtube.com/@RutaTeatralBogot%C3%A1' }
              ].map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-3 border-midnight flex items-center justify-center display-font font-bold hover:bg-magentaEnergy hover:text-offWhite hover:border-magentaEnergy cursor-pointer transition-colors text-midnight"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center content-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="/logo-secretaria.png" alt="Secretaría de Cultura" className="w-full max-w-[120px] h-auto mix-blend-multiply mx-auto" />
            <img src="/logo-mi-ciudad.png" alt="Bogotá Mi Ciudad" className="w-full max-w-[120px] h-auto mix-blend-multiply mx-auto" />
            <img src="/logo-bogota.png" alt="Alcaldía de Bogotá" className="w-full max-w-[120px] h-auto mix-blend-multiply mx-auto" />
            <img src="/logo-distritos.png" alt="Distritos Creativos" className="w-full max-w-[120px] h-auto mix-blend-multiply mx-auto" />
          </div>
        </div>
      </footer>

      {/* BRANDING SIGNATURE - SUB-FOOTER */}
      <div className="bg-offWhite py-6 px-6 border-t border-midnight/10">
        <div className="max-w-7xl mx-auto flex justify-center">
          <p className="display-font text-[10px] md:text-xs font-bold text-midnight/40 tracking-[0.4em] text-center uppercase">
            Diseño y Desarrollo - <a href="https://mtmmarcatumarca.com/" target="_blank" rel="noopener noreferrer" className="hover:text-midnight transition-colors">MTM Marca tu marca</a> y <a href="https://www.abralatam.com/es" target="_blank" rel="noopener noreferrer" className="hover:text-midnight transition-colors">A:BRA Latam</a>
          </p>
        </div>
      </div>
      {/* FLOATING FAVICON */}
      <div className="fixed bottom-8 right-8 z-[100] pointer-events-none">
        <div className="relative group">
          <div className="absolute inset-0 bg-magentaEnergy rounded-full scale-110 blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
          <img
            src="/favicon.png"
            alt="Ruta del Teatro"
            className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-2xl animate-float pointer-events-auto cursor-pointer border-4 border-midnight rounded-full bg-offWhite p-2 hover:scale-110 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
