import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddProjectForm from '../components/AddProjectForm';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchProjects = () => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="projects">
      <h2>My Projects</h2>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : '➕ Add Project'}
      </button>

      {showForm && <AddProjectForm onProjectAdded={fetchProjects} />}

      <div style={{ marginTop: '20px' }}>
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map(project => (
            <div
              key={project._id}
              style={{
                border: '1px solid #ccc',
                marginBottom: '20px',
                padding: '10px',
                borderRadius: '10px'
              }}
            >
              <h3>{project.title}</h3>

              {/* ✅ ADD IMAGE HERE */}
              <img
                src={project.image}
                alt={project.title}
                width="200"
                style={{ borderRadius: '8px', marginBottom: '10px' }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200?text=No+Image';
                }}
              />

              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
