import Section from "../../components/reusable/Section";
import AuthForm from "../../components/AuthForm";

export default function SignupPage() {
  return (
    <Section className="flex justify-center items-center h-screen">
      <AuthForm register />
    </Section>
  );
}
