import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="hero-subtitle">Machine Learning Engineer</h2>
                    <h1 className="hero-title">
                        Building
                        <span className="text-gradient"> Intelligent Systems</span>
                        <br />
                        for the Future
                    </h1>
                    <p className="hero-description">
                        Hi, I'm <span className="highlight">Abishek</span>. I specialize in Deep Learning,
                        NLP, and building scalable AI solutions that solve real-world problems.
                    </p>

                    <div className="hero-actions">
                        <Link to="/projects" className="btn btn-primary">View Projects</Link>
                        <Link to="/experience" className="btn btn-outline">My Journey</Link>
                    </div>
                </motion.div>
            </div>

            {/* Abstract Visual (Placeholder for 3D/Canvas) */}
            <div className="hero-visual">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
            </div>
        </section>
    );
};

export default Hero;
