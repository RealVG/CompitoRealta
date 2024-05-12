import './css/Card.css';

// eslint-disable-next-line react/prop-types
function Card({ title, image }) {
  return (
    <div className="card">
      <div className="contenitore-immagine-card">
        <img src={image} alt="Persona sorridente" />
      </div>
      <div className="contenitore-testo-card">
        <div className="valutazione-immagini-card">
          <img src="./../src/assets/star.png" alt="Stella gialla"/>
          <img src="./../src/assets/star.png" alt="Stella gialla"/>
          <img src="./../src/assets/star.png" alt="Stella gialla"/>
          <img src="./../src/assets/star.png" alt="Stella gialla"/>
          <img src="./../src/assets/star.png" alt="Stella gialla"/>
        </div>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Card;
