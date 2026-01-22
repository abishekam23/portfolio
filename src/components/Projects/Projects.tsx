import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.tags.includes(filter));

    return (
        <section className="projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="section-header"
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="filter-tags">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setFilter(tag)}
                                className={`filter-chip ${filter === tag ? 'active' : ''}`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="projects-grid"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="project-card"
                            >
                                <div className="card-content">
                                    <div className="card-header">
                                        <Code2 className="project-icon" size={32} />
                                        <div className="card-links">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                                                    <Github size={20} />
                                                </a>
                                            )}
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-link">
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>

                                    <div className="project-tags">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
