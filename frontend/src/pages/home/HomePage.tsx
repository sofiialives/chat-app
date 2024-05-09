import Sidebar from "../../components/home/Sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import Container from "../../components/reusable/Container";
import Section from "../../components/reusable/Section";

export default function HomePage() {
  return (
    <Section>
      <Container className="flex justify-center mobile:h-[480px] tablet:h-[550px] desktop:h-[800px] overflow-hidden px-0">
        <Sidebar />
        <MessageContainer />
      </Container>
    </Section>
  );
}
