import { motion } from "framer-motion";
import "./bio.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Bio() {
  return (
    <div className = "bio-container">
      <motion.p className="about-me"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}>
        About Me: 
      </motion.p>

      <motion.p className="bio"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}>
        I'm a full-stack developer and AI enthusiast who builds intelligent applications across web and mobile. I work with microservice architectures, AI-integrated systems, and have experience in mobile development as well. Whether I'm designing distributed backends or integrating AI capabilities, I focus on creating scalable, practical solutions that solve real problems.
      </motion.p>
    </div>
  );
}
