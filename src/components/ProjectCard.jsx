import React from 'react';

const ProjectCard = ({ title, description, link, image, category }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 mx-4 my-6 bg-white hover:shadow-2xl card">
      <div>
        <img className="w-full h-full object-cover" src={image} alt={title} />

      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 card-title">{title}</div>
        <p className="text-base mb-4 card-description">{description}</p>
        <span className="text-sm font-semibold">{category}</span>
        <a href={link} className="block mt-2 font-semibold card-link" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
