import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        id: 1,
        role: 'Project Intern',
        company: 'Expleo Technologies Pvt Ltd',
        date: 'July 2022 - August 2022',
        description: 'Developed an automated file formatting process to improve efficiency of client-side preference implications. Established an application-specific chatbot enabling remote troubleshooting capabilities, assisting in deployment error resolution.',
        tech: ['Chatbot', 'Automation', 'Deployment']
    }
];

const education = [
    {
        id: 1,
        degree: 'M.Sc. in Communication Engineering',
        school: 'Aalto University, Finland',
        year: 'Sep 2025 - Present',
        description: 'Relevant Coursework: Ubiquitous Computing, Agentic AI, Large Language Models, Supervised Machine Learning. CGPA: 3.83'
    },
    {
        id: 2,
        degree: 'B.Tech CSE (AI & Robotics)',
        school: 'Vellore Institute of Technology, Chennai',
        year: 'Sep 2021 - May 2025',
        description: 'Specialization in Artificial Intelligence and Robotics. CGPA: 8.34. Coursework: Machine Learning, NLP, Computer Architecture, IoT.'
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

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title text-center"
                    style={{ marginTop: 'var(--space-xl)' }}
                >
                    Education
                </motion.h2>

                <div className="timeline">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="timeline-item left" /* Always left or alternate if preferred, simpler to keep left for 2 items */
                            style={{ width: '100%', left: 0 }}
                        >
                            <div className="timeline-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                <div className="experience-header">
                                    <div className="role-company">
                                        <h3 className="experience-role">{edu.degree}</h3>
                                        <h4 className="experience-company">
                                            <GraduationCap size={16} className="icon-company" />
                                            {edu.school}
                                        </h4>
                                    </div>
                                    <span className="experience-date">
                                        <Calendar size={14} />
                                        {edu.year}
                                    </span>
                                </div>
                                <p className="experience-desc">{edu.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
