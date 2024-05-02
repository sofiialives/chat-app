import GenderCheckbox from "./GenderCheckbox";
import Container from "./reusable/Container";
import TextField from "./reusable/TextField";

interface AuthFormProps {
  register?: boolean;
  handleSubmit?: () => void;
}

export default function AuthForm({ register, handleSubmit }: AuthFormProps) {
  return (
    <Container className="p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1>{register ? "Signup" : "Login"}</h1>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" />
        {register && <TextField label="Email" />}
        <TextField label="Password" />
        {register && <TextField label="Confirm Password" />}
        {register && <GenderCheckbox />}
        <a className="text-sm hover:underline hover:text-purple-300 mt-2 inline-block text-gray-300">
          {!register
            ? `${"Don't"} have an account?`
            : "Already have an account?"}
        </a>
      </form>
    </Container>
  );
}
