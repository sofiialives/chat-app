import { useState } from "react";
import Sidebar from "../../components/home/Sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import Container from "../../components/reusable/Container";
import Section from "../../components/reusable/Section";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <Section>
      <Container className="flex justify-center mobile:h-[480px] tablet:h-[550px] desktop:h-[800px] overflow-hidden px-0">
        <Sidebar />
        <MessageContainer setOpen={setOpen} open={open} />
      </Container>
    </Section>
  );
}
