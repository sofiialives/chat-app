import Section from "../../components/reusable/Section";
import AuthForm from "../../components/AuthForm";
import { useState } from "react";

export default function LoginPage() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };
  
  return (
    <Section>
      <AuthForm
        inputs={inputs}
        setInputs={setInputs}
        handleSubmit={handleSubmit}
      />
    </Section>
  );
}
