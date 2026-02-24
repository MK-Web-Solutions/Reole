// Header.tsx
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "Songs", path: "/songs" },
  { name: "Gallery", path: "/gallery" },
  { name: "Videos", path: "/videos" },
  { name: "Community", path: "/community" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black flex flex-col items-center">
      {/* Logo */}
      <Link to="/">
        <img
          src="/logo.png"
          className="w-[185px] h-[201px] cursor-pointer mt-2"
          alt="logo"
        />
      </Link>

      {/* Tabs */}
      <div className="flex gap-4 mt-6">
        {tabs.map((tab, i) => (
          <Link
            key={i}
            to={tab.path}
            className={`
              flex justify-center items-center
              w-[426px] h-[51px]
              rounded-[6.45px]
              text-[20px]
              transition duration-300
              ${location.pathname === tab.path 
                ? "text-gray-700 bg-gray-300"   // active tab text & bg
                : "text-black hover:text-gray-500 hover:bg-gray-200"} // hover effect
            `}
          >
            {tab.name}
          </Link>
        ))}
      </div> 
    </header>
  );
};

export default Header;