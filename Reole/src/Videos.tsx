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
    <div className="w-[152px] h-[202px] bg-[rgba(255,255,255,0.08)] rounded-md flex-shrink-0 p-2 flex flex-col">
      <div className="w-[128px] h-[128px] rounded-md overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-2 text-white font-bold text-[14px] leading-[16px]">
        {title}
      </div>
      <div className="text-[#B2B2B2] text-[12px] leading-[14px]">{date}</div>
    </div>
  );
};

const Videos = () => {
  const performances = [
    { title: "Performance 1", date: "2026", image: "/performance1.png" },
    { title: "Performance 2", date: "2026", image: "/performance2.png" },
    { title: "Performance 3", date: "2026", image: "/performance2.png" },
  ];

  const musicVideos = [
    { title: "Video 1", date: "2026", image: "/performance1.png" },
    { title: "Video 2", date: "2026", image: "/performance2.png" },
    { title: "Video 3", date: "2026", image: "/performance1.png" },
  ];

  const scores = [
    { title: "Score 1", date: "2026", image: "/performance1.png" },
    { title: "Score 2", date: "2026", image: "/performance2.png" },
    { title: "Score 3", date: "2026", image: "/performance1.png" },
  ];

  const renderSection = (
    title: string,
    videos: typeof performances
  ) => (
    <section className="flex flex-col gap-2">
      <h2 className="text-white font-bold text-[20px] leading-[24px]">{title}</h2>
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-[repeat(auto-fit,minmax(152px,1fr))] md:gap-6 md:overflow-visible">
        {videos.map((video, i) => (
          <VideoCard key={i} {...video} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="bg-[#1D2124] min-h-screen text-white px-4 pt-[160px] max-w-7xl mx-auto flex flex-col gap-12">
      {renderSection("Performances", performances)}
      {renderSection("Music Videos", musicVideos)}
      {renderSection("Scores", scores)}
    </div>
  );
};

export default Videos;