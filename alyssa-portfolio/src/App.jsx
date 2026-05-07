import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";

import "./styles/App.css";

function Home() {
return (
<>
<Hero />
<About />
<Skills />
<Contact />
</>
);
}

function App() {
return (
<BrowserRouter>
<div className="app">
<NavBar />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/projects" element={<ProjectsPage />} />
</Routes>

<Footer />
</div>
</BrowserRouter>
);
}

export default App;
