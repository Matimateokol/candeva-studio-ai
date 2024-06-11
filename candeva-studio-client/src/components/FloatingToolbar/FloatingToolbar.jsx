import Button from '@mui/material/Button';
import { MdSaveAs } from 'react-icons/md';
import { FaFileImport } from 'react-icons/fa6';
import { FaFileDownload } from 'react-icons/fa';
import { PINK, BLACK } from '../../assets/colors';
import './FloatingToolbar.css';

export default function FloatingToolbar() {
  return (
    <div id="buttonsContainer" style={{ backgroundColor: PINK }}>
      <Button
        variant="text"
        startIcon={<MdSaveAs size={40} />}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: BLACK,
          fontFamily: 'Kadwa',
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        Save
      </Button>
      <Button
        variant="text"
        startIcon={<FaFileImport size={40} />}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: BLACK,
          fontFamily: 'Kadwa',
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        Import
      </Button>
      <Button
        variant="text"
        startIcon={<FaFileDownload size={40} />}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: BLACK,
          fontFamily: 'Kadwa',
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        Export
      </Button>
    </div>
  );
}
