import './css/CardPrice.css';

// eslint-disable-next-line react/prop-types
const CardPrice = ({ image, title, options, price, buttonText }) => {
  return (
    <div className="card-price">
      <img src={image} alt={title} className="card-image-price" />
      <div className="card-content-price">
        <h3 className="card-title-price">{title}</h3>
        <ul className="card-options-price">
          {options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </div>
      <div className="card-footer-price">
        <span className="card-price-price">{price}</span>
        <button className="card-button-price">{buttonText}</button>
      </div>
    </div>
  );
};

export default CardPrice;
