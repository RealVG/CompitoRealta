import Navbar from "./Navbar";
import './css/Contattaci.css';
export default function Contattaci() {
    var img = "https://plus.unsplash.com/premium_photo-1663126510352-e2e89e7e3aff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <div>
            <Navbar />
            <div className="contact-card">
      <div className="contact-image">
        <img src={img} alt="Immagine del contatto" />
      </div>
      <div className="contact-info">
        <h3>Nome del contatto</h3>
        <p>Telefono: +39 333 123 4567</p>
        <p>Email: OspedaliARCH@gmail.com</p>
        <p>Sede Centrale: Via Bologna, 789 - 12345 Roma</p>
        <p>Orari d&apos;apertura: Lunedì-Venerdì 9:00-18:00</p>
      </div>
      <div>
        <h3>Sedi Ospedali</h3>
        <p>Milano: Via Milano, 123 - 54321 Milano</p>
        <p>Roma: Via Roma, 456 - 67890 Roma</p>
        <p>Napoli: Via Napoli, 789 - 90123 Napoli</p>
        <p>Torino: Via Torino, 234 - 56789 Torino</p>
        <p>Firenze: Via Firenze, 345 - 78901 Firenze</p>
      </div>
    </div>
        </div>
    );
}