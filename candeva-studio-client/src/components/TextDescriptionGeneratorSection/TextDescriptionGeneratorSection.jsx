import { useState } from 'react';
import { Textarea } from '@mui/joy';
import { Typography } from '@mui/joy';
import Button from '@mui/joy/Button';
import { LIGHT_BLUE, DARK_BLUE, GREY } from '../../assets/colors';
import './TextDescriptionGeneratorSection.css';

export default function TextDescriptionGeneratorSection() {
  const [text, setText] = useState('');

  // const sampleText = `A dark hair indian princess in a white dress`;
  const placeholderText =
    'Write your own card description or generate a new one with AI...';

  return (
    <div
      style={{
        marginRight: '10px',
        marginTop: '5vh',
        padding: '20px',
        backgroundColor: LIGHT_BLUE,
        borderRadius: '25px',
        minWidth: '30rem',
        boxShadow: `1px 3px 5px ${GREY}`,
      }}>
      <Textarea
        placeholder={placeholderText}
        value={text}
        onChange={(event) => setText(event.target.value)}
        minRows={10}
        maxRows={20}
        endDecorator={
          <Typography level="body-xs" sx={{ ml: 'auto', fontSize: 18 }}>
            {text.length} character(s)
          </Typography>
        }
        sx={{ minWidth: 300, fontSize: 24, fontFamily: 'Kadwa' }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '10px',
        }}></div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Button
          size="lg"
          sx={{
            borderRadius: '25px',
            backgroundColor: DARK_BLUE,
            fontSize: '24px',
          }}>
          Generate Text
        </Button>
      </div>
    </div>
  );
}
