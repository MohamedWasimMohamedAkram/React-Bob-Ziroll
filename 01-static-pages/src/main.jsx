import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Page from "./components/Page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Sect />
  </StrictMode>
);

function Sect() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="main-header">
      <img src="../public/vite.svg" alt="Vite logo" className="logo" />
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2025 Wasim development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Reason I am excited to learn React</h1>
      <ol>
        <li>
          React is a popular library, so I will be able to fit in with all the
          coolest devs out there! 😎
        </li>
        <li>
          I am more likely to get a job as a front end developer if I know React
        </li>
      </ol>
    </main>
  );
}
