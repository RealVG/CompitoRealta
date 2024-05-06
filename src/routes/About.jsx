import Navbar from './Navbar';
import AboutRight from './AboutRight';
import AboutLeft from './AboutLeft';

export default function About() {
  return (
    <div>
      <Navbar></Navbar>
      <AboutRight img={"https://picsum.photos/500/300?random=0"} title="Il nostro team"></AboutRight>
      <AboutLeft img={"https://picsum.photos/500/300?random=1"} title="I nostri Reparti"></AboutLeft>
    </div>
  );
}