import { motion } from "framer-motion";
import "./skills.scss";

const SkillBadge = ({ label, color }) => {
  return (
    <motion.span className="skill-badge"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.08,
        backgroundColor: color.bg,
        color: color.text,
        borderColor: color.border,
        boxShadow: `0 0 18px ${color.glow}`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        display: "inline-block",
        padding: "6px 16px",
        borderRadius: "6px",
        border: "1px solid #2a2a3a",
        backgroundColor: "#12121c",
        color: "#8888aa",
        fontSize: "0.78rem",
        fontFamily: "'DM Mono', monospace",
        letterSpacing: "0.04em",
        cursor: "default",
        userSelect: "none",
        margin: "4px",
      }}
    >
      {label}
    </motion.span>
  );
}

export default SkillBadge;