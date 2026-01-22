import { motion } from 'framer-motion';
import { Brain, Database, Globe, Cpu } from 'lucide-react';
import './About.css';

const About = () => {
    const skills = [
        { name: 'Machine Learning', icon: <Brain size={24} />, level: 90 },
        { name: 'Data Engineering', icon: <Database size={24} />, level: 85 },
        { name: 'Web Development', icon: <Globe size={24} />, level: 80 },
        { name: 'MLOps', icon: <Cpu size={24} />, level: 75 },
    ];

    return (
        <section className="about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="about-content"
                >
                    <div className="about-text">
                        <h2 className="section-title">About Me</h2>
                        <p className="about-bio">
                            I am a passionate <span className="highlight">Machine Learning Engineer</span> dedicated to building
                            intelligent systems that drive impact. With a strong foundation in both theoretical AI and
                            practical software engineering, I bridge the gap between complex algorithms and scalable applications.
                        </p>
                        <p className="about-bio">
                            My journey began with a curiosity for how machines learn, leading me to specialize in
                            <span className="highlight"> Computer Vision</span> and <span className="highlight">NLP</span>.
                            When I'm not training models, you can find me contributing to open source or exploring the latest
                            advancements in Generative AI.
                        </p>
                    </div>

                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="skill-card"
                            >
                                <div className="skill-icon">{skill.icon}</div>
                                <div className="skill-info">
                                    <h3>{skill.name}</h3>
                                    <div className="skill-bar-bg">
                                        <motion.div
                                            className="skill-bar-fill"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
