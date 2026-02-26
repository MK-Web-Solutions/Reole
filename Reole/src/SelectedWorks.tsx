import { Link } from "react-router-dom";

const SelectedWorks = () => {
  return (
    <section className="relative w-full bg-[#1D2124] flex justify-center py-16">

      <div className="relative w-[1527px] h-[1242px]">

        {/* Main Title */}
        <h2 className="absolute top-[23px] left-1/2 -translate-x-1/2 text-white font-semibold text-[45px] leading-[54px]">
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
              <div className="flex flex-col justify-between flex-1 h-full text-white">

                {/* Title + Artist */}
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] leading-[28px] font-normal">Song Title {index + 1}</p>
                  <p className="text-[#AFAFAF] text-[12px] leading-[20px] tracking-[0.25px]">Artist / Year</p>
                </div>

                {/* Date / Time / Play */}
                <div className="flex justify-between items-center w-full text-[#AFAFAF] text-[12px] leading-[16px] tracking-[0.4px]">
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
        <div className="absolute top-[541px] left-1/2 translate-x-[245px] 
                        w-[138px] h-[24px] bg-[#1E2225] rounded-[5px] 
                        flex items-center justify-center text-white text-[12px] font-medium">
  <Link
    to="/songs"
    className="px-4 py-2  text-white rounded hover:bg-gray-800 transition text-[8.55px]"
  >
    View All Songs
  </Link>
          </div>



        {/* Divider */}
        <div className="absolute top-[660px] left-1/2 -translate-x-1/2 w-[181px] h-[1px] bg-white" />

{/* Videos Section */}
<div className="absolute top-[700px] left-1/2 -translate-x-1/2 w-[1100px] flex justify-between gap-36">

  {/* Left Video */}
  <div className="flex flex-col w-[532px] gap-2">
    {/* Video */}
    <div
      className="w-full h-[296px] bg-cover bg-center rounded"
      style={{ backgroundImage: `url('/performance1.png')` }}
    />
    {/* Title */}
    <p className="text-[18px] leading-[28px] font-normal text-white">
      Performance 1
    </p>
    {/* Description */}
    <p className="text-[10px] leading-[15px] font-normal text-[#C6C6C6]">
      Description / Date
    </p>
    {/* Button aligned right */}
    <div className="mt-2 self-end w-[89px] h-[15px] bg-[#1E2225] rounded-[5px] flex items-center justify-center text-white text-[12px] font-medium">
  <Link
    to="/videos"
    className="px-4 py-2 text-white rounded hover:bg-gray-800 transition text-[8.55px]"
  >
    View All Scores
  </Link>
      </div>
  </div>

  {/* Right Video */}
  <div className="flex flex-col w-[532px] gap-2">
    {/* Video */}
    <div
      className="w-full h-[296px] bg-cover bg-center rounded"
      style={{ backgroundImage: `url('/performance2.png')` }}
    />
    {/* Title */}
    <p className="text-[18px] leading-[28px] font-normal text-white">
      Performance 2
    </p>
    {/* Description */}
    <p className="text-[10px] leading-[15px] font-normal text-[#C6C6C6]">
      Description / Date
    </p>
    {/* Button aligned right */}
    <div className="mt-2 self-end w-[130px] h-[16px] bg-[#1E2225] rounded-[5px] flex items-center justify-center text-white text-[12px] font-medium">
    <Link
    to="/videos"
    className="px-4 py-2 text-white rounded hover:bg-gray-800 transition text-[8.55px]"
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