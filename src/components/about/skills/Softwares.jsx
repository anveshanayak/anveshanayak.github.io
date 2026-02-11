import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";
import "./skills.scss";

const softwares = [
  "IntelliJ IDEA",
  "VS Code",
  "Android Studio",
  "Jupyter Notebook",
  "Git",
  "Docker",
  "Kubernetes",
  "LangChain",
  "Hugging Face",
];

const softColor = {
  bg: "rgba(20,184,166,0.1)",
  text: "#5eead4",
  border: "#0d9488",
  glow: "rgba(20,184,166,0.2)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Softwares = () => {
  return (
    <motion.div className="skill-wrapper"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <p className="skills-p">
        Softwares/Tools
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {softwares.map((sw) => (
          <SkillBadge key={sw} label={sw} color={softColor} />
        ))}
      </div>
    </motion.div>
  );
}

export default Softwares;
