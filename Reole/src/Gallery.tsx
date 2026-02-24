const Gallery = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1
        className="text-5xl font-bold mb-4"
        style={{
          animation: 'fadeInUp 1.5s ease-in-out forwards',
          opacity: 0,
        }}
      >
        Coming Soon
      </h1>


    </div>
  );
};

export default Gallery;