type Song = {
  name: string;
  date: string;
};

const songsRow1: Song[] = [
  { name: "Song ", date: "2024" },
  { name: "Song ", date: "2024" },
  { name: "Song ", date: "2024" },
];

const songsRow2: Song[] = [
  { name: "Song ", date: "2024" },
  { name: "Song ", date: "2024" },
  { name: "Song ", date: "2024" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-black py-16 flex flex-col items-center text-white">
      {/* Scrolling Carousels */}
      <div className="w-full overflow-hidden mb-12 bg-black">
        {/* Row 1 - scroll left */}
        <div className="flex animate-marquee whitespace-nowrap mb-4 text-white">
          {songsRow1.concat(songsRow1).map((song, i) => (
            <div key={i} className="inline-block px-16 font-futura font-bold text-[30px]">
              {song.name} COMING SOON. {song.date}
            </div>
          ))}
        </div>

        {/* Row 2 - scroll right */}
        <div className="flex animate-marquee-reverse whitespace-nowrap text-white">
          {songsRow2.concat(songsRow2).map((song, i) => (
            <div key={i} className="inline-block px-16 font-futura font-bold text-[30px]">
              {song.name} COMING SOON. {song.date}
            </div>
          ))}
        </div>
      </div>

      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="w-[175px] h-auto mb-6" />

      {/* Social Media Buttons */}
      <div className="flex space-x-4 mb-12">
        {['/icon1.png','/icon2.png','/icon3.png'].map((icon, i) => (
          <a key={i} href="#" className="w-9 h-9 rounded-full bg-[#222326] flex items-center justify-center hover:bg-gray-700 transition">
            <img src={icon} alt={`Social ${i}`} className="w-4 h-4"/>
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <section className="w-full max-w-[400px] bg-white p-6 rounded-md border border-gray-300 mb-8 text-black">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
        <form 
          id="contact-form" 
          action="https://formspree.io/f/xldnekkn" 
          method="POST" 
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium mb-1">Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your name" 
              required 
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium mb-1">Email <span className="text-red-500">*</span></label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="your.email@example.com" 
              required 
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="font-medium mb-1">Message <span className="text-red-500">*</span></label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              placeholder="Write your message here..." 
              required 
              className="border border-gray-300 rounded px-3 py-2 resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-[#2F3539] text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* CSS for marquee animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          display: inline-flex;
          animation: marquee-reverse 20s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;