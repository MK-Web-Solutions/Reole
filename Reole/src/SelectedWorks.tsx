import { Link } from "react-router-dom";

const SelectedWorks = () => {
  return (
    <section className="relative w-full bg-[#1D2124] flex justify-center py-16">
      <div className="relative w-[1527px] h-[1242px]">

        {/* Main Title */}
        <h2 className="absolute top-[23px] left-1/2 -translate-x-1/2 text-white font-semibold text-[45px] leading-[54px] font-inter">
          Selected Works
        </h2>

        {/* Songs Wrapper */}
        <div className="absolute top-[108px] left-1/2 -translate-x-1/2 w-[1000px] flex flex-col gap-6">
          {[2, 9, 13].map((num, index) => (
            <div key={index} className="flex w-full h-[120px] gap-6">

              {/* Artwork */}
              <div
                className="w-[120px] h-[120px] rounded-[16px] bg-cover bg-center"
                style={{ backgroundImage: `url('/Untitled_Artwork${num}.jpg')` }}
              />

              {/* Song Info */}
              <div className="flex flex-col justify-between flex-1 h-full">

                {/* Title + Artist */}
                <div className="flex flex-col gap-1">
                  <p className="text-white text-[18px] leading-[28px] font-roboto font-normal">
                    Song Title {index + 1}
                  </p>
                  <p className="text-[#AFAFAF] text-[12px] leading-[20px] tracking-[0.25px] font-roboto">
                    Artist / Year
                  </p>
                </div>

                {/* Date / Time / Play */}
                <div className="flex justify-between items-center w-full text-[#AFAFAF] text-[12px] leading-[16px] tracking-[0.4px] font-roboto">
                  <div className="flex items-center gap-1">
                    <span>Date</span>
                    <span>|</span>
                    <span className="flex-1">Time</span>
                  </div>

                  <div className="relative w-[24px] h-[24px]">
                    <div className="absolute left-[33%] right-[21%] top-[21%] bottom-[21%] 
                                    bg-white 
                                    clip-path-[polygon(0%_0%,100%_50%,0%_100%)]" />
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* View All Songs Button */}
        <div className="absolute top-[541px] left-1/2 translate-x-[245px] w-[138px] h-[24px] bg-[#1E2225] rounded-[5px] flex items-center justify-center">
          <Link
            to="/songs"
  style={{ color: 'white', transition: 'color 0.2s' }}
  onMouseEnter={e => e.target.style.color = '#E1306C'}
  onMouseLeave={e => e.target.style.color = 'white'}
  className="text-[12px] font-medium font-inter"          >
            View All Songs
          </Link>
        </div>

        {/* Divider */}
        <div className="absolute top-[660px] left-1/2 -translate-x-1/2 w-[181px] h-[1px] bg-white" />

        {/* Videos Section */}
        <div className="absolute top-[700px] left-1/2 -translate-x-1/2 w-[1100px] flex justify-between gap-36">

          {/* Left Video */}
          <div className="flex flex-col w-[532px] rounded-[15px]gap-2">
            <div
              className="w-full h-[296px] bg-cover bg-center rounded-[15px] "
              style={{ backgroundImage: `url('/performance1.png')` }}
            />
            <p className="text-white text-[18px] leading-[28px] font-roboto font-normal">
              Performance 1
            </p>
            <p className="text-[#C6C6C6] text-[10px] leading-[15px] font-roboto">
              Description / Date
            </p>
            <div className="mt-2 self-end w-[89px] h-[15px] bg-[#1E2225] rounded-[5px] flex items-center justify-center">
              <Link
                to="/videos"
  style={{ color: 'white', transition: 'color 0.2s' }}
  onMouseEnter={e => e.target.style.color = '#E1306C'}
  onMouseLeave={e => e.target.style.color = 'white'}
  className="text-[12px] font-medium font-inter"              >
                View All Scores
              </Link>
            </div>
          </div>

          {/* Right Video */}
          <div className="flex flex-col w-[532px] gap-2">
            <div
              className="w-full h-[296px] bg-cover bg-center rounded-[15px]"
              style={{ backgroundImage: `url('/performance2.png')` }}
            />
            <p className="text-white text-[18px] leading-[28px] font-roboto font-normal">
              Performance 2
            </p>
            <p className="text-[#C6C6C6] text-[10px] leading-[15px] font-roboto">
              Description / Date
            </p>
            <div className="mt-2 self-end w-[130px] h-[16px] bg-[#1E2225] rounded-[5px] flex items-center justify-center">
<Link
  to="/videos"
  style={{ color: 'white', transition: 'color 0.2s' }}
  onMouseEnter={e => e.target.style.color = '#E1306C'}
  onMouseLeave={e => e.target.style.color = 'white'}
  className="text-[12px] font-medium font-inter"
>
  View All Performances
</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;