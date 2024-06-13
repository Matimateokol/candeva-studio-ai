import { useState } from 'react';
import GeneratorSection from '../GeneratorSection/GeneratorSection';
import OptionPickerSection from '../OptionPickerSection/OptionPickerSection';
import './Home.css';
import { BLACK } from '../../assets/colors';
import GeneratedImageSection from '../GeneratedImageSection/GeneratedImageSection';
import CardTemplateImagesSection from '../CardTemplateImagesSection/CardTemplateImagesSection';
import TextDescriptionGeneratorSection from '../TextDescriptionGeneratorSection/TextDescriptionGeneratorSection';
import FloatingToolbar from '../FloatingToolbar/FloatingToolbar';
import axios from 'axios';

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

  const [generatedImage, setGeneratedImage] = useState(
    '/images/CreepyMansionImage.png',
  );
  const [generatedText, setGeneratedText] = useState('');

  const apiUrl = 'http://127.0.0.1:8080/api/images/abandoned_hospital.png';

  const handleGenerateImage = async () => {
    axios
      .get(apiUrl, {
        responseType: 'blob',
      })
      .then((res) => {
        console.log('Success getting all images!');
        console.log(res);
        const blob = new Blob([res.data]);
        // Create a URL for the blob
        const url = window.URL.createObjectURL(blob);
        setGeneratedImage(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTextChange = (event) => {
    setGeneratedText(event.target.value);
  };

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
        <GeneratorSection onGenerateImage={handleGenerateImage} />
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
        <GeneratedImageSection image={generatedImage} />
        <CardTemplateImagesSection
          frontImage={generatedImage}
          backText={generatedText}
        />
      </div>
      <div id="rightSection">
        <div>
          <TextDescriptionGeneratorSection
            text={generatedText}
            onTextChange={handleTextChange}
          />
        </div>
        <div>
          <FloatingToolbar />
        </div>
      </div>
    </div>
  );
}
