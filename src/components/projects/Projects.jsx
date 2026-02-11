import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Wander-Wise",
    img: "/wander-wise.png",
    desc: "Fully-responsive Travel App that gives you real time data about nearby Attractions, Hotels and Restaurants using GoogleMaps API, TravelAdvisor API and Weather API. Built with React, TypeScript and TailwindCSS to create an fully responsive and accessible user experience.",
    codelink:"https://github.com/anveshanayak/Wander-Wise-Travel-Companion",
  },
  {
    id: 2,
    title: "Plan-a-Meal",
    img:"/plan-a-meal.jpg",
    desc: "Meal Planner Application in Java using SpringBoot MVC, MySQL and Thymeleaf. Follows SOLID and GRASP design principles. Utilized design patterns such as Singleton, Decorator, and Observer to enhance application modularity, scalability, and maintainability",
    codelink:"https://github.com/anveshanayak/Plan-a-Meal",
  },
  {
    id: 3,
    title: "Agri-Predict",
    img: "/agri-predict.png",
    desc: "Predictive Modeling of Agricultural Factors to Maximize Crop Yield. Created a machine learning pipeline integrating real-time weather based crop yield prediction and irrigation forecastingto maximize yields and optimize irrigation.",
    codelink:"https://github.com/anveshanayak/Agri-Predict",
  },
  {
    id: 4,
    title: "Karaka-Translate",
    img: "/karaka-translate.png",
    desc: "English to Telugu Translation Tool using Paninian Karaka Grammar Structure rather than traditional Latin-languages based Natural Language Processing. Novel approach to machine translation that leverages the unique linguistic features of Telugu to achieve more accurate and contextually relevant translations.",
    codelink:"https://github.com/anveshanayak/Karaka-Translate",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.button
              onClick={() => window.open(item.codelink, "_blank")}
              whileHover={{
              scale: 1.04,
              boxShadow: "0 0 28px rgba(99,102,241,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "8px" }}>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>

              GitHub

            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}

      {/* ── View All button ── */}
      <section className="viewAllSection">
        <div className="container">
          <div className="wrapper">
            <p className="see-more-text">Want to see what else I've been working on?</p>
            <div className="viewAll">
              <motion.button
                className="viewAllBtn"
                onClick={() => navigate("/projects")} 
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(99,102,241,0.35)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                See More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
