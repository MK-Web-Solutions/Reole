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
<div className="min-w-[220px] w-[220px] h-[300px] rounded-[20px] overflow-hidden p-4 flex flex-col justify-between cursor-pointer transition duration-200 hover:bg-[#EBEBE6] hover:-translate-y-1">
  
  <div className="w-full h-[180px] overflow-hidden rounded-[15px]">
    <img src={image} alt={title} className="w-full h-full object-cover" />
  </div>

  <div className="mt-4 flex flex-col items-center text-center">
    <h3 className="font-bold text-base leading-tight line-clamp-2 text-white">
      {title}
    </h3>
    <p className="text-sm mt-1 text-white">
      {date}
    </p>
  </div>
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

const renderSection = (title: string, videos: typeof performances, isLast = false) => (
<section className={`flex flex-col gap-6 px-4 sm:px-8 md:px-16 lg:px-24 ${isLast ? "mb-96 lg:mb-[20rem]" : ""}`}>    <h2 className="font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-7xl text-white">
      {title}
    </h2>

    <div className="overflow-x-auto w-full">
      <div className="flex flex-nowrap py-4 space-x-[54px] justify-center min-w-full">
        {videos.map((video, i) => (
          <VideoCard key={i} {...video} />
        ))}
      </div>
    </div>
  </section>
);

return (
<div className="bg-[#D9D9D9] flex flex-col gap-12 pt-[300px] pb-64">
  {renderSection("Performances", performances)}
  {renderSection("Music Videos", performances)}
  {renderSection("Scores", performances, true)}
  <div className="h-64 lg:h-80"></div>
</div>

);
};

export default Videos;