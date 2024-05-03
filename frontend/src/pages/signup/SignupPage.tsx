import Section from "../../components/reusable/Section";
import AuthForm, { AuthProps } from "../../components/AuthForm";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

export default function SignupPage() {
  const { signup } = useSignup();
  const [inputs, setInputs] = useState<AuthProps>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await signup(inputs);
    // console.log(inputs);
  };

  return (
    <Section>
      <AuthForm
        register
        inputs={inputs}
        setInputs={setInputs}
        handleSubmit={handleSubmit}
      />
    </Section>
  );
}
