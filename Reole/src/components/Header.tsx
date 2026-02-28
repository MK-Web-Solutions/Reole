import { Link, useLocation } from "react-router-dom";

const tabs = [
  //{ name: "Songs", path: "/songs" },
  //{ name: "Gallery", path: "/gallery" },
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
          src="/logo.svg"
          className="w-[150px] sm:w-[300px] h-auto cursor-pointer mt-2"
          alt="logo"
        />
      </Link>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
        {tabs.map((tab, i) => (
          <Link
            key={i}
            to={tab.path}
className={`
  flex justify-center items-center
  w-[100px] sm:w-[200px] md:w-[426px]
  h-[40px] sm:h-[51px]
  rounded-md
  text-[18px] sm:text-[22px] md:text-[28px]
  transition duration-300
  ${location.pathname === tab.path 
    ? "text-gray-700 bg-gray-300" 
    : "text-white hover:text-gray-500 hover:bg-gray-700"}
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