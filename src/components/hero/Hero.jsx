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
    name: "GitHub",
    url: "https://github.com/anveshanayak",
    icon: "/linkedin-blue.png",
  },{
    name: "GitHub",
    url: "https://github.com/anveshanayak",
    icon: "/linkedin-blue.png",
  },{
    name: "GitHub",
    url: "https://github.com/anveshanayak",
    icon: "/linkedin-blue.png",
  },{
    name: "GitHub",
    url: "https://github.com/anveshanayak",
    icon: "/linkedin-blue.png",
  },{
    name: "GitHub",
    url: "https://github.com/anveshanayak",
    icon: "/linkedin-blue.png",
  },{
    name: "GitHub",
    url: "https://github.com/anveshanayak",
    icon: "/linkedin-blue.png",
  },
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
            <motion.div variants={textVariants} className="icon-div">
            <motion.h3 variants={textVariants}>Tech-Stack: </motion.h3>
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
            <motion.button variants={textVariants}>
              See the Latest Projects
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
            {/* TODO: connect buttons to correct sections */}
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
        <img src="/hero-an.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Hero;