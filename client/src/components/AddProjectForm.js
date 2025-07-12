import React, { useState } from 'react';
import axios from 'axios';

const AddProjectForm = ({ onProjectAdded }) => {
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
      setProject({ title: '', description: '', image: '', link: '' });
      if (onProjectAdded) onProjectAdded(); // refresh list in Projects.js
    } catch (err) {
      alert('Error adding project');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h3>Add New Project</h3>
      <input type="text" name="title" value={project.title} onChange={handleChange} placeholder="Title" required /><br />
      <input type="text" name="description" value={project.description} onChange={handleChange} placeholder="Description" required /><br />
      <input type="text" name="image" value={project.image} onChange={handleChange} placeholder="Image URL" required /><br />
      <input type="text" name="link" value={project.link} onChange={handleChange} placeholder="Project Link" required /><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProjectForm;
