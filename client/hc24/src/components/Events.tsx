import { useState } from "react";

import bharatImage from "../assets/Screenshot 2024-12-01 115259.png";
import bharatBackground from "../assets/Screenshot 2024-12-01 140019.png";
import classroom from "../assets/Screenshot 2024-12-01 120618.png";
import alumni from "../assets/Screenshot 2024-12-01 120827.png";
import friendsInCarnival from "../assets/Screenshot 2024-12-01 120955.png";
import carnival from "../assets/Screenshot 2024-12-01 143029.png";
import racingCar from "../assets/Screenshot 2024-12-01 140444.png";
import vrHeadSet from "../assets/Screenshot 2024-12-01 140824.png";
import singer from "../assets/Screenshot 2024-12-01 115808.png";
import musicBand from "../assets/Screenshot 2024-12-01 120233.png";
import beerParty from "../assets/Screenshot 2024-12-01 141232.png";
import groupPic from "../assets/Screenshot 2024-12-01 141028.png";
import registrationDesk from "../assets/Screenshot 2024-12-02 123104.png";
import registerSpeaker from "../assets/Screenshot 2024-12-02 123722.png";
import cricketMatch from "../assets/Screenshot 2024-11-30 175043.png";
import football from "../assets/Screenshot 2024-12-02 122342.png";
import whiteComedian from "../assets/Screenshot 2024-12-04 221759.png";
import blackComedian from "../assets/Screenshot 2024-12-04 222719.png";

const Events = () => {
  const slides = [
    {
      displayUrl: registerSpeaker,
      backgroundUrl: registrationDesk,
      title: "Registrations",
      description:
        "Kick off your homecoming with a smooth, welcoming registration. Check in, collect your essentials, and get a rundown of the day’s exciting activities—your first step to reconnecting and reliving your time at GITAM!",
      timeAndVenue: "2:00 to 3:00 pm @Open Auditorium",
    },
    {
      displayUrl: classroom,
      backgroundUrl: alumni,
      title: "Departmental Visits",
      description:
        "Revisit the classrooms and labs that shaped your journey. Reconnect with professors, explore new innovations, and see how your department has evolved.",
      timeAndVenue: "3:00 to 5:00 pm @Your Department",
    },
    {
      displayUrl: friendsInCarnival,
      backgroundUrl: carnival,
      title: "Carnival",
      description:
        "Where nostalgia meets fun! Reconnect with old friends at our vibrant carnival with games, creative workshops, thrilling rides, and live performances.",
      timeAndVenue: "5:00 to 6:30 pm @Coke Station Road",
    },
    {
      displayUrl: racingCar,
      backgroundUrl: vrHeadSet,
      title: "Racing Event",
      description:
        "Rev up your engines for an adrenaline-packed racing event, featuring virtual car races and thrilling VR experiences. Get ready to race against your peers!",
      timeAndVenue: "6:00 to 7:00 pm @VR Center",
    },
    {
      displayUrl: singer,
      backgroundUrl: musicBand,
      title: "Live Music Performance",
      description:
        "Unwind with some live music. From soulful ballads to high-energy performances, enjoy a night of great tunes by the best artists.",
      timeAndVenue: "7:00 to 8:30 pm @Open Auditorium",
    },
    {
      displayUrl: beerParty,
      backgroundUrl: groupPic,
      title: "After Party",
      description:
        "End the night with a bang at our after-party! Enjoy good company, music, and beverages as you celebrate your reunion in style.",
      timeAndVenue: "9:00 pm onwards @The Lounge",
    },
    {
      displayUrl: cricketMatch,
      backgroundUrl: football,
      title: "Cricket Match",
      description:
        "Join the friendly cricket match to relive the glory of past victories. Whether you’re a player or a spectator, it’s all about fun and camaraderie.",
      timeAndVenue: "2:00 to 4:00 pm @Cricket Ground",
    },
    {
      displayUrl: whiteComedian,
      backgroundUrl: blackComedian,
      title: "Comedy Night",
      description:
        "Get ready for a night filled with laughter and fun! Top comedians will take the stage and keep you entertained throughout the night.",
      timeAndVenue: "7:00 to 8:00 pm @Main Hall",
    },
  ];

  const length = slides.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative mt-4 w-full h-full rounded-2xl overflow-hidden p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        {/* Right Side Images (Mobile First) */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex space-x-4 overflow-hidden mb-4">
            <img
              src={slides[activeIndex].displayUrl}
              alt="slide"
              className="w-[200px] h-[250px] md:w-[300px] md:h-[350px] object-cover rounded-lg border-2 border-white"
            />
            <img
              src={slides[(activeIndex + 1) % length].displayUrl}
              alt="next-slide"
              className="w-[150px] h-[200px] md:w-[200px] md:h-[250px] object-cover rounded-lg border-2 border-white"
            />
            <img
              src={slides[(activeIndex + 2) % length].displayUrl}
              alt="next-slide"
              className="w-[150px] h-[200px] md:w-[200px] md:h-[250px] object-cover rounded-lg border-2 border-white"
            />
          </div>
        </div>

        {/* Left Side Text (Mobile First) */}
        <div className="text-center md:text-left text-white flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{slides[activeIndex].title}</h1>
          <p className="mb-4">{slides[activeIndex].description}</p>
          <p className="bg-red-500 rounded-full inline-block px-4 py-2">{slides[activeIndex].timeAndVenue}</p>

          {/* Buttons under the images for mobile */}
          <div className="flex py-6 gap-8 justify-center">
            <button
              onClick={handlePrevClick}
              className="bg-white text-black p-4 rounded-full shadow-lg text-3xl w-16 h-16 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-green-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNextClick}
              className="bg-green-700 text-black p-4 rounded-full shadow-lg text-3xl w-16 h-16 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <img
        src={slides[activeIndex].backgroundUrl}
        alt="background"
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-emerald-900 to-transparent -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-emerald-950 opacity-60 -z-10"></div>
    </div>
  );
};

export default Events;
