import Navbar from './Navbar';
import './Root.css';
import Head from './Head';
import Card from './Card';

export default function Root(){
    const cards = [
        {
          imgURL: "https://picsum.photos/id/65/900",
          title: "Semplicemente perfetto",
        },
        {
          imgURL: "https://picsum.photos/id/64/900",
          title: "Professionisti all'opera",
        },
        {
          imgURL: "https://picsum.photos/id/338/900",
          title: "Ci tornerei mille volte",
        },
        {
          imgURL: "https://picsum.photos/id/342/900",
          title: "Complimenti per l'ottimo lavoro",
        },
        {
          imgURL: "https://picsum.photos/id/349/900",
          title: "Non hanno avversari",
        },  
      ];

    return (
        <>
            <Navbar></Navbar>
            <Head></Head>
            <div className="contenitore-card">
              {cards.map((card) => (
                <Card key={card.title} title={card.title} image={card.imgURL} />
              ))}
            </div>
        </>
    );
}