interface AuthFormProps {
  repeat?: boolean;
  onSubmit?: () => void;
}

export default function AuthForm({ repeat }: AuthFormProps) {
  return (
    <form>
      {" "}
      <input type="text" />
    </form>
  );
}
