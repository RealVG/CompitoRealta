import "./css/Head.css"
export default function Head(){
    return(
        <div className="contenitore-immagine-head">
            <img src="./../src/assets/arch.jpg" alt="Descrizione Immagine" />
            <div className="contenitore-testo-head">
                <h1>La tua salute, la nostra priorità.</h1>
            </div>
        </div>
    );
}