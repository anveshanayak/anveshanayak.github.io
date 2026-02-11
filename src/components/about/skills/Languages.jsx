import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";
import "./skills.scss";

const languages = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "C/C++",
  "Flutter/Dart",
  "Go",
  "HTML",
  "CSS",
  "SQL",
];

const langColor = {
  bg: "rgba(99,102,241,0.12)",
  text: "#a5b4fc",
  border: "#4f46e5",
  glow: "rgba(99,102,241,0.25)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Languages = () => {
  return (
    <motion.div className="skill-wrapper"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <p className="skills-p">
        Languages
      </p>

      <div className="language-container">
        {languages.map((lang) => (
          <SkillBadge key={lang} label={lang} color={langColor} />
        ))}
      </div>
    </motion.div>
  );
}

export default Languages;