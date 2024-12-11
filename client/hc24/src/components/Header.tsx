import React, { useState, useEffect } from 'react';

// Function to calculate time left until the target date
const calculateTimeLeft = () => {
  const targetDate = new Date('2024-12-28T00:00:00'); // Target date (28 Dec 2024)
  const currentDate = new Date();
  const difference = targetDate.getTime() - currentDate.getTime();

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Pad the values with leading zeros
  const paddedDays = days.toString().padStart(2, '0');
  const paddedHours = hours.toString().padStart(2, '0');
  const paddedMinutes = minutes.toString().padStart(2, '0');
  const paddedSeconds = seconds.toString().padStart(2, '0');

  return { days: paddedDays, hours: paddedHours, minutes: paddedMinutes, seconds: paddedSeconds };
};

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className=''>
      {/* Main Section */}
      <div className="relative w-full">
        {/* Background Image */}
        {/* <img
          src={mainImage}
          className="w-full h-full object-cover"
          alt="Main Background"
          style={{ opacity: 0.7 }}
        /> */}
        {/* Centered Logo */}
        {/* <img
          src={gitamLogoWhiteN}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto"
          alt="Gitam Logo"
        /> */}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 ">
          <div className="p-4">
            <h1 className="text-5xl text-left my-8 font-bold text-blue-400">
              Welcome Back to Where It All Began!
            </h1>
            <div className="flex space-x-4 mt-6">
              {/* Countdown Timer */}
              <div className="px- text-left px-1">
                <p className="font-extrabold text-5xl p text-cyan-600">{timeLeft.days} </p>
                <p className="text-lg flex ml-2 font-semibold text-gray-600">Days</p>
              </div>
              <div className="text-left px-1">
                <p className="font-extrabold text-5xl text-cyan-600">{timeLeft.hours} </p>
                <p className="text-lg font-semibold px-1 text-gray-600">Hours</p>
              </div>
              <div className="text-left px-1">
                <p className="font-extrabold text-5xl px-1 text-cyan-600">{timeLeft.minutes} </p>
                <p className="text-lg px- font-semibold text-gray-600">Minutes</p>
              </div>
              <div className="text-left px-1">
                <p className="font-extrabold text-5xl px-1 text-cyan-600">{timeLeft.seconds}</p>
                <p className="text-lg font-semibold text-gray-600">Seconds</p>
              </div>
            </div>
          </div>
          
          {/* Description Text */}
          <div className="p-4 mb-">
            <p className="my-8 font-semibold text-g text-lg text-left">
              Gitam isn’t just a campus; it’s a collection of stories—your stories. From late-night canteen chats to
              last-minute exam prep, from friendships that felt like family to moments that shaped your future, every
              corner of this place holds a memory. Our Homecoming is carefully curated to strengthen and engage the
              vibrant alumni community. It’s a chance to reconnect with old friends, relive cherished memories, and forge
              new connections that inspire future journeys. Come back, walk those familiar paths, and remember—you never
              really left. <p className='font-bold text-xl text-emerald-800'>Once a Gitamite, Always a Dynamite!</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
