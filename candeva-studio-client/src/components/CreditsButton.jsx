export default function CreditsButton({ credits }) {
  const message = credits === 1 ? 'credit' : 'credits';

  return (
    <button
      style={{
        borderRadius: 25,
        backgroundColor: '#D1DFEF',
        color: '#000000',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '2px',
        paddingBottom: '2px',
        fontFamily: 'Inter',
        fontSize: '16px',
      }}>
      <b>
        <span style={{ fontSize: '20px' }}>{credits}</span>
      </b>
      <br />
      {message}
    </button>
  );
}
