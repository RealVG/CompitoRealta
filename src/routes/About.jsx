import Navbar from './Navbar';
import AboutRight from './AboutRight';
import AboutLeft from './AboutLeft';

export default function About() {
  return (
    <div>
      <Navbar></Navbar>
      <AboutRight img={"https://picsum.photos/500/300?random=0"} title="Il nostro team"></AboutRight>
      <AboutLeft img={"https://picsum.photos/500/300?random=1"} title="I nostri Reparti"></AboutLeft>
      <AboutRight img={"https://picsum.photos/500/300?random=2"} title="I nostri Laboratori"></AboutRight>
      <div>
        <h1 style={{"text-align":"center"}}>Non solo Medici, Noi siamo la Tua Famiglia</h1>
        <div style={{"backgroundColor":"grey", "borderRadius": "10px", "padding": "10px","marginLeft": "100px","marginRight": "100px","color":"black","textShadow": "1px 1px 2px black","fontSize": "20px"}}>

        <p>Nel Sistema Ospedaliero Arch, troverete un team di medici specializzati, pronti e preparati ad affrontare qualsiasi evenienza medica con la massima competenza e dedizione. I nostri professionisti sono non solo esperti nel loro campo, ma anche gentili e premurosi, sempre attenti a mettere i pazienti al centro e a farli sentire a proprio agio come a casa. <br/> Arch: Eccellenza medica e attenzione al paziente in un ambiente accogliente:</p>
        <ul>
          <li><b>Un team di medici specializzati:</b> Chirurghi, medici di medicina interna, cardiologi, oncologi, gastroenterologi e molti altri professionisti altamente qualificati, costantemente aggiornati sulle ultime novità mediche, per offrirvi le cure migliori.</li>
          <li><b>Reparti e laboratori specializzati:</b> Strutture all'avanguardia dedicate a specifiche aree mediche, dotate di tecnologie di ultima generazione e di personale altamente qualificato per garantire diagnosi precise e trattamenti efficaci.</li>
          <li><b>Tecnologia all'avanguardia:</b> Strumentazioni diagnostiche e terapeutiche di ultima generazione per garantire diagnosi precise e trattamenti efficaci.
Un ambiente accogliente e confortevole: Strutture moderne e ben attrezzate, pensate per il vostro comfort e benessere.</li>
          <li><b>Un approccio personalizzato:</b>Prenderemo cura di voi con attenzione e dedizione, ascoltando le vostre esigenze e costruendo un piano di cura personalizzato in base alle vostre specifiche necessità.</li>
        </ul>
        <b>Il nostro impegno per la vostra salute:</b>
        <p>Nel Sistema Ospedaliero Arch, non vi sentirete mai un numero. Il nostro obiettivo è quello di offrirvi un'esperienza medica positiva e serena, garantendovi:</p>
        <ul>
          <li><b>Pronto soccorso attivo 24 ore su 24:</b> Un team di medici e infermieri sempre disponibile per accogliervi e assistervi in caso di emergenza.</li>
          <li><b>Ricoveri ospedalieri:</b> Reparti di degenza confortevoli e dotati di tutte le tecnologie necessarie per garantirvi un ricovero sicuro e sereno.
Day Hospital: Servizi ambulatoriali completi per visite specialistiche, esami diagnostici e terapie ambulatoriali.</li>
          <li><b>Chirurgia:</b> Un reparto chirurgico all'avanguardia, dove potrete affrontare qualsiasi intervento chirurgico con la massima sicurezza e professionalità.</li>
        </ul>
        <b>Scegliete il Sistema Ospedaliero Arch per:</b>
        <ul>
          <li>La competenza e la professionalità dei nostri medici.</li>
          <li>L'utilizzo di tecnologie all'avanguardia.</li>
          <li>Un ambiente accogliente e confortevole.</li>
          <li>Un approccio personalizzato e attento alle vostre esigenze.</li>
          <li>Reparti e laboratori specializzati per la massima cura e attenzione.</li>
        </ul>
        <b>Prenota il tuo appuntamento oggi stesso e scopri come possiamo prenderci cura della tua salute. <br />Insieme, per il vostro benessere. <br /> <br />Arch: Il Sistema Ospedaliero che fa la differenza.</b>

        
        
        </div>
      </div>
    </div>

  );
}