import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        id: 1,
        role: 'Senior Machine Learning Engineer',
        company: 'TechCorp AI',
        date: '2023 - Present',
        description: 'Leading the development of Large Language Model agents for customer support automation. Optimized inference latency by 40% using quantization techniques.',
        tech: ['Python', 'PyTorch', 'AWS', 'Docker']
    },
    {
        id: 2,
        role: 'Machine Learning Engineer',
        company: 'DataFlow Systems',
        date: '2021 - 2023',
        description: 'Built computer vision pipelines for manufacturing defect detection. Deployed models to edge devices achieving 99.5% accuracy.',
        tech: ['TensorFlow', 'OpenCV', 'Kubernetes', 'FastAPI']
    },
    {
        id: 3,
        role: 'Data Scientist',
        company: 'Innovate Fintech',
        date: '2019 - 2021',
        description: 'Developed fraud detection algorithms processing millions of transactions daily. Collaborated with cross-functional teams to integrate models into production.',
        tech: ['Scikit-learn', 'Pandas', 'Spark', 'SQL']
    }
];

const Experience = () => {
    return (
        <section className="experience-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title text-center"
                >
                    Professional Experience
                </motion.h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-content">
                                <div className="experience-header">
                                    <div className="role-company">
                                        <h3 className="experience-role">{exp.role}</h3>
                                        <h4 className="experience-company">
                                            <Briefcase size={16} className="icon-company" />
                                            {exp.company}
                                        </h4>
                                    </div>
                                    <span className="experience-date">
                                        <Calendar size={14} />
                                        {exp.date}
                                    </span>
                                </div>

                                <p className="experience-desc">{exp.description}</p>

                                <div className="experience-tech">
                                    {exp.tech.map(t => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
