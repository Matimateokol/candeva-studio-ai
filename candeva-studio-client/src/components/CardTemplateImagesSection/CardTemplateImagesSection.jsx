import { useState } from 'react';
import './CardTemplateImagesSection.css';

export default function CardTemplateImagesSection({
  frontImage,
  backText = 'lorem ipsum doloresa',
}) {
  const [frontCardSideImage, setFrontCardSideImage] = useState(
    '/images/EmptyLightCardFront.png',
  );
  const [backCardSideImage, setBackCardSideImage] = useState(
    '/images/EmptyLightCardBack.png',
  );

  return (
    <div id="cardsContainer">
      <div id="frontCardSide">
        <img id="overlayedImage" src={frontImage} alt="" />
        <img src={frontCardSideImage} />
      </div>
      <div id="backCardSide">
        <div id="overlayedText">
          <p>{backText}</p>
        </div>
        <img src={backCardSideImage} />
      </div>
    </div>
  );
}
