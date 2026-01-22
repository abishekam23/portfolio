import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
// Placeholder pages (will implement properly later)
import Hero from './components/Hero/Hero';

import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<div className="container"><h1>About</h1><p>Coming Soon...</p></div>} />
          <Route path="/experience" element={<div className="container"><h1>Experience</h1><p>Coming Soon...</p></div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
