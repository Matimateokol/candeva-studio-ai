import './GeneratedImageSection.css';

export default function GeneratedImageSection({ image }) {
  return (
    <div id="imageContainer">
      <img
        style={{
          maxHeight: '450px',
          maxWidth: '450px',
          margin: '25px',
        }}
        id="generatedImage"
        src={image}
      />
    </div>
  );
}
