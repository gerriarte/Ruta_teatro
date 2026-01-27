
import React from 'react';
import { Play, Agrupacion } from './types';

export const CENTRAL_BOX_OFFICE_PHONE = '573229599258';

export const AGRUPACIONES: Agrupacion[] = [
  // MAIN COLLECTIVES
  {
    id: 'occidente',
    name: 'Teatro de Occidente',
    description: 'Investigación constante sobre la dramaturgia contemporánea y el espacio inmersivo.',
    fullHistory: 'Fundada en 2008, esta agrupación ha liderado procesos de experimentación en el centro de Bogotá. Su enfoque se centra en la relación actor-espectador y el uso de tecnologías sonoras para crear mundos inmersivos que desafían la percepción tradicional del teatro de sala.',
    color: 'bg-bogotaTeal',
    location: 'Sala El Espacio',
    address: 'Calle 11 # 2-54, La Candelaria, Bogotá',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Teatro+de+Occidente+Bogota',
    podcastUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/obras/agrupacion/teatro occidente shame.JPG',
    whatsapp: '573001112233'
  },
  {
    id: 'terceracto',
    name: 'Casa Tercer Acto',
    description: 'Foco en teatro infantil y títeres con un fuerte compromiso social y pedagógico.',
    fullHistory: 'Referente de la localidad de La Candelaria, Casa Tercer Acto ha formado a generaciones de espectadores. Sus obras de títeres y teatro de objetos han recorrido festivales internacionales, llevando un mensaje de paz, ecología y resiliencia a través de la metáfora poética.',
    color: 'bg-magentaEnergy',
    location: 'Sede Candelaria',
    address: 'Calle 3 # 1-05, La Candelaria, Bogotá',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Casa+Tercer+Acto+Bogota',
    podcastUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/obras/agrupacion/tercer-acto.png',
    whatsapp: '573004445566'
  },
  {
    id: 'changua',
    name: 'Changua Teatro',
    description: 'Teatro mordante que explora las realidades cotidianas de Bogotá con humor y sátira.',
    fullHistory: 'Changua nace de la necesidad de reírse de la tragedia bogotana. Con un estilo crudo pero hilarante, sus puestas en escena diseccionan la burocracia, el tráfico y las relaciones de poder en la capital, utilizando el lenguaje de la farsa y el realismo sucio.',
    color: 'bg-sunOrange',
    location: 'Sede Chapinero',
    address: 'Carrera 13 # 51-24, Chapinero, Bogotá',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Changua+Teatro+Bogota',
    podcastUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/obras/agrupacion/changua teatro -  6 Kory y Kinu.jpeg',
    whatsapp: '573007778899'
  },
  {
    id: 'vargastejada',
    name: 'Teatro Vargastejada',
    description: 'Referente histórico del teatro de calle y la memoria viva en los parques de la ciudad.',
    fullHistory: 'Con más de 30 años de trayectoria, Vargastejada es sinónimo de teatro popular. Sus grandes formatos de calle, con zancos, fuego y música en vivo, han convertido las plazas públicas en escenarios de reflexión histórica sobre la identidad colombiana y el Libertador Simón Bolívar.',
    color: 'bg-festPurple',
    location: 'Casa de Fu',
    address: 'Calle 12C # 3-10, Centro Histórico, Bogotá',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Teatro+Vargastejada+Bogota',
    podcastUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/obras/agrupacion/Casa fuAmorío Postrero - Tapao bocachico.jpg',
    whatsapp: '573001234567'
  },
  // INVITED GROUPS
  {
    id: 'dcarte',
    name: 'DC Arte',
    description: 'Corporación escénica pionera en teatro de calle y la intervención urbana.',
    fullHistory: 'DC Arte es una corporación escénica con amplia trayectoria en el teatro de calle y la intervención del espacio público, pionera en la creación de espectáculos que transforman la ciudad en escenario. Su propuesta combina formación artística, comparsa, teatro comunitario y producción escénica.',
    color: 'bg-bogotaTeal',
    location: 'Parque de los Periodistas',
    address: 'Eje Ambiental, Avenida Jiménez con Carrera 3, Bogotá',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Parque+de+los+Periodistas+Bogota',
    image: '/obras/EDITABLES DIA JUEVES 19_La cigarra portada.png',
    whatsapp: '573102222222'
  },
  {
    id: 'objetoscubo',
    name: 'Objetos al Cubo',
    description: 'Investigación centrada en la creación de dramaturgias contemporáneas.',
    fullHistory: 'Objetos al Cubo es un colectivo especializado en teatro de títeres y animación de objetos, con una investigación centrada en la creación de dramaturgias contemporáneas. Aborda temas como equidad e identidad.',
    color: 'bg-bogotaTeal',
    location: 'Usaquén',
    address: 'Carrera 6 # 118-24, Bogotá',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Objetos+al+Cubo+Bogota',
    image: '/obras/DIA DOMINGO 22_1. Armonía Musical Portada.png',
    whatsapp: '573107777777'
  },
  {
    id: 'actogato',
    name: 'Colectivo ActoGato Teatro',
    description: 'Creación de universos poéticos a través de títeres y animación de objetos.',
    fullHistory: 'ActoGato Teatro es un colectivo dedicado al teatro de títeres y la animación de objetos, enfocado en la creación de universos poéticos que dialogan con públicos diversos. Su trabajo se caracteriza por una estética delicada y narrativas sensibles.',
    color: 'bg-softRose',
    location: 'Sala Concertada',
    address: 'Calle 70A # 11-29, Bogotá',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=ActoGato+Teatro+Bogota',
    image: '/obras/DIA SABADO 21_1. Kory y Kynu Portada.png',
    whatsapp: '573103333333'
  },
  {
    id: 'nemkatacoa',
    name: 'Teatro Nemkatacoa',
    description: 'Reconocida agrupación de teatro de calle especializada en el trabajo con zancos.',
    fullHistory: 'Teatro Nemkatacoa es una reconocida agrupación de teatro de calle especializada en el trabajo con zancos, con una sólida trayectoria nacional e internacional. Sus montajes transforman plazas y calles en escenarios dinámicos.',
    color: 'bg-sunOrange',
    location: 'Parque Nacional',
    address: 'Calle 35 # 7-01, Bogotá',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Parque+Nacional+Bogota',
    image: '/obras/VIERNES 20_1. Memorial Portada.png',
    whatsapp: '573104444444'
  },
  {
    id: 'taller406',
    name: 'Taller 406 – RED 7',
    description: 'Espacio de creación e investigación que articula formación and experimentación.',
    fullHistory: 'Taller 406 – RED 7 es un espacio de creación e investigación escénica que articula procesos de formación, experimentación y producción teatral desde una lógica de laboratorio.',
    color: 'bg-festPurple',
    location: 'Sede Mártires',
    address: 'Avenida Calle 19 # 15-24, Bogotá',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Taller+406+Bogota',
    image: '/obras/DIA DOMINGO 22_1. Shame Portada.png',
    whatsapp: '573109999999'
  },
  {
    id: 'pepamamoncillo',
    name: 'La Pepa del Mamoncillo',
    description: 'Dedicada al teatro de títeres y a la animación de objetos con sensibilidad poética.',
    fullHistory: 'La Pepa del Mamoncillo es una agrupación colombiana dedicada al teatro de títeres y a la animación de objetos, reconocida por la sensibilidad poética y el rigor artístico de sus montajes dirigidos a públicos infantiles y familiares. Su trabajo integra música en vivo, humor y una cuidada estética visual que invita a la imaginación y al juego.',
    color: 'bg-salmonPink',
    location: 'Teatro de la Montaña',
    address: 'Vereda Verjon Bajo, Bogotá',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=La+Pepa+del+Mamoncillo+Bogota',
    image: '/obras/DIA JUEVES 19_Me lleva el diablo portada.png',
    whatsapp: '573101111111'
  },
  {
    id: 'mereketengue',
    name: 'Mereketengue Teatro',
    description: 'Creación contemporánea y exploración de lenguajes escénicos híbridos.',
    fullHistory: 'Mereketengue Teatro es una agrupación que apuesta por la creación contemporánea y la exploración de lenguajes escénicos híbridos. Sus propuestas se caracterizan por una mirada crítica sobre la realidad social.',
    color: 'bg-festPurple',
    location: 'Barrio Teusaquillo',
    address: 'Calle 39 # 16-12, Bogotá',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Mereketengue+Teatro+Bogota',
    image: '/obras/EDITABLES DIA JUEVES 19_Transmigración Portada.png',
    whatsapp: '573105555555'
  },
  {
    id: 'croche',
    name: 'Croché Títeres',
    description: 'Línea de trabajo enfocada en la memoria, el territorio y la narración simbólica.',
    fullHistory: 'Croché Títeres es una agrupación dedicada al teatro de títeres y objetos, con una línea de trabajo enfocada en la memoria, el territorio y la narración simbólica. Sus creaciones se distinguen por una estética artesanal.',
    color: 'bg-magentaEnergy',
    location: 'Sede Fontibón',
    address: 'Calle 18 # 103-24, Bogotá',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Croche+Titeres+Bogota',
    image: '/obras/DIA SABADO 21_1. Soledades Breves Portada.png',
    whatsapp: '573106666666'
  },
  {
    id: 'araneus',
    name: 'Corporación Cultural Araneus',
    description: 'Procesos artísticos integrales en teatro, música y movimiento comunitario.',
    fullHistory: 'La Corporación Cultural Araneus desarrolla procesos artísticos integrales en teatro, música y artes del movimiento, con un fuerte énfasis en el trabajo comunitario y territorial.',
    color: 'bg-sunOrange',
    location: 'Engativá',
    address: 'Calle 64 # 110-24, Bogotá',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Corporacion+Cultural+Araneus+Bogota',
    image: '/obras/DIA DOMINGO 22_1. El retorno del agua Portada.png',
    whatsapp: '573108888888'
  },
  {
    id: 'usme',
    name: 'Usme Proyecto Teatral',
    description: 'Colectivo enfocado en la creación desde la ruralidad y el territorio.',
    fullHistory: 'Usme Proyecto Teatral es un colectivo que nace de la necesidad de narrar las historias de la ruralidad bogotana, específicamente de la localidad de Usme. Su trabajo se centra en la memoria, el territorio y la identidad campesina, tejiendo puentes entre el campo y la ciudad.',
    color: 'bg-bogotaTeal',
    location: 'CDC Lourdes',
    address: 'Carrera 2 # 4 - 10, Bogotá',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=CDC+Lourdes+Bogota',
    image: '/obras/SABADO 21_1. Omarap Portada.png',
    whatsapp: '573109998877'
  }
];

