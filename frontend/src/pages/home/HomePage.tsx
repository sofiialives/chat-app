import Sidebar from "../../components/home/Sidebar/Sidebar";
import Container from "../../components/reusable/Container";
import Section from "../../components/reusable/Section";

export default function HomePage() {
  return (
    <Section>
      <Container className="flex mobile:h-[450px] tablet:h-[550px] overflow-hidden">
        <Sidebar />
      </Container>
    </Section>
  );
}
