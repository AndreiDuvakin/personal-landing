import {
    education,
    experience,
    skills,
    achievements,
    additionalEducation,
} from "../data/aboutData.js";

const About = () => {
    return (
        <section id="about" className="py-16 px-4 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 dark:text-gray-100 flex flex-row gap-3">About <h2
                className="text-indigo-500">me</h2></h2>

            <div className="mb-10 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <p className="mb-3">
                    I'm a software developer passionate about building efficient backend services and modern web
                    interfaces.
                    My main stack is Python and React, but I also work with Kotlin
                    and desktop apps by PyQt. Currently completing my associate degree and moving on to a bachelor's
                    program at
                    Nosov Magnitogorsk State Technical University.
                </p>
                <p>
                    I started programming at Yandex Lyceum and later gained industrial experience at MMK-Informservice,
                    where I developed business applications, integrated software modules, and worked with databases.
                    I regularly compete in professional championships and hackathons, achieving top places.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="dark:border dark:border-gray-300 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                    <h3 className="dark:text-gray-100 text-xl font-semibold mb-3 flex items-center gap-2">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#615fffff"
                                    d="M23.835 8.5L12 .807L.165 8.5L12 16.192l8-5.2V16h2V9.693z"
                                />
                                <path
                                    fill="#615fffff"
                                    d="M5 17.5v-3.665l7 4.55l7-4.55V17.5c0 1.47-1.014 2.615-2.253 3.338C15.483 21.576 13.802 22 12 22s-3.482-.424-4.747-1.162C6.014 20.115 5 18.97 5 17.5"
                                />
                            </svg>
                        </span> Education
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">{education.college}</p>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">{education.bachelor}</p>
                </div>
                <div className="dark:border dark:border-gray-300 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                    <h3 className="dark:text-gray-100 text-xl font-semibold mb-3 flex items-center gap-2">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#615fff"
                                    d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
                                />
                            </svg>
                        </span> Work experience
                    </h3>
                    {experience.map((exp, idx) => (
                        <div key={idx}>
                            <p className="font-medium text-gray-800 dark:text-gray-200">{exp.company}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                            <p className="text-gray-700 dark:text-gray-300 mt-1">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-12">
                <h3 className="dark:text-gray-100 flex flex-row gap-3 text-2xl font-semibold mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill="#615fff"
                            d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675l-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617l.968.968l-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96l2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46L4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242l.529.026l.287.445l.445.287l.026.529L5 13l-.242.471l-.026.529l-.445.287l-.287.445l-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471l.026-.529l.445-.287l.287-.445l.529-.026z"
                        />
                    </svg>
                    Tech stack
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {skills.map((group, idx) => (
                        <div key={idx}
                             className="dark:border dark:border-gray-100 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">{group.category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                                    >
                    {item}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-12">
                <h3 className="dark:text-gray-100 flex flex-row gap-3 text-2xl font-semibold mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 24 24">
                        <path
                            fill="#615fff"
                            d="M22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958m-20 0v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162"/>
                        <path
                            fill="#615fff"
                            fill-rule="evenodd"
                            d="M16.377 2.347A26.4 26.4 0 0 0 12 2c-1.783 0-3.253.157-4.377.347c-1.139.192-1.708.288-2.184.874c-.475.586-.45 1.219-.4 2.485c.173 4.348 1.111 9.78 6.211 10.26V19.5H9.82a1 1 0 0 0-.98.804l-.19.946H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-2.65l-.19-.946a1 1 0 0 0-.98-.804h-1.43v-3.534c5.1-.48 6.039-5.911 6.211-10.26c.05-1.266.076-1.9-.4-2.485c-.476-.586-1.045-.682-2.184-.874m-3.59 3.46a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0V8.31l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163"
                            clip-rule="evenodd"
                        />
                    </svg>
                    Achievements
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {achievements.map((ach, idx) => (
                        <div
                            key={idx}
                            className="border-l-4 border-indigo-500 bg-gray-50 dark:bg-gray-800/80 p-4 rounded-r-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                        >
                            <p className="font-medium text-gray-800 dark:text-gray-100">{ach.title}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{ach.category}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-8">
                <h3 className="dark:text-gray-100 flex flex-row gap-3 text-2xl font-semibold mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#615fff"
                            d="M3 23h18V1H3zM14.002 6.688L11.504 8.75V3H16.5v5.75z"
                        />
                    </svg>
                    Additional courses
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {additionalEducation.map((course, idx) => (
                        <li key={idx}>{course}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default About;