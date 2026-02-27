import React, { useState } from "react";

interface Box {
  id: number;
  content?: string;
  rotation: number;
}

const CommunityPage: React.FC = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User input:", input);
    setInput("");
  };

  const boxes: Box[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    rotation: 15, // all rotated the same
    content: `Box ${i + 1}`,
  }));

  return (
    <div className="min-h-screen relative">
      {/* Top light section */}
<section className="bg-[#EBEBE6] pt-[300px] pb-[100px] text-center relative z-10">
        <h1 className="font-bold text-3xl md:text-4xl mb-4">
          A place for everything
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto leading-relaxed text-sm md:text-base mb-8">
          Leave a word, a sentence, a story, or just a feeling. Some might inspire music. Most just sit here to be shared together.
        </p>
      </section>

      {/* Dark rectangle section */}
      <section className="bg-[#1D2124] w-full min-h-[1000px] relative z-0 py-16">
        {/* Input form */}
<form
  onSubmit={handleSubmit}
  className="flex flex-row gap-[10px] w-[600px] mx-auto items-center mb-16 pt-[50px] pb-[50px]"
>
<input
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder="Something small, something weird, something yours"
  className="flex-1 w-[400px] h-[60px] px-[20px] py-[16px] text-[16px] text-[#757575] bg-white border border-[#D9D9D9] rounded-[8px] focus:outline-none"
/>
<button
  type="submit"
  className="flex justify-center items-center w-[100px] h-[60px] bg-[#2C2C2C] border border-[#2C2C2C] rounded-[8px] text-[16px] text-[#F5F5F5]"
>
  Submit
</button>
        </form>

        {/* Collage of white boxes with spacing for rotation */}
        <div
          className="grid justify-center mx-auto mt-24"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "20px 30px", // vertical and horizontal gap
            maxWidth: "1000px",
          }}
        >
{boxes.map((box) => (
  <div
    key={box.id}
    className="w-[260px] h-[360px] flex items-center justify-center"
  >
    <div
      className="w-[200px] h-[300px] flex items-center justify-center text-black font-bold shadow-lg bg-white hover:bg-[#EBEBE6] transition duration-200"
      style={{
        transform: `rotate(${box.rotation}deg)`,
        backgroundColor: "white",
      }}
    >
      {box.content}
    </div>
  </div>
))}
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;