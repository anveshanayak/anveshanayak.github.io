import ProjectCard from "../../components/projects/projectCard/ProjectCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./projectsPage.scss";

const projects = [
  {
    id: 1,
    title: "Wander-Wise",
    description: "Fully-responsive Travel App that gives you real time data about nearby Attractions, Hotels and Restaurants using GoogleMaps API, TravelAdvisor API and Weather API. Built with React, TypeScript and TailwindCSS to create an fully responsive and accessible user experience.",
    tags: ["React", "TypeScript", "TailwindCSS", "GoogleMaps API", "TravelAdvisor API", "Weather API"],
    image: "/wander-wise.png",
    liveUrl: null,
    githubUrl: "https://github.com/anveshanayak/Wander-Wise-Travel-Companion",
  },
  {
    id: 2,
    title: "Plan-a-Meal",
    description: "Meal Planner Application in Java using SpringBoot MVC, MySQL and Thymeleaf. Follows SOLID and GRASP design principles. Utilized design patterns such as Singleton, Decorator, and Observer to enhance application modularity, scalability, and maintainability",
    tags: ["Java", "SpringBoot", "MySQL", "Thymeleaf"],
    image: "/plan-a-meal.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/anveshanayak/Plan-a-Meal",
  },
  {
    id: 3,
    title: "Agri-Predict",
    description: "Predictive Modeling of Agricultural Factors to Maximize Crop Yield. Created a machine learning pipeline integrating real-time weather based crop yield prediction and irrigation forecastingto maximize yields and optimize irrigation.",
    tags: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
    image: "/agri-predict.png",
    liveUrl: null,
    githubUrl: "https://github.com/anveshanayak/Agri-Predict",
  },
  {
    id: 4,
    title: "Karaka-Translate",
    description: "English to Telugu Translation Tool using Paninian Karaka Grammar Structure rather than traditional Latin-languages based Natural Language Processing. Novel approach to machine translation that leverages the unique linguistic features of Telugu to achieve more accurate and contextually relevant translations.",
    tags: ["Python", "NLP", "Machine Learning", "Pandas", "Scikit-learn"],
    image: "/karaka-translate.png",
    liveUrl: null,
    githubUrl: "https://github.com/anveshanayak/Karaka-Translate",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and Framer Motion to showcase my projects and skills. Features smooth animations, interactive elements, and a clean design to provide an engaging user experience.",
    tags: ["React", "Framer Motion", "SCSS", "Vite"],
    image: "/portfolio.png",
    liveUrl: "https://anveshanayak.github.io",
    githubUrl: "https://github.com/anveshanayak/anveshanayak.github.io",
  },
  {
    id: 6,
    title: "Self-Driving Car",
    description: "This project entails an obstacle-avoiding self-driving car based on Arduino that can navigate its environment autonomously. The vehicle is equipped with ultrasonic sensors and a colour sensor that detect obstacles, identifies the red and green colour, software that processes sensor data and makes navigation decisions.",
    tags: ["Arduino", "C++", "Ultrasonic Sensors", "Colour Sensor", "Autonomous Navigation"],
    image: "/self-driving-car.png",
    liveUrl: null,
    githubUrl: "https://github.com/anveshanayak/Self-Driving-Car",
  },
  {
    id: 7,
    title: "Reel-Read",
    description: "A book recommendation system based on movie preferences. Recommends books that are similar to movies the user has watched.",
    tags: ["Python", "Graph Neural Networks", "Pandas", "Scikit-learn"],
    image: "/reel-read.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/anveshanayak/ReelRead-Book-Recommendation-System-based-on-Movie-Preferences",
  },
  {
    id: 8,
    title: "Syntax Verification using PLY for Kotlin",
    description: "A syntax verification tool for Kotlin using Python's PLY (Python Lex-Yacc) library. This project verifies the syntax of Kotlin code by generating a parser and lexer using PLY.",
    tags: ["Python", "PLY", "Kotlin", "Syntax Verification"],
    image: "/kotlin.png",
    liveUrl: null,
    githubUrl: "https://github.com/anveshanayak/Syntax-Verification-using-PLY-for-kotlin",
  },
  {
    id: 9,
    title: "Next-Gen Shopping Website",
    description: "A next-gen shopping website using MERN stack, used Google AR models to show different clothing items on the 3D user.",
    tags: ["React", "Node.js", "MongoDB", "Google AR"],
    image: "/shopping.png",
    liveUrl: null,
    githubUrl: "https://github.com/anveshanayak/Syntax-Verification-using-PLY-for-kotlin",
  },
  {
    id: 10,
    title: "Minecraft 3D model viewer",
    description: "A 3D model viewer for Minecraft blocks and entities built with Three.js and React.",
    tags: ["JavaScript", "React", "TailwindCSS", "Three.js", "Google Model Viewer"],
    image: "/minecraft.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/anveshanayak/Minecraft-3D-Project-Google-Model-Viewer",
  },
  {
    id: 11,
    title: "Two-Player Shooting Game",
    description: "A two-player shooting game built with Pygame, featuring player movement, shooting mechanics, and collision detection.",
    tags: ["Python", "Pygame", "Game Development", "Collision Detection"],
    image: "/pygame.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/anveshanayak/Two-Player-Shooting-Game-Pygame",
  },
  {
    id: 12,
    title: "Reddit-Meme-Generator",
    description: "A Reddit meme generator applicationthat fetches and displays memes from Reddit using the Reddit API. Built with Android Studio, this app allows users to browse and share memes directly from their mobile devices.",
    tags: ["Android Studio", "Kotlin", "Reddit API", "Mobile Development"],
    image: "/reddit.png",
    liveUrl: null,
    githubUrl: "https://github.com/anveshanayak/MemeApp-AndroidStudio",
  }
];


const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top bar */}
      <div className="projects-topbar">
        <motion.button
          className="back-btn"
          onClick={() => navigate(-1)}
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back
        </motion.button>

        <span className="projects-label">Projects</span>

        <div style={{ width: 100 }} />
      </div>

      {/* Header */}
      <div className="projects-header">
        <motion.h1
          className="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Things I've{" "}
          <span className="gradient-text">Built</span>
        </motion.h1>
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
