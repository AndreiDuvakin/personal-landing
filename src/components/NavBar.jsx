import navLinks from "../data/navLinks.js";
import {useState} from "react";

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const currentPath = window.location.pathname;
    const isActive = (path) => currentPath === path;

    return (
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <a href="/" className="font-bold text-xl tracking-tight hover:text-indigo-500 transition-colors">
                    Andrei Duvakin
                </a>

                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`transition-colors ${
                                isActive(link.href)
                                    ? 'text-indigo-500 font-medium'
                                    : 'hover:text-indigo-500'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <button
                    className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                >
                    <div className="w-5 h-0.5 bg-gray-800 dark:bg-gray-200 mb-1"></div>
                    <div className="w-5 h-0.5 bg-gray-800 dark:bg-gray-200 mb-1"></div>
                    <div className="w-5 h-0.5 bg-gray-800 dark:bg-gray-200"></div>
                </button>
            </div>

            {mobileOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-3 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`block py-1 transition-colors ${
                                isActive(link.href)
                                    ? 'text-indigo-500 font-medium'
                                    : 'hover:text-indigo-500'
                            }`}
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
};

export default NavBar;