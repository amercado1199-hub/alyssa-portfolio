import { HashRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ProjectsPage from "./pages/ProjectsPage";
import "./App.css";

function Home() {
return <Hero />;
}

function App() {
return (
<HashRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/projects" element={<ProjectsPage />} />
</Routes>
</HashRouter>
);
}

export default App;