export const PLAYS: Play[] = [
  {
    id: 'diablo-19',
    collectiveId: 'occidente',
    title: 'ME LLEVA EL DIABLO',
    venue: 'Sala El Espacio – Teatro de Occidente',
    date: 'FEB 19',
    time: '11:00 AM',
    genre: 'TÍTERES',
    image: '/obras/DIA JUEVES 19_Me lleva el diablo portada.png',
    color: 'bg-salmonPink',
    description: 'Divertida historia de un diablo acorralado por chismes que pierde credibilidad y decide visitar al psicoanalista para recuperar su reputación.',
    duration: '60 MIN',
    ageRating: 'TODO PÚBLICO'
  },
  {
    id: 'memorial-19',
    collectiveId: 'vargastejada',
    title: 'MEMORIAL',
    venue: 'Parque Bicentenario',
    date: 'FEB 19',
    time: '1:00 PM',
    genre: 'CALLE / ZANCOS',
    image: '/obras/JUEVES 19_Memorial portada.png',
    color: 'bg-bogotaTeal',
    description: 'Historia de una campesina que huye de la violencia y encuentra refugio en una casa abandonada. Una búsqueda de memoria en espacios de guerra.',
    duration: '75 MIN',
    ageRating: '+12'
  },
  {
    id: 'cigarra-19',
    collectiveId: 'terceracto',
    title: 'LA CIGARRA',
    venue: 'Casa Tercer Acto',
    date: 'FEB 19',
    time: '3:00 PM',
    genre: 'INFANTIL',
    image: '/obras/EDITABLES DIA JUEVES 19_La cigarra portada.png',
    color: 'bg-sunOrange',
    description: 'Comunidad de insectos construye un pueblo libre. La cigarra debe cantar para salvar al pueblo de una invasión de sapos.',
    duration: '50 MIN',
    ageRating: 'TODO PÚBLICO'
  },
  {
    id: 'transmigracion-19',
    collectiveId: 'changua',
    title: 'TRANSMIGRACIÓN',
    venue: 'Changua Teatro',
    date: 'FEB 19',
    time: '5:00 PM',
    genre: 'DRAMA MÍSTICO',
    image: '/obras/EDITABLES DIA JUEVES 19_Transmigración Portada.png',
    color: 'bg-festPurple',
    description: 'Viaje íntimo de una madre entre la reality y la trascendencia, reflexionando sobre la vida y la muerte.',
    duration: '70 MIN',
    ageRating: '+15'
  },
  {
    id: 'bolivar-19',
    collectiveId: 'vargastejada',
    title: 'AMORÍO POSTRERO DE BOLÍVAR',
    venue: 'Teatro Vargastejada – Casa de Fu',
    date: 'FEB 19',
    time: '7:00 PM',
    genre: 'FICSTORIA',
    image: '/obras/EDITABLES DIA JUEVES 19_Amorío Postrero Portada.png',
    color: 'bg-magentaEnergy',
    description: 'Simón Bolívar llega a Honda repudiado y perseguido, encontrando el amor de su pueblo antes de partir definitivamente.',
    duration: '80 MIN',
    ageRating: 'TODO PÚBLICO'
  },
  {
    id: 'memorial-20',
    collectiveId: 'vargastejada',
    title: 'MEMORIAL (CALLE)',
    venue: 'City U (Calle 19)',
    date: 'FEB 20',
    time: '1:00 PM',
    genre: 'TEATRO DE CALLE',
    image: '/obras/VIERNES 20_1. Memorial Portada.png',
    color: 'bg-bogotaTeal',
    description: 'Intervención escénica con zancos que rinde homenaje a las víctimas del conflicto.',
    duration: '60 MIN',
    ageRating: 'TODO PÚBLICO'
  },
  {
    id: 'bicho-20',
    collectiveId: 'terceracto',
    title: 'BICHO DE LA LUZ',
    venue: 'Casa Tercer Acto',
    date: 'FEB 20',
    time: '3:00 PM',
    genre: 'FANTASÍA',
    image: '/obras/DIA VIERNES 20_1. El bicho de la Luz Portada.png',
    color: 'bg-sunOrange',
    description: 'Floro el cocuyo es despojado de su luz por la Reina Hormiga.',
    duration: '65 MIN',
    ageRating: 'TODO PÚBLICO'
  },
  {
    id: 'esquizofrenicos-20',
    collectiveId: 'occidente',
    title: 'EL PASEO DE LOS ESQUIZOFRÉNICOS',
    venue: 'Sala El Espacio – Teatro de Occidente',
    date: 'FEB 20',
    time: '5:00 PM',
    genre: 'INMERSIVO',
    image: '/obras/DIA VIERNES 20_1. El paseo de los esquizofrenicos Portada.png',
    color: 'bg-festPurple',
    description: 'Indagación escénica fragmentaria sobre la justicia y la vida interior de Jacobo Lenz.',
    duration: '90 MIN',
    ageRating: '+15'
  },
  {
    id: 'cazafantasmas-20',
    collectiveId: 'changua',
    title: 'OPERACIÓN CAZAFANTASMAS',
    venue: 'Changua Teatro',
    date: 'FEB 20',
    time: '7:30 PM',
    genre: 'CONTEMPORÁNEO',
    image: '/obras/DIA VIERNES 20_1. Operación Cazafantasmas Portada.png',
    color: 'bg-softRose',
    description: 'Reflexión aguda sobre el miedo y la manipulación mediática.',
    duration: '80 MIN',
    ageRating: '+12'
  },
  {
    id: 'kory-21',
    collectiveId: 'actogato',
    title: 'KORY Y KYNU',
    venue: 'Centro Comercial Los Ángeles, Local 309',
    date: 'FEB 21',
    time: '11:00 AM',
    genre: 'TÍTERES',
    image: '/obras/DIA SABADO 21_1. Kory y Kynu Portada.png',
    color: 'bg-softRose',
    description: 'Historia de dos hermanos, uno arriesgado y otro competitivo, que deben salvar a su pueblo. Aborda el perdón y la responsabilidad.',
    duration: '60 MIN',
    ageRating: 'TODO PÚBLICO'
  },
  {
    id: 'omarap-21',
    collectiveId: 'usme',
    title: 'OMARAP, EL SUSURRO DE LA NIEBLA',
    venue: 'CDC Lourdes',
    date: 'FEB 21',
    time: '1:00 PM',
    genre: 'RURAL / INFANTIL',
    image: '/obras/SABADO 21_1. Omarap Portada.png',
    color: 'bg-bogotaTeal',
    description: 'Dos niños campesinos se adentran en el páramo de Sumapaz y aprenden sobre el territorio, el agua y la memoria con seres mágicos.',
    duration: '60 MIN',
    ageRating: 'TODO PÚBLICO'
  },
  {
    id: 'triada-21',
    collectiveId: 'terceracto',
    title: 'LA TRÍADA',
    venue: 'Casa Tercer Acto',
    date: 'FEB 21',
    time: '3:00 PM',
    genre: 'DRAMA',
    image: '/obras/DIA SABADO 21_1. Triada Portada.png',
    color: 'bg-sunOrange',
    description: 'Obra sobre la toma del Palacio de Justicia. Relata las historias entrelazadas de un soldado, un guerrillero y un magistrado.',
    duration: '70 MIN',
    ageRating: '+12'
  },
  {
    id: 'soledades-21',
    collectiveId: 'croche',
    title: 'SOLEDADES BREVES',
    venue: 'Teatro Vargastejada – Casa de Fu',
    date: 'FEB 21',
    time: '5:00 PM',
    genre: 'TÍTERES ADULTOS',
    image: '/obras/DIA SABADO 21_1. Soledades Breves Portada.png',
    color: 'bg-magentaEnergy',
    description: 'Universo delirante de títeres para adultos. Dos piezas cortas ("Delirium Tremens" y "Cosco") sobre la soledad y la marginalidad.',
    duration: '60 MIN',
    ageRating: '+15'
  },
  {
    id: 'esquizofrenicos-21',
    collectiveId: 'occidente',
    title: 'EL PASEO DE LOS ESQUIZOFRÉNICOS',
    venue: 'Sala El Espacio – Teatro de Occidente',
    date: 'FEB 21',
    time: '7:00 PM',
    genre: 'INMERSIVO',
    image: '/obras/DIA SABADO 21_1. Esquizofrenicos Portada.png',
    color: 'bg-festPurple',
    description: 'Indagación escénica sobre la justicia a partir de la vida interior del poeta Jacobo Lenz. Experiencia teatral inmersiva.',
    duration: '90 MIN',
    ageRating: '+15'
  },
  {
    id: 'armonia-22',
    collectiveId: 'objetoscubo',
    title: 'ARMONÍA MUSICAL',
    venue: 'Teatro Vargastejada – Casa de Fu',
    date: 'FEB 22',
    time: '11:00 AM',
    genre: 'INFANTIL',
    image: '/obras/DIA DOMINGO 22_1. Armonía Musical Portada.png',
    color: 'bg-bogotaTeal',
    description: 'En esta encantadora obra conocemos a Alegría, una niña-títere con un don especial para encontrar soluciones divertidas a las preguntas y acciones de los adultos, desafiando siempre el mal genio con su ingenio.',
    duration: '50 MIN',
    ageRating: 'TODO PÚBLICO'
  },
  {
    id: 'retorno-22',
    collectiveId: 'araneus',
    title: 'EL RETORNO DEL AGUA',
    venue: 'Casa Tercer Acto',
    date: 'FEB 22',
    time: '11:00 AM',
    genre: 'FAMILIAR',
    image: '/obras/DIA DOMINGO 22_1. El retorno del agua Portada.png',
    color: 'bg-sunOrange',
    description: 'Una pieza teatral inspirada en leyendas tradicionales que busca ser un llamado escénico para el cuidado y la conservación de nuestros recursos naturales, en especial el Agua.',
    duration: '60 MIN',
    ageRating: 'TODO PÚBLICO'
  },
  {
    id: 'omarap-22',
    collectiveId: 'usme',
    title: 'OMARAP, EL SUSURRO DE LA NIEBLA',
    venue: 'Plaza Distrital de Mercado La Concordia',
    date: 'FEB 22',
    time: '1:00 PM',
    genre: 'RURAL / INFANTIL',
    image: '/obras/DOMINGO 22_1. Omarap Portada.png',
    color: 'bg-bogotaTeal',
    description: 'Dos niños campesinos se adentran en el páramo de Sumapaz y aprenden sobre el territorio, el agua y la memoria con seres mágicos.',
    duration: '60 MIN',
    ageRating: 'TODO PÚBLICO'
  },
  {
    id: 'shame-22',
    collectiveId: 'taller406',
    title: 'SHAME. FIGURAS / FISURAS',
    venue: 'Sala El Espacio – Teatro de Occidente',
    date: 'FEB 22',
    time: '3:00 PM',
    genre: 'INMERSIVO',
    image: '/obras/DIA DOMINGO 22_1. Shame Portada.png',
    color: 'bg-festPurple',
    description: 'Shame es una experiencia escénica inmersiva que explora la vergüenza como emoción íntima y social, revelando las fisuras entre lo visible y lo oculto.',
    duration: '70 MIN',
    ageRating: '+15'
  },
  {
    id: 'interes-22',
    collectiveId: 'changua',
    title: 'OBRA DE INTERÉS SOCIAL',
    venue: 'Changua Teatro',
    date: 'FEB 22',
    time: '5:00 PM',
    genre: 'SÁTIRA',
    image: '/obras/DIA DOMINGO 22_1. Obra de interes Portada.png',
    color: 'bg-sunOrange',
    description: 'Obra de Interés Social dibuja de forma extrema y mordaz la angustia de una ama de casa que espera ser favorecida en un programa de vivienda. Una sátira sobre las violencias cotidianas.',
    duration: '65 MIN',
    ageRating: '+15'
  }
];

export const SmileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm10 0c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-5 7c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
  </svg>
);

export const EyeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
);
