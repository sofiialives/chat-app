import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import Button from "./reusable/Button";
import Container from "./reusable/Container";
import TextField from "./reusable/TextField";
import { Dispatch, SetStateAction } from "react";

export interface AuthProps {
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  newPassword?: string;
  gender?: string;
}

interface AuthFormProps {
  register?: boolean;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  inputs: AuthProps;
  setInputs: Dispatch<SetStateAction<AuthProps>>;
  loading: boolean;
}

export default function AuthForm({
  register,
  handleSubmit,
  inputs,
  setInputs,
  loading,
}: AuthFormProps) {
  const handleCheckboxChange = (gender: string) => {
    setInputs({ ...inputs, gender });
  };
  return (
    <Container className="p-6 tablet:p-10">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        {register ? "Signup" : "Login"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-2 tablet:gap-3"
      >
        {register && (
          <TextField
            label="Username"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        )}
        <TextField
          type="email"
          label="Email"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
        <TextField
          type="password"
          label="Password"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        {register && (
          <TextField
            type="password"
            label="Confirm Password"
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />
        )}
        {register && (
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGenre={inputs.gender}
          />
        )}
        <Link
          to={register ? "/login" : "/signup"}
          className="text-sm tablet:text-base underline hover:text-purple-300 mt-2 inline-block text-gray-300 cursor-pointer"
        >
          {register
            ? "Already have an account?"
            : `${"Don't"} have an account?`}
        </Link>
        <Button
          type="submit"
          disabled={loading}
          className="w-[260px] tablet:w-[600px]"
        >
          {loading && <span className="loading loading-spinner text-primary" />}
          {register ? "Signup" : "Login"}
        </Button>
      </form>
    </Container>
  );
}
