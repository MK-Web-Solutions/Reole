import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

type Release = {
  title: string;
  type: "Single" | "EP" | "Album" | "Film" | "Live" | "Other";
  releaseDate: string;
};

const upcomingReleases: Release[] = [
  { title: "Midnight Echoes", type: "EP", releaseDate: "March 2026" },
  { title: "Live Studio Session", type: "Film", releaseDate: "April 2026" },
  { title: "Neon Collapse", type: "Single", releaseDate: "May 2026" },
];

const Footer = () => {
  return (
    <footer className="w-full py-16 flex flex-col items-center bg-[#E4E0E0]">

      {/* Scrolling Marquee */}
      <div className="w-full mb-12 ">
{/* Row 1 */}
<div className="w-full h-[220px] flex items-center overflow-hidden" style={{ backgroundColor: '#000000' }}>
  <div className="flex animate-marquee whitespace-nowrap font-futura font-bold text-[30px] uppercase" style={{ color: '#FFFFFF' }}>
    {upcomingReleases.concat(upcomingReleases).map((release, i) => (
      <div key={i} className="inline-block px-12">
        {`${release.title} COMING SOON . ${release.releaseDate}`}&nbsp;&nbsp;
      </div>
    ))}
  </div>
</div>

{/* Row 2 */}
<div className="w-full h-[220px] flex items-center overflow-hidden" style={{ backgroundColor: '#000000' }}>
  <div className="flex animate-marquee-reverse whitespace-nowrap font-futura font-bold text-[30px] uppercase" style={{ color: '#FFFFFF' }}>
    {upcomingReleases.concat(upcomingReleases).map((release, i) => (
      <div key={i} className="inline-block px-12">
        {`${release.title} COMING SOON . ${release.releaseDate}`}&nbsp;&nbsp;
      </div>
    ))}
  </div>
</div>
      </div>

      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="w-[175px] h-auto mb-6" />

{/* Social Icons */}
<div className="flex space-x-6 mb-12">
  {/* TikTok */}
  <a
    href="https://www.tiktok.com/@yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="w-20 h-20 rounded-full bg-black flex items-center justify-center hover:bg-gray-700 transition"
  >
    <FontAwesomeIcon icon={faTiktok} className="w-10 h-10 text-white" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="w-20 h-20 rounded-full bg-black flex items-center justify-center hover:bg-gray-700 transition"
  >
    <FontAwesomeIcon icon={faInstagram} className="w-10 h-10 text-white" />
  </a>
</div>

      {/* Contact Form */}
      <section className="w-full max-w-[333px] bg-white p-3 rounded-[10px] border border-[#D9D9D9] mb-8">
        <h2 className="text-center font-bold text-sm mb-3">Contact Me</h2>

        <form
          action="https://formspree.io/f/xldnekkn"
          method="POST"
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-[4px]">
            <label className="text-[9px] text-[#1E1E1E]">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full h-[22px] px-2 border border-[#D9D9D9] rounded-[4px] text-[9px]"
            />
          </div>

          <div className="flex flex-col gap-[4px]">
            <label className="text-[9px] text-[#1E1E1E]">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full h-[22px] px-2 border border-[#D9D9D9] rounded-[4px] text-[9px]"
            />
          </div>

          <div className="flex flex-col gap-[4px]">
            <label className="text-[9px] text-[#1E1E1E]">Message</label>
            <textarea
              name="message"
              rows={3}
              required
              className="w-full h-[43px] px-2 border border-[#D9D9D9] rounded-[4px] text-[9px] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2C2C2C] text-white text-[9px] py-1 rounded-[4px] hover:bg-gray-800 transition mt-1"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Marquee Animation */}
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