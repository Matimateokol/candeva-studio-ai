import { useState } from 'react';
import { Textarea } from '@mui/joy';
import { Typography } from '@mui/joy';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import { Settings } from '@mui/icons-material';
import { LIGHT_BLUE, DARK_BLUE, DARKER_BLUE, GREY } from '../../assets/colors';
import './GeneratorSection.css';

export default function GeneratorSection({ onGenerateImage }) {
  const [text, setText] = useState('');

  // const sampleText = `A dark hair indian princess in a white dress`;
  const placeholderText =
    'Write a prompt here to generate your image... \nFor example: A strong-looking policeman in civillian clothes.';

  const handleSubmit = (event) => {
    event.preventDefault();
    onGenerateImage(event.target.imagePrompt.value);
  };

  return (
    <div
      style={{
        marginLeft: '10px',
        padding: '20px',
        backgroundColor: LIGHT_BLUE,
        borderRadius: '25px',
        minWidth: '30rem',
        boxShadow: `1px 3px 5px ${GREY}`,
      }}>
      <form id="generateImageForm" onSubmit={handleSubmit}>
        <Textarea
          name="imagePrompt"
          placeholder={placeholderText}
          value={text}
          onChange={(event) => setText(event.target.value)}
          minRows={5}
          maxRows={10}
          endDecorator={
            <Typography level="body-xs" sx={{ ml: 'auto', fontSize: 16 }}>
              {text.length} character(s)
            </Typography>
          }
          sx={{ minWidth: 300, fontSize: 20 }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '10px',
          }}>
          <span className="kadwa-primary">Image Prompt Builder</span>
          <IconButton
            sx={{
              backgroundColor: DARK_BLUE,
              '&:hover': { backgroundColor: DARKER_BLUE },
            }}>
            <Settings
              sx={{
                color: LIGHT_BLUE,
                '&:hover': { color: LIGHT_BLUE },
              }}
            />
          </IconButton>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Button
            type="submit"
            size="lg"
            sx={{
              borderRadius: '25px',
              backgroundColor: DARK_BLUE,
              fontSize: '24px',
            }}>
            Generate Image
          </Button>
        </div>
      </form>
    </div>
  );
}
