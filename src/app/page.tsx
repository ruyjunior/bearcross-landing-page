import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Location from "@/components/Location";
//import Team from "@/components/Team";
import Payments from "@/components/Payments";
//import NewsCarousel from "@/components/News";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Benefits />
        <Section
          id="pricing"
          title="Melhor Custo benefício"
          description="Preços justos que cabem no seu bolso"
        >
          <Pricing />
        </Section>
        <Section
          id="pagamentos"
          title="Pagamentos"
          description="Aceitamos várias formas de pagamento"
        >
          <Payments />
        </Section>
        {/*<Team /> */}
        <FAQ />
        <Location />
      </Container>
    </>
  );
};

export default HomePage;
