const Contacts = () => {
    const contacts = [
        {
            type: "Email (primary)",
            value: "andreiduvakin@gmail.com",
            link: "mailto:andreiduvakin@gmail.com",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 500 500"><path d="M67 148.7c11 5.8 163.8 89.1 169.5 92.1 5.7 3 11.5 4.4 20.5 4.4s14.8-1.4 20.5-4.4c5.7-3 158.5-86.3 169.5-92.1 4.1-2.1 11-5.9 12.5-10.2 2.6-7.6-.2-10.5-11.3-10.5H65.8c-11.1 0-13.9 3-11.3 10.5 1.5 4.4 8.4 8.1 12.5 10.2z" fill="#615fff"/><path d="M455.7 153.2c-8.2 4.2-81.8 56.6-130.5 88.1l82.2 92.5c2 2 2.9 4.4 1.8 5.6-1.2 1.1-3.8.5-5.9-1.4l-98.6-83.2c-14.9 9.6-25.4 16.2-27.2 17.2-7.7 3.9-13.1 4.4-20.5 4.4s-12.8-.5-20.5-4.4c-1.9-1-12.3-7.6-27.2-17.2L110.7 338c-2 2-4.7 2.6-5.9 1.4-1.2-1.1-.3-3.6 1.7-5.6l82.1-92.5c-48.7-31.5-123.1-83.9-131.3-88.1-8.8-4.5-9.3.8-9.3 4.9v205c0 9.3 13.7 20.9 23.5 20.9h371c9.8 0 21.5-11.7 21.5-20.9v-205c0-4.2.6-9.4-8.3-4.9z" fill="#615fff"/></svg>,
        },
        {
            type: "Email (secondary)",
            value: "andrei@duvakin.ru",
            link: "mailto:andrei@duvakin.ru",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 500 500"><path d="M67 148.7c11 5.8 163.8 89.1 169.5 92.1 5.7 3 11.5 4.4 20.5 4.4s14.8-1.4 20.5-4.4c5.7-3 158.5-86.3 169.5-92.1 4.1-2.1 11-5.9 12.5-10.2 2.6-7.6-.2-10.5-11.3-10.5H65.8c-11.1 0-13.9 3-11.3 10.5 1.5 4.4 8.4 8.1 12.5 10.2z" fill="#615fff"/><path d="M455.7 153.2c-8.2 4.2-81.8 56.6-130.5 88.1l82.2 92.5c2 2 2.9 4.4 1.8 5.6-1.2 1.1-3.8.5-5.9-1.4l-98.6-83.2c-14.9 9.6-25.4 16.2-27.2 17.2-7.7 3.9-13.1 4.4-20.5 4.4s-12.8-.5-20.5-4.4c-1.9-1-12.3-7.6-27.2-17.2L110.7 338c-2 2-4.7 2.6-5.9 1.4-1.2-1.1-.3-3.6 1.7-5.6l82.1-92.5c-48.7-31.5-123.1-83.9-131.3-88.1-8.8-4.5-9.3.8-9.3 4.9v205c0 9.3 13.7 20.9 23.5 20.9h371c9.8 0 21.5-11.7 21.5-20.9v-205c0-4.2.6-9.4-8.3-4.9z" fill="#615fff"/></svg>,
        },
        {
            type: "Telegram",
            value: "@andrei_duvakin",
            link: "https://t.me/andrei_duvakin",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 25 25"><path fill="#615fff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"/></svg>,
        },
        {
            type: "LinkedIn",
            value: "linkedin.com/in/andrei-divakin",
            link: "https://www.linkedin.com/in/andrei-divakin-301604358/",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#615fff" d="M27.26 27.271h-4.733v-7.427c0-1.771-.037-4.047-2.475-4.047c-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739V11.999h4.552v2.083h.061c.636-1.203 2.183-2.468 4.491-2.468c4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912a2.75 2.75 0 0 1-2.751-2.756a2.753 2.753 0 1 1 2.751 2.756m2.374 17.359H4.74V12h4.749zM29.636 0H2.36C1.057 0 0 1.031 0 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307V2.307C32 1.031 30.932 0 29.631 0z"/></svg>,
        },
    ];

    return (
        <section id="contacts" className="py-16 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Contacts</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10 text-lg">
                Get in touch – I’m open to opportunities and collaboration
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
                {contacts.map((contact, idx) => (
                    <a
                        key={idx}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-5 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                    >
                        <div className="text-3xl group-hover:scale-110 transition-transform">
                            {contact.icon}
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                {contact.type}
                            </div>
                            <div className="text-lg font-medium text-gray-800 dark:text-gray-200 break-all">
                                {contact.value}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contacts;