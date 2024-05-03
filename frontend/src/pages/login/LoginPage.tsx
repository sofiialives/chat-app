import Section from "../../components/reusable/Section";
import AuthForm from "../../components/AuthForm";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

export default function LoginPage() {
  const { loading, login } = useLogin();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <Section>
      <AuthForm
        inputs={inputs}
        setInputs={setInputs}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </Section>
  );
}
