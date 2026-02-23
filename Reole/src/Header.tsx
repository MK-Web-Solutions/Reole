// Header.tsx
const Header = () => {
  const tabs = ['Songs', 'Gallery', 'Videos', 'Contact', 'Community'];

  return (
    <header className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center space-x-12 z-50">
      {tabs.map((tab, i) => (
        <div
          key={i}
          className="text-white font-light text-[32px] leading-[39px] cursor-pointer w-[94px] text-center
                     drop-shadow-[0_0_6px_rgba(0,0,0,0.7)]
                     transition-transform transition-colors duration-300
                     hover:text-[#428EFF] hover:scale-105"
        >
          {tab}
        </div>
      ))}
    </header>
  );
};

export default Header;
