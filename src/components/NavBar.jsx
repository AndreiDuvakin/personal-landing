import navLinks from "../data/navLinks.js";
import {useState} from "react";
import {useTheme} from "./ThemeContext.jsx";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const [mobileOpen, setMobileOpen] = useState(false);
    const { darkMode, toggleTheme } = useTheme();
    const currentPath = window.location.pathname;
    const isActive = (path) => currentPath === path;

    return (
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <a
                    onClick={() => navigate("/")}
                    className="cursor-pointer font-bold text-xl tracking-tight hover:text-indigo-500 dark:text-gray-100 transition-colors">
                    Andrei Duvakin
                </a>

                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            onClick={() => navigate(link.href)}
                            className={`transition-colors cursor-pointer  ${
                                isActive(link.href)
                                    ? 'text-indigo-500 font-medium '
                                    : 'hover:text-indigo-500 dark:text-gray-100'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Переключить тему"
                    >
                        {darkMode ? (
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>
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
                            className={`block dark:text-gray-100 py-1 transition-colors ${
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