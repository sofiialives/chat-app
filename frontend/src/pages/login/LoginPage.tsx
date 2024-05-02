import Section from "../../components/reusable/Section";
import Container from "../../components/reusable/Container";
import { NavLink } from "react-router-dom";

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps) {
  return (
    <Section>
      <Container className="p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
        </h1>
        <form>
          <div>
            <label className="label p-2 text-base label-text text-gray-300">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2 text-base label-text text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered h-10"
            />
          </div>
          <a className="text-sm hover:underline hover:text-purple-300 mt-2 inline-block text-gray-300">
            {"Don't"} have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </Container>
    </Section>
  );
}
