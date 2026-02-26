const VideoCard = ({
  title,
  date,
  image,
}: {
  title: string;
  date: string;
  image: string;
}) => {
  return (
    <div
      className="flex-shrink-0 w-[220px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[240px] 
                 bg-[#1D2124] hover:bg-[rgba(255,255,255,0.08)] 
                 transition-all duration-200 transform hover:scale-105 
                 rounded-md p-2 flex flex-col cursor-pointer"
    >
      <div className="w-full aspect-square rounded-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="mt-2 text-white font-bold text-sm line-clamp-2">{title}</div>
      <div className="text-[#B2B2B2] text-xs">{date}</div>
    </div>
  );
};

const Videos = () => {
  const performances = [
    { title: "Performance 1", date: "2026", image: "/performance1.png" },
    { title: "Performance 2", date: "2026", image: "/performance2.png" },
    { title: "Performance 3", date: "2026", image: "/performance2.png" },
    { title: "Performance 4", date: "2026", image: "/performance1.png" },
  ];

  const musicVideos = [
    { title: "Video 1", date: "2026", image: "/performance1.png" },
    { title: "Video 2", date: "2026", image: "/performance2.png" },
    { title: "Video 3", date: "2026", image: "/performance1.png" },
    { title: "Video 4", date: "2026", image: "/performance2.png" },
  ];

  const scores = [
    { title: "Score 1", date: "2026", image: "/performance1.png" },
    { title: "Score 2", date: "2026", image: "/performance2.png" },
    { title: "Score 3", date: "2026", image: "/performance1.png" },
    { title: "Score 4", date: "2026", image: "/performance2.png" },
  ];
const renderSection = (title: string, videos: typeof performances) => (
  <section className="flex flex-col gap-4">
    <h2 className="text-white font-bold text-xl">{title}</h2>
<div className="w-full overflow-x-auto py-4">
  <div className="flex flex-nowrap space-x-6 px-6">
    {videos.map((video, i) => (
      <VideoCard key={i} {...video} />
    ))}
  </div>
</div>
  </section>
);

  return (
    <div
      className="bg-[#1D2124] text-white flex flex-col gap-12"
      style={{ paddingTop: 300 }} // adjust to match your header height
    >
      {renderSection("Performances", performances)}
      {renderSection("Music Videos", musicVideos)}
      {renderSection("Scores", scores)}
    </div>
  );
};

export default Videos;