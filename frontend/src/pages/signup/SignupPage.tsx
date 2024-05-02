import React from "react";
import Section from "../../components/reusable/Section";
import Container from "../../components/reusable/Container";
import GenderCheckbox from "../../components/GenderCheckbox";

interface SignupPageProps {}

export default function SignupPage({}: SignupPageProps) {
  return (
    <Section>
      <Container className="p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
        </h1>
        <form>
          <div>
            <label className="label p-2 text-base label-text text-gray-300">
              Username
            </label>
            <input
              type="text"
              placeholder="Create username"
              className="input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2 text-base label-text text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Create username"
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
          <div>
            <label className="label p-2 text-base label-text text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered h-10"
            />
          </div>

          <GenderCheckbox />

          <a className="text-sm hover:underline hover:text-purple-300 mt-2 inline-block text-gray-300">
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Register</button>
          </div>
        </form>
      </Container>
    </Section>
  );
}
