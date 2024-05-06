import Navbar from './Navbar';
import './Root.css';
import Head from './Head';
import Card from './Card';

export default function Root(){
    const cards = [
        {
          imgURL: "https://picsum.photos/900",
          title: "Semplicemente perfetto",
        },
        {
          imgURL: "https://picsum.photos/700",
          title: "Professionisti all'opera",
        },
        {
          imgURL: "https://picsum.photos/1000",
          title: "Ci tornerei mille volte",
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