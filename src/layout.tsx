// Layout.tsx
import React, { type ReactNode } from 'react';
import Navbar from './components/Navbar'; // Assuming Navbar component is in the same directory
import Footer from './components/Footer';

interface LayoutProps {
  children: ReactNode; // Explicitly typing 'children' as ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;