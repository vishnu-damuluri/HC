import React from 'react';

const Team: React.FC = () => {
  // Sample images for the carousel
  const images = [
    'https://frontendhack.com/wp-content/uploads/2024/02/Frontend-Hacks-1.png',
    'https://frontendhack.com/wp-content/uploads/2024/02/Frontend-Hacks-1.png',
    'https://frontendhack.com/wp-content/uploads/2024/02/Frontend-Hacks-1.png',
    'https://frontendhack.com/wp-content/uploads/2024/02/Frontend-Hacks-1.png',
    'https://frontendhack.com/wp-content/uploads/2024/02/Frontend-Hacks-1.png',
  ];

  return (
    <section className=" p relative overflow-hidden">
      {/* Outer container for the carousel */}
      <div className="flex animate-marquee whitespace-nowrap mx-8">
        {/* Render images in a continuous loop */}
        {images.concat(images).map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full md:w-1/3 p-4">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              src={image}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
