import { Link } from "react-router-dom";
import { videosData } from "../data/videosData";

// ── EP Data ──────────────────────────────────────────
const EP = {
  title: "Cyclamen",                                              
  spotifyAlbumId: "57lMoXEgA6oTzzCQcxEohS",                          
  spotifyUrl: "https://open.spotify.com/album/57lMoXEgA6oTzzCQcxEohS", 
  appleMusicUrl: "https://music.apple.com/gb/album/cyclamen-single/1887228277",
  anghamiUrl: "https://play.anghami.com/album/1087373094",                        
};
// ─────────────────────────────────────────────────────

// Apple Music — circle
const AppleMusicIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="18" fill="url(#appleGrad)"/>
    <defs>
      <linearGradient id="appleGrad" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FA233B"/>
        <stop offset="1" stopColor="#FB5C74"/>
      </linearGradient>
    </defs>
    <path d="M24 10.5V22.25C24 23.769 22.657 25 21 25C19.343 25 18 23.769 18 22.25C18 20.731 19.343 19.5 21 19.5C21.733 19.5 22.4 19.76 22.909 20.18V13.5L14 15.5V24.25C14 25.769 12.657 27 11 27C9.343 27 8 25.769 8 24.25C8 22.731 9.343 21.5 11 21.5C11.733 21.5 12.4 21.76 12.909 22.18V12L24 10.5Z" fill="white"/>
  </svg>
);

// Anghami — circle, pink inner → purple mid → green outer, with vertical tails
const AnghamiIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dark circle background */}
    <circle cx="18" cy="18" r="18" fill="#0D0D0D"/>

    {/* Outer arc — green */}
    <path d="M 18 6 A 12 12 0 1 0 30 18" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    {/* Middle arc — purple */}
    <path d="M 18 9 A 9 9 0 1 0 27 18" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    {/* Inner arc — pink */}
    <path d="M 18 12 A 6 6 0 1 0 24 18" stroke="#FF3CAC" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

    {/* Vertical tails of the "a" */}
    <line x1="30" y1="18" x2="30" y2="27" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="27" y1="18" x2="27" y2="25" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="24" y1="18" x2="24" y2="23" stroke="#FF3CAC" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const SelectedWorks = () => {
  return (
    <section className="w-full bg-[#1D2124] py-16 flex justify-center">
      <div className="w-full max-w-[1000px] flex flex-col items-center gap-16">

        {/* Main Title */}
        <h2 style={{ color: 'white', fontWeight: '600', fontSize: '45px', lineHeight: '54px', fontFamily: 'Inter' }}>
          Selected Works
        </h2>

        {/* EP / Songs Section */}
        <div className="w-full flex flex-col items-center gap-4">

          {/* Spotify Embed */}
          <iframe
            style={{ borderRadius: '12px' }}
            src={`https://open.spotify.com/embed/album/${EP.spotifyAlbumId}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={EP.title}
          />

          {/* Platform Icon Links */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', width: '100%', alignItems: 'center' }}>

            {/* Apple Music */}
            <a
              href={EP.appleMusicUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Listen on Apple Music"
              style={{ display: 'flex', transition: 'transform 0.2s, opacity 0.2s' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.opacity = '0.75';
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.opacity = '1';
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              <AppleMusicIcon />
            </a>

            {/* Anghami */}
            <a
              href={EP.anghamiUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Listen on Anghami"
              style={{ display: 'flex', transition: 'transform 0.2s, opacity 0.2s' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.opacity = '0.75';
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.opacity = '1';
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              <AnghamiIcon />
            </a>

          </div>
        </div>

        {/* Videos Section */}
        <div className="flex flex-col items-center gap-12 w-full">
          {videosData.slice(0, 2).map(video => (
            <div key={video.id} className="flex flex-col w-full max-w-[532px] gap-2">

              {/* YouTube Video */}
              <div className="w-full h-[296px] rounded-[15px] overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Title and Description */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <p style={{ color: 'white', fontWeight: 'bold', fontSize: '25px', fontFamily: 'Inter', margin: 0 }}>
                  {video.title}
                </p>
                <p style={{ color: '#C6C6C6', fontSize: '15px', fontFamily: 'Inter', margin: 0 }}>
                  {video.description}
                </p>
              </div>

              {/* Button */}
              <div className="mt-2 self-end px-3 py-1 bg-[#1E2225] pt-[20px] pb-[30px] rounded-[5px] flex items-center justify-center">
                <Link
                  to={video.link}
                  style={{ color: 'white', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#E1306C'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'white'}
                  className="text-[12px] font-medium font-inter"
                >
                  {video.buttonText}
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelectedWorks;