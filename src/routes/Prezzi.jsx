import Navbar from "./Navbar";
import CardPrice from "./CardPrice";

export default function Prezzi(){
    return(
        <div>
            <Navbar/>
            <CardPrice image={"https://picsum.photos/1500?random=0"} title={"Pacchetto base"}  options={["Ambulanza Privata 24/7","I Nostri Migliori Medici al tuo Servizio"]} price={"1500€/year"} buttonText={"Buy"}/>
            <CardPrice image={"https://picsum.photos/1500?random=1"} title={"titolo"}  options={["Ambulanza Privata 24/7","I Nostri Migliori Medici al tuo Servizio","Visite in sede","Esami e prelievi"]} price={"3000€/year"} buttonText={"Buy"}/>
            <CardPrice image={"https://picsum.photos/1500?random=2"} title={"titolo"}  options={["Ambulanza Privata 24/7","I Nostri Migliori Medici al tuo Servizio","Visite in sede e a domicilio","Esami e prelievi","Cartella clinica a richiesta","Servizio 24/7 Pronto Soccorso"]} price={"4000€/year"} buttonText={"Contattaci"}/>
        </div>
    );
}