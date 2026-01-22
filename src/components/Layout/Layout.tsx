import type { ReactNode } from 'react';
import Navbar from './Navbar';
import './Layout.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout-wrapper">
            <Navbar />
            <div className="grid-background"></div>
            <main className="main-content">
                {children}
            </main>
        </div>
    );
};

export default Layout;
