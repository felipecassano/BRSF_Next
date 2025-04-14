import AboutUs from "@/components/about";
import Clients from "@/components/clients";
import Contact from "@/components/contact";
import Header from "@/components/header";
import MainContent from "@/components/mainContent";

export default function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <AboutUs />
      <Clients />
      <Contact />
    </div>
  );
}
