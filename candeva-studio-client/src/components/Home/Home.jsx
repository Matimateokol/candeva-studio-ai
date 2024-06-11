import { useState } from 'react';
import GeneratorSection from '../GeneratorSection/GeneratorSection';
import OptionPickerSection from '../OptionPickerSection/OptionPickerSection';
import './Home.css';
import { BLACK } from '../../assets/colors';
import GeneratedImageSection from '../GeneratedImageSection/GeneratedImageSection';
import CardTemplateImagesSection from '../CardTemplateImagesSection/CardTemplateImagesSection';
import TextDescriptionGeneratorSection from '../TextDescriptionGeneratorSection/TextDescriptionGeneratorSection';
import FloatingToolbar from '../FloatingToolbar/FloatingToolbar';

export default function Home() {
  const [gameStyleImage, setGameStyleImage] = useState(
    '/images/HorrorStyleImage.png',
  );
  const [assetTypeImage, setAssetTypeImage] = useState(
    '/images/CreepyMansionImage.png',
  );
  const [cardTemplateImage, setCardTemplateImage] = useState(
    '/images/LightCardTemplate.png',
  );

  return (
    <div
      id="gridLayoutContainer"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr 1.0fr',
      }}>
      <div id="leftSection">
        <div
          style={{
            display: 'flex',
            justifyContent: 'start',
            marginLeft: '1rem',
            marginTop: '2vh',
            marginBottom: '2vh',
            color: BLACK,
            fontStyle: 'Kadwa',
            fontSize: '18px',
          }}>
          <span style={{ fontWeight: 'bold', paddingRight: '5px' }}>
            Projects /
          </span>
          <span>Project 0</span>
        </div>
        <GeneratorSection />
        <OptionPickerSection
          title={'Game Style'}
          image={gameStyleImage}
          maxSize={'100px'}
        />
        <OptionPickerSection
          title={'Asset Type'}
          image={assetTypeImage}
          maxSize={'100px'}
        />
        <OptionPickerSection
          title={'Card Template'}
          image={cardTemplateImage}
          maxSize={'100px'}
        />
      </div>
      <div id="middleSection">
        <GeneratedImageSection />
        <CardTemplateImagesSection />
      </div>
      <div id="rightSection">
        <div>
          <TextDescriptionGeneratorSection />
        </div>
        <div>
          <FloatingToolbar />
        </div>
      </div>
    </div>
  );
}
