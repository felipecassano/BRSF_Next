import AboutUs from '@/components/about';
import Clients from '@/components/clients';
import Contact from '@/components/contact';
import Header from '@/components/header';
import MainContent from '@/components/mainContent';
import Mission from '@/components/mission';
import SocialMedia from '@/components/socialMedia';

export default function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <AboutUs />
      <Mission />
      <Clients />
      <Contact />
      <SocialMedia />
    </div>
  );
}
