import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const menuItems = [
    { label: 'About', href: isHomePage ? '#about' : '/#about', isHash: true },
    { label: 'Projects', href: isHomePage ? '#projects' : '/#projects', isHash: true },
    { label: 'Skills', href: isHomePage ? '#skills' : '/#skills', isHash: true },
    { label: 'Experience', href: isHomePage ? '#experience' : '/#experience', isHash: true },
    { label: 'Blog', href: isHomePage ? '#blog' : '/#blog', isHash: true },
    { label: 'Contact', href: isHomePage ? '#contact' : '/#contact', isHash: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean) => {
    if (isHash && isHomePage && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const renderNavItem = (item: { label: string; href: string; isHash: boolean }) => {
    if (item.isHash) {
      return (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => handleNavClick(e, item.href, item.isHash)}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link
        key={item.label}
        to={item.href}
        onClick={() => setIsMenuOpen(false)}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-dark-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            CW
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => renderNavItem(item))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              className="ml-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-gray-800 dark:text-white" /> : <Menu size={24} className="text-gray-800 dark:text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => renderNavItem(item))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;