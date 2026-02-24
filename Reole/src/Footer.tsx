import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
<footer className="w-full py-16 flex flex-col items-center" style={{ backgroundColor: '#E4E0E0' }}>
      {/* Scrolling Carousels */}
      <div className="w-full overflow-hidden mb-12">
        {/* Row 1 - scroll left */}
        <div
          className="flex animate-marquee whitespace-nowrap"
          style={{ backgroundColor: 'black', color: 'white' }}
        >
          {songsRow1.concat(songsRow1).map((song, i) => (
            <div
              key={i}
              className="inline-block px-16 font-futura font-bold text-[30px]"
            >
              {song.name} COMING SOON. {song.date}
            </div>
          ))}
        </div>

        {/* Row 2 - scroll right */}
        <div
          className="flex animate-marquee-reverse whitespace-nowrap"
          style={{ backgroundColor: 'black', color: 'white' }}
        >
          {songsRow2.concat(songsRow2).map((song, i) => (
            <div
              key={i}
              className="inline-block px-16 font-futura font-bold text-[30px]"
            >
              {song.name} COMING SOON. {song.date}
            </div>
          ))}
        </div>
      </div>

      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="w-[175px] h-auto mb-6" />
<div className="flex space-x-6 mb-12">
  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="w-20 h-20 rounded-full bg-[#222326] flex items-center justify-center hover:bg-gray-700 transition"
  >
    <FontAwesomeIcon icon={faTiktok} className="w-10 h-10 text-white" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="w-20 h-20 rounded-full bg-[#222326] flex items-center justify-center hover:bg-gray-700 transition"
  >
    <FontAwesomeIcon icon={faInstagram} className="w-10 h-10 text-white" />
  </a>
</div>

{/* Contact Form */}
<section className="w-full max-w-[333px] bg-white p-3 rounded-[10px] border border-[#D9D9D9] mb-8">
  <h2 className="text-center font-bold text-sm mb-3">Contact Me</h2>
  <form 
    id="contact-form" 
    action="https://formspree.io/f/xldnekkn" 
    method="POST" 
    className="flex flex-col gap-3"
  >
    {/* Name */}
    <div className="flex flex-col gap-[4px]">
      <label htmlFor="name" className="text-[9px] text-[#1E1E1E]">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name"
        required
        className="w-full h-[22px] px-2 py-[6px] border border-[#D9D9D9] rounded-[4px] text-[9px] text-[#B3B3B3]"
      />
    </div>

    {/* Email */}
    <div className="flex flex-col gap-[4px]">
      <label htmlFor="email" className="text-[9px] text-[#1E1E1E]">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="your.email@example.com"
        required
        className="w-full h-[22px] px-2 py-[6px] border border-[#D9D9D9] rounded-[4px] text-[9px] text-[#B3B3B3]"
      />
    </div>

    {/* Message */}
    <div className="flex flex-col gap-[4px]">
      <label htmlFor="message" className="text-[9px] text-[#1E1E1E]">Message</label>
      <textarea
        id="message"
        name="message"
        rows={3}
        placeholder="Write your message here..."
        required
        className="w-full px-2 py-[6px] border border-[#D9D9D9] rounded-[4px] text-[9px] text-[#B3B3B3] resize-none h-[43px]"
      ></textarea>
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-[#2C2C2C] text-white text-[9px] py-1 rounded-[4px] hover:bg-gray-800 transition mt-1"
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