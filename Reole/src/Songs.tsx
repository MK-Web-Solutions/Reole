
interface Song {
  id: number;
  title: string;
  cover: string; // image URL
  releaseInfo: string;
  streamLink: string;
}

const singles: Song[] = [
  { id: 1, title: "Single One", cover: "/covers/song1.jpg", releaseInfo: "2026 • Single", streamLink: "#" },
  { id: 2, title: "Single Two", cover: "/covers/song1.jpg", releaseInfo: "2025 • Single", streamLink: "#" },
];

const albums: Song[] = [
  { id: 1, title: "Album One", cover: "/covers/album1.jpg", releaseInfo: "2024 • Album", streamLink: "#" },
  { id: 2, title: "EP One", cover: "/covers/album1.jpg", releaseInfo: "2025 • EP", streamLink: "#" },
  { id: 3, title: "Album Two", cover: "/covers/album1.jpg", releaseInfo: "2023 • Album", streamLink: "#" },
  { id: 4, title: "EP Two", cover: "/covers/album1.jpg", releaseInfo: "2022 • EP", streamLink: "#" },
];

const Songs = () => {
  return (
    <div className="w-full bg-gray-900 text-white pt-[280px] px-8" style={{ backgroundColor: '#E4E0E0' }}>
{/* Singles - vertical list */}
<h1 className="text-2xl font-bold mb-4">Singles</h1>
<div className="flex flex-col gap-4 mb-12">
  {singles.map((song) => (
    <div
      key={song.id}
      className="flex items-center gap-4 bg-gray-800 rounded-lg p-4 hover:bg-gray-700"
    >
      <img
        src={song.cover}
        alt={song.title}
        className="w-[180px] h-[180px] object-cover"      />
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{song.title}</h2>
        <p className="text-gray-400 text-sm">{song.releaseInfo}</p>
      </div>
      <a
        href={song.streamLink}
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
      >
        Stream
      </a>
    </div>
  ))}
</div>

{/* Albums & EPs - horizontal scroll */}
<h1 className="text-2xl font-bold mb-4">Albums & EPs</h1>
<div className="flex overflow-x-auto gap-4 pb-4">
  {albums.map((album) => (
    <div
      key={album.id}
      className="w-[180px] flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700"
    >
      <img
        src={album.cover}
        alt={album.title}
        className="w-[180px] h-[180px] object-cover"
      />
      <div className="p-2">
        <h2 className="font-semibold text-sm">{album.title}</h2>
        <p className="text-gray-400 text-xs">{album.releaseInfo}</p>
        <a
          href={album.streamLink}
          className="mt-2 inline-block px-3 py-1 text-xs bg-blue-600 rounded hover:bg-blue-500"
        >
          Stream
        </a>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Songs;