import { useState } from 'react';
import './CardTemplateImagesSection.css';

export default function CardTemplateImagesSection() {
  const [frontCardSideImage, setFrontCardSideImage] = useState(
    '/images/LightCardFront.png',
  );
  const [backCardSideImage, setBackCardSideImage] = useState(
    '/images/LightCardBack.png',
  );

  return (
    <div id='cardsContainer'>
      <div id="frontCardSide">
        <img src={frontCardSideImage} />
      </div>
      <div id="backCardSide">
        <img src={backCardSideImage} />
      </div>
    </div>
  );
}
