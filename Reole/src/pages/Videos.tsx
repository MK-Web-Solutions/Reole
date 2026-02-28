import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { videosData } from "../data/videosData";

const VideoCard = ({
  title,
  youtubeId,
  onOpen,
}: {
  title: string;
  youtubeId: string;
  onOpen: () => void;
}) => {
  const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <div
      className="min-w-[220px] w-[220px] h-[300px] rounded-[20px] overflow-hidden p-4 flex flex-col justify-between cursor-pointer transition duration-200 hover:bg-[#EBEBE6] hover:-translate-y-1"
      onClick={onOpen}
    >
      <div className="w-full h-[180px] overflow-hidden rounded-[15px]">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="mt-4 flex flex-col items-center text-center">
        <h3 className="font-bold text-base leading-tight line-clamp-2 text-white">
          {title}
        </h3>
      </div>
    </div>
  );
};

const Videos = () => {
  const [openCard, setOpenCard] = useState<string | null>(null);
  const currentVideo = videosData.find((v) => v.title === openCard);

  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenCard(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpenCard(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [modalRef]);

  const renderSection = (title: string, videos: typeof videosData) => (
    <section className="flex flex-col gap-6 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="w-full flex">
        <h1 className="font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-8xl text-white my-6 text-left lg:text-center mx-auto lg:max-w-4xl">
          {title}
        </h1>
      </div>
      <div className="overflow-x-auto w-full">
        <div className="flex flex-nowrap py-4 space-x-[54px] justify-center min-w-full">
          {videos.map((video) => (
            <VideoCard
              key={video.title}
              title={video.title}

              youtubeId={video.youtubeId}
              onOpen={() => setOpenCard(video.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-[#D9D9D9] flex flex-col gap-12 pt-[300px] pb-64">
      {renderSection(
        "Live Performances",
        videosData.filter((video) => video.type === "Performance")
      )}
      {renderSection("Scores", videosData.filter((video) => video.type === "Score"))}

      {/* Fullscreen modal */}
      <AnimatePresence>
        {currentVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 overflow-auto flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef} // <-- ref here
              className="bg-[#EBEBE9] rounded-[20px] overflow-hidden shadow-2xl cursor-auto flex flex-col"
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "clamp(300px, 60vw, 900px)",
                aspectRatio: "16/9",
              }}
            >
              {/* YouTube Video */}
              <div className="w-full h-[75%] overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${currentVideo.youtubeId}`}
                  title={currentVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Text */}
              <div className="p-6 text-white flex-1 overflow-auto p">
                <h2 className="text-3xl font-bold mb-2">{currentVideo.title}</h2>
                <p>{currentVideo.details || "Full description here..."}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Videos;