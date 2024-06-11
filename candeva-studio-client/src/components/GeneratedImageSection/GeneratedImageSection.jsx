import { useState } from 'react';
import './GeneratedImageSection.css';

export default function GeneratedImageSection() {
  const [imageSource, setImageSource] = useState(
    '/images/CreepyMansionImage.png',
  );

  return (
    <div id="imageContainer">
      <img
        style={{
          maxHeight: '450px',
          maxWidth: '450px',
          margin: '25px',
        }}
        id="generatedImage"
        src={imageSource}
      />
    </div>
  );
}
