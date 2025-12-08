import PageHeader from '../components/shared/PageHeader';
import { projectsNewData } from '../data/projectsNewData';
import ProjectCard from '../components/projects/ProjectCard';

const ProjectsNew = () => {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader 
        title="Our Work (New)" 
        subtitle="A collection of our cinematic and storytelling projects." 
      />
       <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsNewData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsNew;
