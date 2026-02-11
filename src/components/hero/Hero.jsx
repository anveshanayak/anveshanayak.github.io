import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const icons = [
  {
    name: "Java",
    url: "https://java.com/en/",
    icon: "/java.png",
  },{
    name: "Python",
    url: "https://www.python.org/",
    icon: "/python.png",
  },{
    name: "Go",
    url: "https://golang.org/",
    icon: "/Go.png",
  },{
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "/js.png",
  },{
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    icon: "/typescript.png",
  },{
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: "/html.png",
  },
  {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: "/css.png",
  },{
    name: "Flutter",
    url: "https://flutter.dev/",
    icon: "/Flutter.png",
  },{
    name: "Sklearn",
    url: "https://scikit-learn.org/",
    icon: "/scikit-learn.png",
  },{
    name: "PyTorch",
    url: "https://pytorch.org/",
    icon: "/PyTorch.png",
  },{
    name: "Keras",
    url: "https://keras.io/",
    icon: "/Keras.png",
  },{
    name: "Pandas",
    url: "https://pandas.pydata.org/",
    icon: "/pandas.png",
  },
  {
    name: "Matplotlib",
    url: "https://matplotlib.org/",
    icon: "/Matplotlib.png",
  },{
    name: "Numpy",
    url: "https://numpy.org/",
    icon: "/NumPy.png",
  },{
    name: "NetworkX",
    url: "https://networkx.org/",
    icon: "/NetworkX.png",
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    icon: "/React.png",
  },
  {
    name: "NodeJS",
    url: "https://nodejs.org/",
    icon: "/Node.js.png",
  },{
    name: "MaterialUI",
    url: "https://mui.com/",
    icon: "/material-ui.png",
  },
  {
    name: "AWS",
    url: "https://aws.amazon.com/",
    icon: "/AWS.png",
  },{
    name: "GCP",
    url: "https://cloud.google.com/",
    icon: "/gcp.png",
  },{
    name: "Docker",
    url: "https://www.docker.com/",
    icon: "/Docker.png",
  },{
    name: "Kubernetes",
    url: "https://kubernetes.io/",
    icon: "/Kubernetes.png",
  },{
    name: "Helm",
    url: "https://helm.sh/",
    icon: "/Helm.png",
  },{
    name: "Maven",
    url: "https://maven.apache.org/",
    icon: "/maven.png",
  },
  {
    name: "Gradle",
    url: "https://gradle.org/",
    icon: "/Gradle.png",
  },
  {
    name: "OpenAPI",
    url: "https://www.openapis.org/",
    icon: "/OpenAPI.png",
  },{
    name: "Firebase",
    url: "https://firebase.google.com/",
    icon: "/Firebase.png",
  },
  {
    name: "MySQL",
    url: "https://www.mysql.com/",
    icon: "/mysql.png",
  },{
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    icon: "/mongodb.png",
  },{
    name: "Jira",
    url: "https://www.atlassian.com/software/jira",
    icon: "/Jira.png",
  }
];

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ANVESHA NAYAK</motion.h2>
            <motion.h1 variants={textVariants}>
            Software Developer | AI Enthusiast | Life-long Learner
            </motion.h1>
            <motion.h3 variants={textVariants}>Technologies I work with: </motion.h3>
            <motion.div variants={textVariants} className="icon-div">
              {icons.map((icon) => (
                <motion.div className="icons">
                <a
                  key={icon.name}
                  href={icon.url}
                  target="_blank"
                >
                  <img src={icon.icon} alt={icon.name} />
                </a></motion.div>
              ))}
            </motion.div>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} 
                whileHover={{scale: 1.04,boxShadow: "0 0 28px rgba(99,102,241,0.4)"}}
                onClick={() => window.location.href = "#Projects"}>
              See the Latest Projects
            </motion.button>
            <motion.button variants={textVariants} 
            whileHover={{scale: 1.04, boxShadow: "0 0 28px rgba(99,102,241,0.4)"}} 
            onClick={() => window.location.href = "#Contact"}>Contact Me</motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Developer | Life-long Learner
      </motion.div>
      <div className="imageContainer">
        <img src="/hero-an.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;