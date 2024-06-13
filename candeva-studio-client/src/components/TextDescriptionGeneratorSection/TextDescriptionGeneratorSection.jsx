import { useState } from 'react';
import { Textarea } from '@mui/joy';
import { Typography } from '@mui/joy';
import Button from '@mui/joy/Button';
import { LIGHT_BLUE, DARK_BLUE, GREY } from '../../assets/colors';
import './TextDescriptionGeneratorSection.css';

export default function TextDescriptionGeneratorSection({
  text,
  onTextChange,
  onGenerateText,
}) {
  // const sampleText = `A dark hair indian princess in a white dress`;
  const placeholderText =
    'Write your own card description or generate a new one with AI prompt...';

  const handleSubmit = (event) => {
    event.preventDefault();
    onGenerateText(event.target.prompt.value);
  };

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
      <form id="textGenerateForm" onSubmit={handleSubmit}>
        <Textarea
          id="textArea"
          name="prompt"
          placeholder={placeholderText}
          value={text}
          onChange={onTextChange}
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
            id="submitButton"
            type="submit"
            size="lg"
            sx={{
              borderRadius: '25px',
              backgroundColor: DARK_BLUE,
              fontSize: '24px',
            }}>
            Generate Text
          </Button>
        </div>
      </form>
    </div>
  );
}
