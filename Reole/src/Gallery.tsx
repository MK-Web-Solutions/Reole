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
      <p
        className="text-xl text-gray-400"
        style={{
          animation: 'fadeInUp 1.5s 0.3s ease-in-out forwards',
          opacity: 0,
        }}
      >
        🎨 Gallery under construction
      </p>

      <style>
        {`
          @keyframes fadeInUp {
            0% {
              transform: translateY(20px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;