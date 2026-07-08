import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Layout>
  );
}

export default App;