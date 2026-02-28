import { Link } from "react-router-dom";
import { videosData } from "../data/videosData";

const SelectedWorks = () => {
  return (
    <section className="w-full bg-[#1D2124] py-16 flex justify-center">
      <div className="w-full max-w-[1000px] flex flex-col items-center gap-16">

        {/* Main Title */}
        <h2 style={{ color: 'white', fontWeight: '600', fontSize: '45px', lineHeight: '54px', fontFamily: 'Inter' }}>
          Selected Works
        </h2>

{/* Videos Section */}
<div className="flex flex-col items-center gap-12 w-full">
  {videosData.slice(0, 2).map(video => (
    <div key={video.id} className="flex flex-col w-[532px] gap-2">

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
          onMouseEnter={e => e.target.style.color = '#E1306C'}
          onMouseLeave={e => e.target.style.color = 'white'}
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