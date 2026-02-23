// Videos.tsx
// Reusable VideoCard component
const VideoCard = ({ title, date, image }: { title: string; date: string; image: string }) => {
  return (
    <div className="relative w-[152px] h-[202px] bg-[rgba(255,255,255,0.08)] rounded-md flex-shrink-0">
      <img
        src={image}
        alt={title}
        className="absolute top-3 left-3 w-[128px] h-[128px] rounded-md object-cover"
      />
      <div className="absolute left-3 top-[152px] w-[128px] text-white font-bold text-[14px]">
        {title}
      </div>
      <div className="absolute left-3 top-[172px] w-[80px] text-[#B2B2B2] font-normal text-[12px]">
        {date}
      </div>
    </div>
  );
};

const Videos = () => {
  const performances = [
    { title: 'Performance 1', date: '2026', image: '/images/performance1.png' },
    { title: 'Performance 2', date: '2026', image: '/images/performance2.png' },
    { title: 'Performance 3', date: '2026', image: '/images/performance3.png' },
  ];

  const musicVideos = [
    { title: 'Video 1', date: '2026', image: '/images/video1.png' },
    { title: 'Video 2', date: '2026', image: '/images/video2.png' },
    { title: 'Video 3', date: '2026', image: '/images/video3.png' },
  ];

  const scores = [
    { title: 'Score 1', date: '2026', image: '/images/score1.png' },
    { title: 'Score 2', date: '2026', image: '/images/score2.png' },
    { title: 'Score 3', date: '2026', image: '/images/score3.png' },
  ];

  const renderSection = (title: string, videos: typeof performances) => (
    <section className="mb-12">
      <h2 className="font-bold text-[20px] mb-4">{title}</h2>
      <div className="flex flex-row gap-6 overflow-x-auto">
        {videos.map((video, i) => (
          <VideoCard key={i} {...video} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="w-full min-h-screen bg-[#000000] text-white p-8">
      {renderSection('Performances', performances)}
      {renderSection('Music Videos', musicVideos)}
      {renderSection('Scores', scores)}
    </div>
  );
};

export default Videos;