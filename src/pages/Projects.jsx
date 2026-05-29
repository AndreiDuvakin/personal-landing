import {projects} from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";


const Projects = () => {
    const sortedProjects = projects.sort((project1, project2) => project2.year - project1.year);

    return (
        <section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
            <h2 className="dark:text-gray-100 text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProjects.map((project, idx) => (
                    <ProjectCard key={idx} project={project}/>
                ))}
            </div>
        </section>
    )
};

export default Projects;