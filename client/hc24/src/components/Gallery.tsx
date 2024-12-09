import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import './Gallery.css'; // Import your CSS file for any global styling
import img1 from '../assets/Screenshot 2024-11-30 175916.png';
import img2 from '../assets/Screenshot 2024-11-30 180145.png';
import img3 from '../assets/Screenshot 2024-12-02 122342.png';
import img4 from '../assets/Screenshot 2024-12-01 141232.png';
import img5 from '../assets/Screenshot 2024-11-30 174900copy.png';
import img6 from '../assets/Screenshot 2024-12-01 120618.png';
import img7 from '../assets/Screenshot 2024-11-30 175247.png';

// Add different text for each image
const imageDetails = [
  { src: img1, text: 'The memories may fade, but the bond remains.' },
  { src: img2, text: 'Coming back feels like never leaving' },
  { src: img3, text: 'Sometimes you look back at yur life and realize how much has changed but other times, it feel like nothing has changed at all' },
  { src: img4, text: 'The palce where it all started' },
  { src: img5, text: " We didn't realize we were making memories, we just knew we were having fun" },
  { src: img6, text: 'Laughter lessons and life long friends' },
  { src: img7, text: 'Not just a campus but a chapter of life' },
];

export default function Gallery() {
  return (
    <Masonry
      breakpointCols={{ default: 3, 1100: 3, 700: 2, 500: 1 }}
      className="masonry-grid pt-4"
      columnClassName="masonry-grid_column"
    >
      {imageDetails.map((image, index) => (
        <ImageItem key={index} src={image.src} text={image.text} />
      ))}
    </Masonry>
  );
}

function ImageItem({ src, text }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="masonry-item">
      <div
        className="image-container"
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={src}
          alt={`Image`}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
          }}
        />
        <div
          className="text-box"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'tan',
            color: 'white',
            transform: hovered ? 'translateY(0)' : 'translateY(100%)',
            padding: '20px',
            transition: 'transform 0.5s ease-out',
          }}
        >
          <h2 className="text-4xl text-black text-left font-medium flex items-center">"{text}"</h2>
        </div>
      </div>
    </div>
  );
}
