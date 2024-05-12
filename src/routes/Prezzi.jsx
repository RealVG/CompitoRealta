import Navbar from "./Navbar";
import CardPrice from "./CardPrice";

export default function Prezzi(){
    var img1 = "https://plus.unsplash.com/premium_photo-1664475558991-b873931dfc74?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    var img2 = "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    var img3 = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <div>
            <Navbar/>
            <CardPrice image={img1} title={"Pacchetto Base"}  options={["Ambulanza Privata 24/7","I Nostri Migliori Medici al tuo Servizio"]} price={"1500€/year"} buttonText={"Buy"}/>
            <CardPrice image={img2} title={"Pacchetto Avanzato"}  options={["Ambulanza Privata 24/7","I Nostri Migliori Medici al tuo Servizio","Visite in sede","Esami e prelievi"]} price={"3000€/year"} buttonText={"Buy"}/>
            <CardPrice image={img3} title={"Pacchetto Premium"}  options={["Ambulanza Privata 24/7","I Nostri Migliori Medici al tuo Servizio","Visite in sede e a domicilio","Esami e prelievi","Cartella clinica a richiesta","Servizio 24/7 Pronto Soccorso"]} price={"4000€/year"} buttonText={"Contattaci"}/>
        </div>
    );
}