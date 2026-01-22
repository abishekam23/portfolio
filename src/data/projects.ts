export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'Automated Trading Bot',
        description: 'A high-frequency trading bot built with Python and C++ that executes arbitrage strategies across multiple exchanges using WebSocket feeds.',
        tags: ['Python', 'C++', 'Machine Learning', 'Finance'],
        github: 'https://github.com/abishek/trading-bot',
        link: 'https://demo-trading.com'
    },
    {
        id: '2',
        title: 'Computer Vision Drone',
        description: 'Autonomous drone navigation system using YOLOv8 for object detection and SLAM for mapping unknown environments.',
        tags: ['Computer Vision', 'PyTorch', 'ROS', 'YOLO'],
        github: 'https://github.com/abishek/cv-drone'
    },
    {
        id: '3',
        title: 'LLM RAG Pipeline',
        description: 'Retrieval-Augmented Generation system for querying large internal knowledge bases with citations and high accuracy.',
        tags: ['NLP', 'LangChain', 'OpenAI', 'Vector DB'],
        github: 'https://github.com/abishek/rag-pipeline'
    },
    {
        id: '4',
        title: 'Portfolio Website',
        description: 'Modern portfolio built with React, TypeScript and Framer Motion to showcase ML engineering work.',
        tags: ['React', 'TypeScript', 'Web Dev'],
        github: 'https://github.com/abishek/portfolio'
    }
];
