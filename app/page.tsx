"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Force scroll to top on page refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Soft cinematic wash for your posters
  const ghibliSoftGrade = {
    filter: 'brightness(1.01) contrast(0.97) saturate(0.92) sepia(0.02)'
  };

  return (
    <div className="min-h-screen px-6 py-12 md:px-16 md:py-20 relative bg-[#2a313d]">
        
        <div className="max-w-5xl mx-auto relative z-10">
            
            {/* Dynamic Navigation Menu */}
            <header className="flex justify-end items-center mb-16 relative z-50 h-8">
                <div className={`flex items-center gap-8 pr-6 transition-all duration-300 ${
                    menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none absolute'
                }`}>
                    <a href="#shows" onClick={() => setMenuOpen(false)} className="text-[#e6ddc5]/80 hover:text-[#cfa262] font-display italic text-lg transition-colors">Shows</a>
                    <a href="#movies" onClick={() => setMenuOpen(false)} className="text-[#e6ddc5]/80 hover:text-[#cfa262] font-display italic text-lg transition-colors">Movies</a>
                    <a href="#ghibli" onClick={() => setMenuOpen(false)} className="text-[#e6ddc5]/80 hover:text-[#cfa262] font-display italic text-lg transition-colors">Studio Ghibli</a>
                    <a href="#recommend" onClick={() => setMenuOpen(false)} className="text-[#e6ddc5]/80 hover:text-[#cfa262] font-display italic text-lg transition-colors">Recommend</a>
                </div>

                <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-2 items-end cursor-pointer focus:outline-none group">
                    <span className={`h-[1px] bg-[#e6ddc5] transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-[4.5px] bg-[#cfa262]' : 'w-8 group-hover:bg-[#cfa262] group-hover:w-6'}`}></span>
                    <span className={`h-[1px] bg-[#e6ddc5] transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-[4.5px] bg-[#cfa262]' : 'w-6 group-hover:bg-[#cfa262] group-hover:w-8'}`}></span>
                </button>
            </header>

            {/* Hero Section */}
            <main className="mb-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    
                    <div className="md:col-span-7 space-y-8">
                        <div className="space-y-2">
                            <p className="text-[#cfa262] font-display italic text-xl tracking-wide">Film Critic & Analyst</p>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-wide leading-none font-display text-[#e6ddc5]">
                                Jonatan <br />Rodriguez
                            </h1>
                        </div>
                        <p className="text-lg text-[#e6ddc5]/80 font-light leading-relaxed max-w-xl">
                            Hey! I am relatively new to Letterboxd, but I would love to dive deeper into more movies and shows, especially with suggestions from the community.
                        </p>
                        
                        {/* Interactive Customized Social Icons */}
                        <div className="flex items-center gap-6 pt-4">
                            <a href="https://letterboxd.com/jonatanr/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Letterboxd">
                                <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="28" cy="50" r="22" fill="#ff8000" opacity="0.85" />
                                    <circle cx="50" cy="50" r="22" fill="#00e054" opacity="0.85" style={{ mixBlendMode: 'screen' }} />
                                    <circle cx="72" cy="50" r="22" fill="#00b0ea" opacity="0.85" style={{ mixBlendMode: 'screen' }} />
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/@jonatanrdzz?_r=1&_t=ZP-96QUYXFa5OA" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/60 hover:text-[#cfa262] text-3xl transition-all hover:scale-110" title="TikTok">
                                <i className="fa-brands fa-tiktok"></i>
                            </a>
                            <a href="https://www.instagram.com/jonatanrdzz" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/60 hover:text-[#cfa262] text-3xl transition-all hover:scale-110" title="Instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Jonatan.gif Hero Presentation frame */}
                    <div className="md:col-span-5">
                        <div className="p-3 bg-[#333b47] rounded-sm shadow-2xl border border-[#e6ddc5]/10 transform md:rotate-2 hover:rotate-0 transition-transform duration-700">
                            <img src="/gifs/Jonatan.gif" alt="Featured Animation Frame" className="w-full h-auto rounded-sm opacity-90 object-cover" style={ghibliSoftGrade} />
                        </div>
                    </div>

                </div>
            </main>

            {/* SHOWS Grid Layout */}
            <section id="shows" className="mb-24 pt-12 border-t border-[#e6ddc5]/10 scroll-mt-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold font-display text-[#e6ddc5] mb-1">Shows</h2>
                    <span className="text-xs bg-[#cfa262]/10 text-[#cfa262] px-2 py-0.5 rounded-sm font-semibold tracking-wider uppercase">Personal Favorites</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {/* Avatar: The Last Airbender (2005) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/ATLA.gif" alt="Avatar The Last Airbender Showcase" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Avatar: The Last Airbender</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2005 &ndash; 2008</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">One of the greatest animated shows ever made with incredible world-building.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Avatar%3A%20The%20Last%20Airbender" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Ben 10 (2005) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Ben 10 Original .gif" alt="Ben 10 Original Showcase" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Ben 10</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2005 &ndash; 2008</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A classic animated action show with an amazing world and great characters.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Ben%2010" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* How I Met Your Mother (2005) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/How I met your mother.webp" alt="How I Met Your Mother Showcase" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">How I Met Your Mother</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2005 &ndash; 2014</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A very fun and unique sitcom about a close group of friends in New York.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=How%20I%20Met%20Your%20Mother" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Ben 10: Alien Force (2008) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Ben 10 Alien Force.gif" alt="Ben 10 Alien Force Animated Showcase" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Ben 10: Alien Force</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2008 &ndash; 2010</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A more mature sequel that makes the story and the stakes even bigger.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Ben%2010%3A%20Alien%20Force" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Ben 10 Ultimate Alien (2010) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Ben 10 Ultimate Alien.gif" alt="Ben 10 Ultimate Alien Showcase" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Ben 10: Ultimate Alien</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2010 &ndash; 2012</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">An exciting continuation with cooler alien powers and a deeper storyline.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Ben%2010%3A%20Ultimate%20Alien" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Regular Show (2010) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Regular Show.gif" alt="Regular Show Showcase" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Regular Show</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2010 &ndash; 2017</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A hilarious animated comedy about two friends dealing with crazy and surreal situations.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Regular%20Show" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Gravity Falls (2012) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Gravity Falls.gif" alt="Gravity Falls Showcase" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Gravity Falls</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2012 &ndash; 2016</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A fun and mysterious animated show about twins spending the summer in a weird town.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Gravity%20Falls" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Legend of Korra (2012) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Legend of Korra.webp" alt="The Legend of Korra Showcase" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">The Legend of Korra</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2012 &ndash; 2014</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A great sequel to Avatar that handles more mature and interesting themes.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=The%20Legend%20of%20Korra" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Invincible Show Card (2021) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Invincible.webp" alt="Invincible Adaptation Frame" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Invincible</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2021 &ndash; Present</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A brutal and highly exciting superhero show with massive stakes.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Invincible" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* MOVIES Grid Layout */}
            <section id="movies" className="mb-32 pt-12 border-t border-[#e6ddc5]/10 scroll-mt-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold font-display text-[#e6ddc5] mb-1">Movies</h2>
                    <span className="text-xs bg-[#cfa262]/10 text-[#cfa262] px-2 py-0.5 rounded-sm font-semibold tracking-wider uppercase">Personal Favorites</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {/* Schindler's List (1993) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Schindler's List.gif" alt="Schindler's List animation gif" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Schindler's List</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">1993 &bull; 3h 15m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A powerful and deeply moving historical drama about saving lives during the Holocaust.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Schindler's%20List" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Forrest Gump (1994) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Forrest Gump.gif" alt="Forrest Gump animation gif" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Forrest Gump</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">1994 &bull; 2h 22m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A beautiful and heartwarming story following a kind man through major historical events.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Forrest%20Gump" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Toy Story (1995) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Toy Story .webp" alt="Toy Story animation webp" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Toy Story</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">1995 &bull; 1h 21m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A groundbreaking animated classic about toys coming to life and the meaning of friendship.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Toy%20Story" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Toy Story 2 (1999) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Toy Story 2.gif" alt="Toy Story 2 animation gif" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Toy Story 2</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">1999 &bull; 1h 32m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A fantastic animated sequel exploring themes of purpose, growing up, and abandonment.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Toy%20Story%202" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Spider-Man (2002) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Spiderman 1.gif" alt="Spider-Man 1 animation gif" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Spider-Man</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2002 &bull; 2h 1m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">The classic superhero origin movie that successfully started it all.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Spider-Man" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Spider-Man 2 (2004) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Spiderman 2.gif" alt="Spider-Man 2 animation gif" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Spider-Man 2</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2004 &bull; 2h 7m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">An amazing sequel focused beautifully on the hard struggles of being a hero.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Spider-Man%202" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Spider-Man 3 (2007) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Spiderman 3.gif" alt="Spider-Man 3 animation gif" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Spider-Man 3</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2007 &bull; 2h 19m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">The final trilogy movie exploring forgiveness, pride, and tough personal choices.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Spider-Man%203" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* The Dark Knight (2008) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/The Dark Knight.gif" alt="The Dark Knight animation gif" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">The Dark Knight</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2008 &bull; 2h 32m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">An incredible and thrilling superhero movie featuring an unforgettable villain performance.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=The%20Dark%20Knight" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Up (2009) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Up.gif" alt="Up animation gif" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Up</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2009 &bull; 1h 36m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A touching and adventurous animated film about fulfilling promises and finding new meaning.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Up" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Toy Story 3 (2010) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Toy Story 3.gif" alt="Toy Story 3 animation gif" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Toy Story 3</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2010 &bull; 1h 43m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A perfect conclusion to the animated trilogy dealing with moving on and letting go.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Toy%20Story%203" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Interstellar (2014) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/interstellar.gif" alt="Interstellar Kinetic Frame" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Interstellar</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2014 &bull; 2h 49m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A beautiful and emotional sci-fi movie about space travel, time, and family.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Interstellar" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Inside Out (2015) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Inside Out.gif" alt="Inside Out animation gif" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Inside Out</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2015 &bull; 1h 35m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A highly creative and emotional animated movie exploring how our feelings work.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Inside%20Out" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Blade Runner 2049 (2017) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/blade runner 2049 gif.gif" alt="Blade Runner 2049 Showcase Frame" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Blade Runner 2049</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2017 &bull; 2h 44m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A stunning sci-fi film featuring masterclass visuals and a deep story.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Blade%20Runner%202049" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Avengers: Infinity War (2018) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Avengers- Infinity Wa.gif" alt="Avengers Infinity War animation gif" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Avengers: Infinity War</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2018 &bull; 2h 29m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A massive and spectacular superhero crossover with incredible action and emotional stakes.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Avengers%3A%20Infinity%20War" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Into the Spider-Verse (2018) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Into the spiderverse.gif" alt="Into the Spider-Verse Art Direction" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Spider-Man: Into the Spider-Verse</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2018 &bull; 1h 57m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A visual masterpiece that completely changed the landscape of animation.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Spider-Man%3A%20Into%20the%20Spider-Verse" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* The Batman (2022) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/The Batman.gif" alt="The Batman animation gif" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">The Batman</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2022 &bull; 2h 56m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A dark, gritty, and incredibly well-shot detective story focusing on a younger hero.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=The%20Batman" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Across the Spider-Verse (2023) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Across the spiderverse.gif" alt="Across the Spider-Verse Kinetic Frame" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Spider-Man: Across the Spider-Verse</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2023 &bull; 2h 20m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">An outstanding sequel with mind-blowing art styles across multiple universes.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Spider-Man%3A%20Across%20the%20Spider-Verse" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* STUDIO GHIBLI Section */}
            <section id="ghibli" className="mb-32 pt-12 border-t border-[#e6ddc5]/10 scroll-mt-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold font-display text-[#e6ddc5] mb-1">Studio Ghibli</h2>
                    <span className="text-xs bg-[#cfa262]/10 text-[#cfa262] px-2 py-0.5 rounded-sm font-semibold tracking-wider uppercase">Personal Favorites</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {/* Grave of the Fireflies (1988) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Grave of the Fireflies (1988).webp" alt="Grave of the Fireflies" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Grave of the Fireflies</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">1988 &bull; 1h 29m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A heartbreaking but deeply beautiful movie about surviving war.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Grave%20of%20the%20Fireflies" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Princess Mononoke (1997) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Princess Mononoke.gif" alt="Princess Mononoke" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Princess Mononoke</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">1997 &bull; 2h 14m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">An epic masterpiece tracking the historic battle between humanity and nature.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Princess%20Mononoke" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Spirited Away (2001) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Spirited Away.gif" alt="Spirited Away" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Spirited Away</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2001 &bull; 2h 5m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A magical fantasy adventure about a young girl lost in a world of spirits.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Spirited%20Away" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* Howl's Moving Castle (2004) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/Howl Moving Castle.gif" alt="Howl's Moving Castle" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">Howl's Moving Castle</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2004 &bull; 1h 59m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A heartwarming fantasy story focused on love, curse-lifting magic, and aging.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=Howl's%20Moving%20Castle" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                    {/* The Boy and the Heron (2023) */}
                    <div className="bg-[#333b47] rounded-md overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col shadow-lg border border-[#e6ddc5]/5 group">
                        <div className="h-40 overflow-hidden relative">
                            <img src="/gifs/The Boy and the Heron (2023).webp" alt="The Boy and the Heron" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500" style={ghibliSoftGrade} />
                        </div>
                        <div className="p-4 pt-5 flex flex-col flex-grow">
                            <h3 className="font-bold text-[#e6ddc5] text-lg leading-tight mb-1">The Boy and the Heron</h3>
                            <p className="text-[#e6ddc5]/50 text-xs font-semibold mb-2 tracking-widest uppercase">2023 &bull; 2h 4m</p>
                            <p className="text-[#e6ddc5]/60 text-sm font-light leading-snug">A beautiful fantasy movie exploring family connections, memory, and dealing with grief.</p>
                            <div className="mt-6 flex items-center justify-between text-xs text-[#e6ddc5]/60 mt-auto pt-4 border-t border-[#e6ddc5]/5">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#cfa262] text-sm font-semibold">★★★★★</span>
                                    <a href="https://www.justwatch.com/us/search?q=The%20Boy%20and%20the%20Heron" target="_blank" rel="noopener noreferrer" className="text-[#e6ddc5]/40 hover:text-[#cfa262] transition-colors" title="Where to watch">
                                        <i className="fa-solid fa-play text-[10px]"></i>
                                    </a>
                                </div>
                                <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfa262] transition-colors flex items-center gap-1 font-medium">Read Review &rsaquo;</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Recommendations Form Layout */}
            <section id="recommend" className="border-t border-[#e6ddc5]/10 pt-20 pb-12 scroll-mt-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-[#333b47] p-8 md:p-12 rounded-sm border border-[#e6ddc5]/5 shadow-2xl relative overflow-hidden">
                    
                    <div className="md:col-span-6 space-y-6 relative z-10 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-[#cfa262]">Recommendations</h2>
                        <p className="text-lg text-[#e6ddc5]/80 font-light leading-relaxed">
                            Feel free to leave any recommendations below to help me expand my cinematic collection and try new things. I am always open to exploring different genres!
                        </p>
                        <form action="https://formspree.io/f/maqkwdlg" method="POST" className="space-y-6 pt-4">
                            <input type="text" name="recommendation" required placeholder="Movie or Show Title" className="w-full bg-transparent border-b border-[#e6ddc5]/20 py-2 text-[#e6ddc5] placeholder-[#e6ddc5]/40 focus:outline-none focus:border-[#cfa262] transition-colors font-light" />
                            <textarea name="message" required rows={3} placeholder="Why should I watch it?" className="w-full bg-transparent border-b border-[#e6ddc5]/20 py-2 text-[#e6ddc5] placeholder-[#e6ddc5]/40 focus:outline-none focus:border-[#cfa262] transition-colors font-light resize-none"></textarea>
                            <button type="submit" className="bg-[#cfa262] text-[#2a313d] px-8 py-3 rounded-sm hover:bg-[#e6ddc5] transition-all font-display text-lg tracking-wide font-bold shadow-lg">Send</button>
                        </form>
                    </div>

                    {/* recommendation.gif */}
                    <div className="md:col-span-6 md:pl-12 flex justify-center items-center">
                        <div className="relative p-2 bg-[#2a313d] rounded-sm border border-[#e6ddc5]/10 transform md:-rotate-2 shadow-xl w-full">
                            <img src="/gifs/recommendation.gif" alt="Contact Layout Graphic" className="w-full h-64 object-cover opacity-90 rounded-sm" style={ghibliSoftGrade} />
                        </div>
                    </div>

                </div>
            </section>

            {/* Minimalist Footer */}
            <footer className="py-8 mt-12 border-t border-[#e6ddc5]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[#e6ddc5]/40 text-sm font-light">
                <p>© {new Date().getFullYear()} All rights reserved.</p>
                <p>Curated for <span className="text-[#cfa262]">Cinema</span>.</p>
            </footer>

        </div>
    </div>
  );
}