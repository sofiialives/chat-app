import GenderCheckbox from "./GenderCheckbox";
import Button from "./reusable/Button";
import Container from "./reusable/Container";
import TextField from "./reusable/TextField";

interface AuthFormProps {
  register?: boolean;
  handleSubmit?: () => void;
}

export default function AuthForm({ register, handleSubmit }: AuthFormProps) {
  return (
    <Container className="p-6 tablet:p-10">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        {register ? "Signup" : "Login"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 tablet:gap-3"
      >
        <TextField label="Username" />
        {register && <TextField type="email" label="Email" />}
        <TextField type="password" label="Password" />
        {register && <TextField type="password" label="Confirm Password" />}
        {register && <GenderCheckbox />}
        <a className="text-sm tablet:text-base underline hover:text-purple-300 mt-2 inline-block text-gray-300 cursor-pointer">
          {register
            ? "Already have an account?"
            : `${"Don't"} have an account?`}
        </a>
        <Button>{register ? "Signup" : "Login"}</Button>
      </form>
    </Container>
  );
}
