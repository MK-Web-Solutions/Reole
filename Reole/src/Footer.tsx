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
      <img src="/logo.png" alt="Logo" className="w-[175px] h-auto mb-8" />



      {/* Social Icons */}
      <div className="flex justify-center items-center space-x-[100px] mb-[24px]">
        <a
          href="https://www.tiktok.com/@yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[22px] h-[23px] bg-black flex items-center justify-center rounded"
        >
          <FontAwesomeIcon icon={faTiktok} className="w-full h-full text-white" />
        </a>

        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[22px] h-[23px] bg-black flex items-center justify-center rounded"
        >
          <FontAwesomeIcon icon={faInstagram} className="w-full h-full text-white" />
        </a>
      </div>

      {/* Contact Form */}
      <section className="w-[333px] bg-white p-[12.825px] rounded-[15px] border border-[#D9D9D9] flex flex-col gap-[12.83px] mb-[32px]">
        <h2 className="text-[18px] font-roboto font-normal leading-[28px] text-black text-center">
          Contact Me
        </h2>

        <form
          action="https://formspree.io/f/xldnekkn"
          method="POST"
          className="flex flex-col gap-[12.83px]"
        >
          {/* Name Field */}
          <div className="flex flex-col gap-[4.28px]">
            <label className="text-[8.55px] text-[#1E1E1E] font-inter">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-[307.35px] h-[21.83px] px-[8.55px] py-[6.4125px] border border-[#D9D9D9] rounded-[15px] text-[8.55px] text-[#B3B3B3]"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-[4.28px]">
            <label className="text-[8.55px] text-[#1E1E1E] font-inter">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-[307.35px] h-[21.83px] px-[8.55px] py-[6.4125px] border border-[#D9D9D9] rounded-[15px] text-[8.55px] text-[#B3B3B3]"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-[4.28px]">
            <label className="text-[8.55px] text-[#1E1E1E] font-inter">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={3}
              className="w-[307.35px] h-[42.75px] px-[8.55px] py-[6.4125px] border border-[#D9D9D9] rounded-[15px] text-[8.55px] text-[#B3B3B3] resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[307.35px] h-[21.83px] bg-[#2F3539] border border-[#2C2C2C] rounded-[15px] text-[8.55px] text-[#F5F5F5] mt-[8.55px] hover:bg-[#2C2C2C] transition duration-200"
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