import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { upcomingReleases } from '../data/releases';

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      setShowStatus(true);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xgolqpvg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thanks! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Oops! Something went wrong.");
      }
      setShowStatus(true);
    } catch {
      setStatus("Error sending message. Please try again later.");
      setShowStatus(true);
    }
  };

  useEffect(() => {
    if (!showStatus) return;
    const timer = setTimeout(() => setShowStatus(false), 4000);
    return () => clearTimeout(timer);
  }, [showStatus]);

  return (
    <footer className="w-full py-16 flex flex-col items-center bg-[#E4E0E0]">
      {/* Scrolling Marquee */}
      <div className="w-full mb-12">
        {/* Row 1 */}
        <div className="w-full h-[220px] flex items-center overflow-hidden" style={{ backgroundColor: '#000' }}>
          <div className="flex animate-marquee whitespace-nowrap font-futura font-bold text-[30px] uppercase" style={{ color: '#FFF' }}>
            {[...upcomingReleases, ...upcomingReleases, { title: "SPACER", type: "Other", releaseDate: "" }].map((release, i) => (
              <div
                key={i}
                className="inline-block"
                style={{ marginRight: release.title === "SPACER" ? "200px" : "80px" }}
              >
                {release.title !== "SPACER" ? `${release.title} COMING SOON • ${release.releaseDate}` : ""}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-full h-[220px] flex items-center overflow-hidden" style={{ backgroundColor: '#000' }}>
          <div className="flex animate-marquee-reverse whitespace-nowrap font-futura font-bold text-[30px] uppercase" style={{ color: '#FFF' }}>
            {[...upcomingReleases, ...upcomingReleases, { title: "SPACER", type: "Other", releaseDate: "" }].map((release, i) => (
              <div
                key={i}
                className="inline-block"
                style={{ marginRight: release.title === "SPACER" ? "200px" : "80px" }}
              >
                {release.title !== "SPACER" ? `${release.title} COMING SOON • ${release.releaseDate}` : ""}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo */}
      <img 
        src="/l.svg" 
        alt="Logo" 
        className="w-full max-w-[450px] h-auto mb-8" 
      />

      {/* Social Icons */}
      <div className="flex justify-center items-center space-x-[100px] mb-[24px]">
        <a
          href="https://www.tiktok.com/@reole__"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[22px] h-[23px] bg-black flex items-center justify-center rounded"
        >
          <FontAwesomeIcon icon={faTiktok} className="w-full h-full text-white" />
        </a>

        <a
          href="https://www.instagram.com/_reole"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[22px] h-[23px] bg-black flex items-center justify-center rounded"
        >
          <FontAwesomeIcon icon={faInstagram} className="w-full h-full text-white" />
        </a>

        <a
          href="https://www.youtube.com/@may_elshams"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[22px] h-[23px] bg-black flex items-center justify-center rounded"
        >
          <FontAwesomeIcon icon={faYoutube} className="w-full h-full text-white" />
        </a>
      </div>

      {/* Contact Form */}
      <section className="w-[333px] bg-white p-[12.825px] rounded-[15px] border border-[#D9D9D9] flex flex-col gap-[12.83px] mb-[32px]">
        <h2 className="text-[18px] font-roboto font-normal leading-[28px] text-black text-center">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[12.83px]">
          <div className="flex flex-col gap-[4.28px]">
            <label className="text-[8.55px] text-[#1E1E1E] font-inter">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-[307.35px] h-[21.83px] px-[8.55px] py-[6.4125px] border border-[#D9D9D9] rounded-[15px] text-[8.55px] text-[#B3B3B3]"
            />
          </div>

          <div className="flex flex-col gap-[4.28px]">
            <label className="text-[8.55px] text-[#1E1E1E] font-inter">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-[307.35px] h-[21.83px] px-[8.55px] py-[6.4125px] border border-[#D9D9D9] rounded-[15px] text-[8.55px] text-[#B3B3B3]"
            />
          </div>

          <div className="flex flex-col gap-[4.28px]">
            <label className="text-[8.55px] text-[#1E1E1E] font-inter">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={3}
              className="w-[307.35px] h-[42.75px] px-[8.55px] py-[6.4125px] border border-[#D9D9D9] rounded-[15px] text-[8.55px] text-[#B3B3B3] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-[307.35px] h-[21.83px] bg-[#2F3539] border border-[#2C2C2C] rounded-[15px] text-[8.55px] text-[#F5F5F5] mt-[8.55px] hover:bg-[#2C2C2C] transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Smooth fade-in/out confirmation message */}
        <div
          className="text-center mt-2 text-[10px] font-medium text-black transition-all duration-700 ease-in-out overflow-hidden"
          style={{
            opacity: showStatus ? 1 : 0,
            maxHeight: showStatus ? "50px" : "0px",
          }}
        >
          {status}
        </div>
      </section>

      <p>@ 2026 MK Web-Solutions. All rights reserved.</p>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee { display: flex; animation: marquee 30s linear infinite; }
        .animate-marquee-reverse { display: flex; animation: marquee-reverse 30s linear infinite; }
      `}</style>
    </footer>
  );
};

export default Footer;