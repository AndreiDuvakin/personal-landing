import myStack from "../data/myStack.js";

const HomePage = () => (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <section className="pt-32 pb-16 px-4 text-center">
            <img
                alt="Andrei Duvakin"
                src="/95039238.jpeg"
                className="inline-block size-60 rounded-full ring-2 ring-white outline -outline-offset-1 outline-black/5 object-cover shadow-xl"
            />
            <h1 className="text-5xl font-extrabold mb-4 mt-8">
                Hi, I'm <span className="text-indigo-500">Andrei</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Developer of application software solutions. Backend in Python and frontend in React. I have practical
                experience in industrial development. Discovering new directions in development.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {myStack.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700"
                    >
            {tech}
          </span>
                ))}
            </div>

            <div className="flex justify-center gap-4">
                <a
                    href="https://github.com/AndreiDuvakin"
                    className="inline-flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-700 dark:hover:bg-gray-600 active:scale-95 transition-all"
                >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"/>
                    </svg>
                    GitHub
                </a>
                <a
                    href="/contacts"
                    className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg shadow-sm hover:shadow-md hover:border-indigo-500 dark:hover:border-indigo-400 active:scale-95 transition-all"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Contact me
                </a>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <a
                    href="/about"
                    className="group flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-750 transition-all"
                >
                    <svg className="w-8 h-8 text-indigo-500 mb-3 group-hover:scale-110 transition-transform" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                    </svg>
                    <span className="font-semibold text-lg">About me</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">Experience, skills, education</span>
                </a>
                <a
                    href="/projects"
                    className="group flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-750 transition-all"
                >
                    <svg className="w-8 h-8 text-indigo-500 mb-3 group-hover:scale-110 transition-transform" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/>
                    </svg>
                    <span className="font-semibold text-lg">Projects</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">Portfolio with GitHub links</span>
                </a>
            </div>
        </section>
    </div>
);


export default HomePage;