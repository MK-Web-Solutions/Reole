import React, { useState, useEffect } from "react";
import { boxesData } from "../data/boxes";

interface Box {
  id: number;
  content: string;
  rotation: number;
}

const CommunityPage: React.FC = () => {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(""); // confirmation text
  const [showStatus, setShowStatus] = useState(false); // controls fade

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) {
      setStatus("Please enter something before submitting.");
      setShowStatus(true);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mjgezpgo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (response.ok) {
        setStatus("Thanks! Your message has been sent.");
        setInput("");
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
      setShowStatus(true);
    } catch (err) {
      console.error(err);
      setStatus("Error sending message. Please try again later.");
      setShowStatus(true);
    }
  };

  // Automatically fade out the status message
  useEffect(() => {
    if (!showStatus) return;

    const timer = setTimeout(() => {
      setShowStatus(false);
    }, 3000); // fade out after 3 seconds

    return () => clearTimeout(timer);
  }, [showStatus]);

  // Add rotation to each imported box
  const boxes: Box[] = boxesData.map(box => ({
    ...box,
    rotation: 15
  }));

  return (
    <div className="min-h-screen relative">
      <section className="bg-[#EBEBE6] pt-[300px] pb-[100px] text-center relative z-10">
        <h1 className="font-bold text-3xl md:text-4xl mb-4">A place for everything</h1>
        <p className="text-gray-700 max-w-xl mx-auto leading-relaxed text-sm md:text-base mb-8">
          Leave a word, a sentence, a story, or just a feeling. Some might inspire music. Most just sit here to be shared together.
        </p>
      </section>

      <section className="bg-[#1D2124] w-full min-h-[1000px] relative z-0 py-16">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row gap-[10px] w-[600px] mx-auto items-center mb-16 pt-[50px] pb-[50px]"
        >
          <input
            type="text"
            name="message"
            placeholder="Something small,something weird,something yours"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 w-[400px] h-[60px] px-[20px] py-[16px] text-[16px] text-[#757575] bg-white border border-[#D9D9D9] rounded-[8px] focus:outline-none"
          />
          <button
            type="submit"
            className="flex justify-center items-center w-[100px] h-[60px] bg-[#2C2C2C] border border-[#2C2C2C] rounded-[8px] text-[16px] text-[#F5F5F5] hover:bg-[#2F3539] transition duration-200"
          >
            Submit
          </button>
        </form>

{/* Fading confirmation message */}
{status && (
  <p
    className={`text-center mb-6 font-medium transition-opacity duration-700 ${
      showStatus ? "opacity-100" : "opacity-0"
    }`}
    style={{ color: "#FFFFFF" }} // force white text
  >
    {status}
  </p>
)}

        <div
          className="grid grid-rows-3 grid-flow-col overflow-x-auto mx-auto mt-24 px-10"
          style={{ gap: "20px 30px", paddingBottom: "100px", paddingTop: "50px" }}
        >
          {boxes.map((box) => (
            <div key={box.id} className="w-[250px] h-[365px] flex items-center justify-center">
              <div
                className="w-[250px] h-[350px] flex items-center justify-center text-black font-medium text-center px-4 
                bg-white shadow-lg 
                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:bg-[#F7F7F2] rounded-[15px]"
                style={{ transform: `rotate(${box.rotation}deg)`, backgroundColor: "white" }}
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