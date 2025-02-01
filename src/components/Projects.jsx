import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>My DevOps Projects</h2>
      <ul className="projects">
        <li><a href="#">Automated CI/CD Pipeline for Microservices Architecture</a></li>
        <li><a href="#">Kubernetes Cluster Deployment on AWS EKS</a></li>
        <li><a href="#">Terraform Modules for Multi-Cloud Infrastructure</a></li>
        <li><a href="#">Monitoring and Logging with Prometheus and Grafana</a></li>
        <li><a href="#">Jenkins Pipeline for Automated Testing and Deployment</a></li>
      </ul>
    </section>
  );
};

export default Projects;