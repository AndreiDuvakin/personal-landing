const ProjectCard = ({project}) => {
    return (
        <div
            key={project.id}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => (e.target.style.display = 'none')}
            />
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <h3 className="dark:text-gray-100 font-semibold text-xl mb-2">{project.title}</h3>
                    <span
                        className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-400 dark:text-gray-100 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10"
                    >
                        {project.year}
                      </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                        >
                        {tag}
                      </span>
                    ))}
                </div>
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:underline text-sm inline-flex items-center gap-1"
                >
                    Source code →
                </a>
            </div>
        </div>
    )
};

export default ProjectCard;