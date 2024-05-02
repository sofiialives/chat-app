import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";
import Container from "./reusable/Container";

function App() {
  return (
    <Container className="h-screen">
      <SignupPage />
    </Container>
  );
}

export default App;
