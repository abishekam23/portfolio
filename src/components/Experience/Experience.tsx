import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        id: 1,
        role: 'Artificial Intelligence Intern',
        company: 'CodeClause',
        date: 'May 2024 - June 2024',
        description: 'Developed and deployed a emotion detection model reaching 85% accuracy. Built a golden task application using Tkinter for real-time gender and age detection.',
        tech: ['Python', 'Tkinter', 'OpenCV', 'Deep Learning']
    },
    {
        id: 2,
        role: 'Machine Learning Intern',
        company: 'Bharat Intern',
        date: 'April 2024 - May 2024',
        description: 'Developed a house price prediction model using linear regression and decision trees. Created an Iris flower classification system with 96% accuracy.',
        tech: ['Scikit-learn', 'Pandas', 'Matplotlib']
    }
];

const education = [
    {
        id: 1,
        degree: 'B.Tech in Artificial Intelligence',
        school: 'SRM Institute of Science and Technology',
        year: '2022 - Present',
        description: 'Specializing in Artifical Intelligence and Machine Learning. CGPA: 9.4/10.'
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
