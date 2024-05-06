import "./css/AboutRight.css"

export default function AboutRight({img,title}){
    return(
        <div className="AboutRight">
            <h1>{title}</h1>
            <img src={img} alt="Immagine" />
        </div>
    );
}