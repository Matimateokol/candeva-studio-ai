import './OptionPickerSection.css';
import {
  LIGHT_BLUE,
  DARK_BLUE,
  DARKER_BLUE,
  GREY,
  BLACK,
} from '../../assets/colors';
import { IconButton } from '@mui/joy';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

export default function OptionPickerSection({ title, image, maxSize }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '10px',
        marginTop: '10px',
        padding: '20px',
        backgroundColor: LIGHT_BLUE,
        borderRadius: '25px',
        maxWidth: '30%',
        minWidth: '340px',
        boxShadow: `1px 3px 5px ${GREY}`,
      }}>
      <span
        style={{
          color: BLACK,
          fontFamily: 'Kadwa',
          fontSize: '18px',
          fontWeight: 'bold',
        }}>
        {title}
      </span>
      <div
        style={{
          display: 'flex',
        }}>
        <IconButton>
          <KeyboardArrowLeft />
        </IconButton>
        <img style={{ maxHeight: maxSize, maxWidth: maxSize }} src={image} />
        <IconButton>
          <KeyboardArrowRight />
        </IconButton>
      </div>
    </div>
  );
}
