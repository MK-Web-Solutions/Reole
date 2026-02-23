import SelectedWorks from './SelectedWorks.tsx'; // make sure the path is correct
import Footer from './Footer.tsx'; // if you have a Footer component
import Header from './Header.tsx'; // if you have a Header component

const App = () => {
  return (
    <div className="w-full relative">

      {/* Tabs Header (floating over hero) */}

      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[150vh]">
        <img 
          src="/me.jpeg"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt="hero"
        />

        {/* Logo */}
        <img 
          src="/logo.png"
          className="absolute w-[185px] h-[201px] z-10" 
          style={{ left: 'calc(50% - 92.5px + 0.5px)', top: '5%' }}
          alt="logo"
        />

        {/* Overlay Text */}
        <h1
          className="absolute text-white font-light text-[40px] leading-[48px] tracking-[0.1em] capitalize z-10 drop-shadow-md"
          style={{ width: '170px', height: '193px', left: 'calc(50% - 85px + 566px)', top: '70%' }}
        >
          Music that shapes story
        </h1>
  {/* Big Reolenm Image at bottom of hero */}
  <img
    src="/Reolenm.png"
    className="absolute z-10"
    style={{
      width: '1050px', // match Figma size or adjust
      height: '356px',
      left: '50%',
      bottom: '20px', // distance from bottom of hero section
      transform: 'translateX(-50%) rotate(0.54deg)', // center and slight rotation
    }}
    alt="Reolenm"
  />
</section>
      {/* Biography Section */}
      <section className="relative w-full bg-[#EBEBE6] py-14 flex flex-col items-center">
        <h2 className="font-semibold text-[60px] leading-[73px] capitalize text-black mb-8">
          Biography
        </h2>

        <p className="font-normal text-[34px] leading-[140%] text-[#565656] max-w-[1150px] text-center mb-12">
          Reole is a multi-instrumentalist & composer working across songwriting, film scoring, and music technology. Her work blends performance, sound design, and hands-on hardware experimentation.
        </p>
        {/* Scroll to Explore More */}
        <p className="font-medium text-[32px] leading-[39px] text-[#6F6F6F] text-center mb-4">
          Scroll to explore more
        </p>

        {/* SVG Down Arrow */}
        <svg
          className="w-[59px] h-[47px] mt-2"
          viewBox="0 0 59 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.5 1.95833V41.125M29.5 41.125L14.75 28.9398M29.5 41.125L44.25 28.9398"
            stroke="#1E1E1E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </section>
      <SelectedWorks />
      <Footer />
    </div>
  );
};

export default App;