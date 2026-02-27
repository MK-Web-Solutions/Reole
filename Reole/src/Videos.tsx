import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoCard = ({
  title,
  date,
  image,
  onOpen,
}: {
  title: string;
  date: string;
  image: string;
  onOpen: () => void;
}) => (
  <div
    className="min-w-[220px] w-[220px] h-[300px] rounded-[20px] overflow-hidden p-4 flex flex-col justify-between cursor-pointer transition duration-200 hover:bg-[#EBEBE6] hover:-translate-y-1"
    onClick={onOpen}
  >
    <div className="w-full h-[180px] overflow-hidden rounded-[15px]">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="mt-4 flex flex-col items-center text-center">
      <h3 className="font-bold text-base leading-tight line-clamp-2 text-white">
        {title}
      </h3>
      <p className="text-sm mt-1 text-white">{date}</p>
    </div>
  </div>
);

const Videos = () => {
  const performances = [
    { title: "Performance 1", date: "2026", image: "/performance1.png" },
    { title: "Performance 2", date: "2026", image: "/performance2.png" },
    { title: "Performance 3", date: "2026", image: "/performance2.png" },
    { title: "Performance 4", date: "2026", image: "/performance1.png" },
  ];

  const [openCard, setOpenCard] = useState<string | null>(null);
  const currentVideo = performances.find((v) => v.title === openCard);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenCard(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const renderSection = (title: string, videos: typeof performances) => (
<section className="flex flex-col gap-6 px-4 sm:px-8 md:px-16 lg:px-24">
<div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 flex">
  <h1 className="font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-8xl text-white my-6 text-left lg:text-center mx-auto lg:max-w-4xl ">
    {title}
  </h1>
</div>
  <div className="overflow-x-auto w-full">
    <div className="flex flex-nowrap py-4 space-x-[54px] justify-center min-w-full">
      {videos.map((video) => (
        <VideoCard key={video.title} {...video} onOpen={() => setOpenCard(video.title)} />
      ))}
    </div>
  </div>
</section>
  );

  return (
    <div className="bg-[#D9D9D9] flex flex-col gap-12 pt-[300px] pb-64">
      {renderSection("Performances", performances)}
      {renderSection("Music Videos", performances)}
      {renderSection("Scores", performances)}

      {/* Fullscreen modal */}
<AnimatePresence>
  {currentVideo && (
    <motion.div
      className="fixed inset-0 z-50 bg-black bg-opacity-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setOpenCard(null)}
    >
      <motion.div
        className="bg-[#222] rounded-[20px] overflow-hidden shadow-2xl cursor-auto flex flex-col"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(400px, 60vw, 900px)', // responsive width
          maxHeight: '90vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image/video */}
        <div className="w-full h-[60%] overflow-hidden">
          <img
            src={currentVideo.image}
            alt={currentVideo.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="p-6 text-white flex-1 overflow-auto">
          <h2 className="text-3xl font-bold mb-2">{currentVideo.title}</h2>
          <p className="text-sm mb-4">{currentVideo.date}</p>
          <p>Full description here. Card now scales nicely on different screen sizes.</p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

export default Videos;