// Header.tsx
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "Songs", path: "/songs" },
  { name: "Gallery", path: "/gallery" },
  { name: "Videos", path: "/videos" },
  { name: "Contact", path: "/contact" },
  { name: "Community", path: "/community" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[200px] bg-black">
      {/* Logo */}
      <Link to="/">
        <img
          src="/logo.png"
          className="absolute w-[185px] h-[201px] cursor-pointer"
          style={{ left: "50%", transform: "translateX(-50%)", top: "5%" }}
          alt="logo"
        />
      </Link>

      {/* Tabs */}
      <div className="absolute top-[160px] left-1/2 -translate-x-1/2 flex items-center space-x-12">
        {tabs.map((tab, i) => (
          <Link
            key={i}
            to={tab.path}
            className={`text-white text-[32px] transition duration-300 hover:text-[#428EFF]
              ${location.pathname === tab.path ? "text-[#428EFF]" : ""}`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;