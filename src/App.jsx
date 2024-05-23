// import React from 'react';
// import Header from './components/Header';
// import ProjectCard from './components/ProjectCard';
// import Footer from './components/Footer';

// const projects = [
//   {
//     title: 'Helion Photographer 2',
//     description: 'A detailed clone of the second page of the Helion website, showcasing advanced HTML and CSS skills.',
//     link: 'https://arslan-abrahum.github.io/helion-2nd-page-clone/',
//     image: 'https://via.placeholder.com/400x200?text=Helion+2nd+Page+Clone'
//   },
//   {
//     title: 'Helion Photographer 1',
//     description: 'A meticulous clone of the third page of the Helion website, demonstrating proficiency in HTML and CSS.',
//     link: 'https://arslan-abrahum.github.io/helion-3rd-page-clone/',
//     image: 'https://via.placeholder.com/400x200?text=Helion+3rd+Page+Clone'
//   },
//   {
//     title: 'Catch Insect',
//     description: 'An interactive JavaScript project featuring engaging animations and user interactions.',
//     link: 'https://wonderful-bunny-ec9090.netlify.app/',
//     image: 'https://via.placeholder.com/400x200?text=Wonderful+Bunny'
//   },
//   {
//     title: 'Who Pays the Bill',
//     description: 'A React app that helps groups decide who pays the bill, showcasing state management and component design.',
//     link: 'https://who-pays-the-bill-9328.netlify.app',
//     image: 'https://via.placeholder.com/400x200?text=Who+Pays+the+Bill'
//   },
//   {
//     title: 'Aero Landing Page',
//     description: 'A sleek and modern landing page created with React, emphasizing responsive design and aesthetics.',
//     link: 'https://arslan-abrahum.github.io/aero-landing-page/',
//     image: 'https://via.placeholder.com/400x200?text=Aero+Landing+Page'
//   },
//   {
//     title: 'Movie ViteReact App',
//     description: 'A dynamic movie application built with Vite and React, demonstrating API integration and dynamic rendering.',
//     link: 'https://movie-vitereact-app.netlify.app/',
//     image: 'https://via.placeholder.com/400x200?text=Movie+ViteReact+App'
//   },
// ];

// const App = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-grow container mx-auto p-6">
//         <section className="text-center mb-10">
//           <h2 className="text-3xl font-bold text-gray-800">My Projects</h2>
//           <p className="mt-2 text-lg text-gray-600">A showcase of my front-end development work</p>
//         </section>
//         <div className="flex flex-wrap justify-center">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} title={project.title} description={project.description} link={project.link} image={project.image} />
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


/////////////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

const projects = [
  {
    title: 'Helion 2nd Page Clone',
    description: 'A detailed clone of the second page of the Helion website, showcasing advanced HTML and CSS skills.',
    link: 'https://arslan-abrahum.github.io/helion-2nd-page-clone/',
    image: 'https://via.placeholder.com/400x200?text=Helion+2nd+Page+Clone',
    category: 'HTML/CSS'
  },
  {
    title: 'Helion 3rd Page Clone',
    description: 'A meticulous clone of the third page of the Helion website, demonstrating proficiency in HTML and CSS.',
    link: 'https://arslan-abrahum.github.io/helion-3rd-page-clone/',
    image: 'https://via.placeholder.com/400x200?text=Helion+3rd+Page+Clone',
    category: 'HTML/CSS'
  },
  {
    title: 'Wonderful Bunny',
    description: 'An interactive JavaScript project featuring engaging animations and user interactions.',
    link: 'https://wonderful-bunny-ec9090.netlify.app/',
    image: 'https://via.placeholder.com/400x200?text=Wonderful+Bunny',
    category: 'JavaScript'
  },
  {
    title: 'Who Pays the Bill',
    description: 'A React app that helps groups decide who pays the bill, showcasing state management and component design.',
    link: 'https://who-pays-the-bill-9328.netlify.app',
    image: 'https://via.placeholder.com/400x200?text=Who+Pays+the+Bill',
    category: 'React.js'
  },
  {
    title: 'Aero Landing Page',
    description: 'A sleek and modern landing page created with React, emphasizing responsive design and aesthetics.',
    link: 'https://arslan-abrahum.github.io/aero-landing-page/',
    image: 'https://via.placeholder.com/400x200?text=Aero+Landing+Page',
    category: 'React.js'
  },
  {
    title: 'Movie ViteReact App',
    description: 'A dynamic movie application built with Vite and React, demonstrating API integration and dynamic rendering.',
    link: 'https://movie-vitereact-app.netlify.app/',
    image: 'https://via.placeholder.com/400x200?text=Movie+ViteReact+App',
    category: 'React.js'
  },
];

const App = () => {
  // Group projects by category
  const projectsByCategory = projects.reduce((acc, project) => {
    acc[project.category] = acc[project.category] || [];
    acc[project.category].push(project);
    return acc;
  }, {});

  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        {Object.entries(projectsByCategory).map(([category, projects]) => (
          <section key={category} className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{category}</h2>
            <div className="flex flex-wrap justify-center">
              {projects.map((project, index) => (
                <ProjectCard key={index} title={project.title} description={project.description} link={project.link} image={project.image} />
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
