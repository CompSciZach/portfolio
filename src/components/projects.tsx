export default function Projects() {
    const projects = [
      {
        title: "Capital Coach - Financial Solution",
        description: "An innovative financial tool, designed to empower individuals with smart financial planning tools, integrating simplicity with effectiveness.",
        image: "/src/assets/CapitalCoach.png",
        tags: ["Html", "Javascript", "Chart.js"],
        githubUrl: "https://github.com/CompSciZach/CapitalCoach",
      },
      {
        title: "GenPass - Password Generator",
        description: "A software to generate complex yet memorable passwords that defeat password crackers.",
        image: "/src/assets/genpass.png",
        tags: ["C#", ".NET", "Terminal App"],
        githubUrl: "https://github.com/CompSciZach/GenPass-PasswordGenerator",
      },
      {
        title: "Portfolio Website",
        description: "My portfolio site built with React.js and Vite.js, made to highlight my work and skills with fast loading.",
        image: "/src/assets/Portfolio.png",
        tags: ["React.js", "Vite.js"],
        githubUrl: "https://github.com/CompSciZach/GenPass-PasswordGenerator",
      },
    ];
  
    return (
        <section id="projects" className="section">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a 
                key={index}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                {project.image && (
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={`Screenshot of ${project.title}`}
                      className="project-image"
                    />
                  </div>
                )}
                
                <div className="tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      );
  }