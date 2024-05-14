import { Suspense } from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
interface LayoutProps {}

export default function Layout({}: LayoutProps) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback="loading...">
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}
