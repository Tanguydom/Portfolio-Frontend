import React from 'react';
import Header from './layout/Header/Header';  // Import de la navbar
import Footer from './layout/Footer/Footer';  // Import du footer

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
};


export default Layout;
