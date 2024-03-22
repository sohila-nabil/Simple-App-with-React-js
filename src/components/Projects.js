import React from 'react'
import { useNavigate } from 'react-router-dom';

function Projects() {
  const x = useNavigate()
  return (
    <div className="projects">
      <div className="container">
        <div className="info">
          <h3>Projects</h3>
          <p>you can see my projects</p>
        </div>
        <div className="list">
          <button onClick={() => x("/project")}>section 1</button>
          <button onClick={() => x("/contact")}>section 2</button>
          <button onClick={() => x("/items")}>section 3</button>
        </div>
      </div>
    </div>
  );
}
export default Projects