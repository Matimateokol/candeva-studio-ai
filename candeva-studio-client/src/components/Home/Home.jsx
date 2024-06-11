import GeneratorSection from '../GeneratorSection/GeneratorSection';
import OptionPickerSection from '../OptionPickerSection/OptionPickerSection';
import horrorStyle from '../../assets/images/HorrorStyleImage.png';
import creepyMansion from '../../assets/images/CreepyMansionImage.png';
import lightCardTemplate from '../../assets/images/LightCardTemplate.png';
import './Home.css';
import { BLACK } from '../../assets/colors';

export default function Home() {
  return (
    <>
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
        <span style={{ fontWeight: 'bold' }}>Projects /</span>
        <span>Project 0</span>
      </div>
      <GeneratorSection />
      <OptionPickerSection
        title={'Game Style'}
        image={horrorStyle}
        maxSize={'100px'}
      />
      <OptionPickerSection
        title={'Asset Type'}
        image={creepyMansion}
        maxSize={'100px'}
      />
      <OptionPickerSection
        title={'Card Template'}
        image={lightCardTemplate}
        maxSize={'100px'}
      />
    </>
  );
}
