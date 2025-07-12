import React, { useState } from 'react';
import axios from 'axios';

const AddProjectForm = () => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    image: '',
    link: ''
  });

  const handleChange = e => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects', project);
      alert('Project added!');
      // Optional: redirect to projects page
      window.location.href = '/projects';
    } catch (err) {
      alert('Error adding project');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Project</h3>
      <input type="text" name="title" value={project.title} onChange={handleChange} placeholder="Title" required />
      <input type="text" name="description" value={project.description} onChange={handleChange} placeholder="Description" required />
      <input type="text" name="image" value={project.image} onChange={handleChange} placeholder="Image URL" required />
      <input type="text" name="link" value={project.link} onChange={handleChange} placeholder="Project Link" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProjectForm;
