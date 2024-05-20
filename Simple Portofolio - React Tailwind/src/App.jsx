import { useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Header } from "./components/Header";

import "./App.css";
import { Project } from "./pages/Project";
import { Client } from "./pages/Client";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Project />
        <Client />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
