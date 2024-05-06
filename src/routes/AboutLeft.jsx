import "./css/AboutLeft.css";

// eslint-disable-next-line react/prop-types
export default function AboutLeft({img, title}){
    return(
        <div className="AboutLeft">
            <img src={img} alt="Immagine" />
            <h1>{title}</h1>
        </div>
    );
}