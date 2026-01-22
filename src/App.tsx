import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
// Placeholder pages (will implement properly later)
import Hero from './components/Hero/Hero';

import Projects from './components/Projects/Projects';

import About from './components/About/About';
import Experience from './components/Experience/Experience';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
