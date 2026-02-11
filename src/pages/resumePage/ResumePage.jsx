import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./resumepage.scss";

const ResumePage = () => {
  const navigate = useNavigate();

  const RESUME_PDF = "/resume.pdf";

  return (
    <motion.div
      className="resume-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top bar */}
      <div className="resume-topbar">
        <motion.button
          className="back-btn"
          onClick={() => navigate(-1)}
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back
        </motion.button>

        <span className="resume-title">Resume</span>

        <motion.a
          href={RESUME_PDF}
          download="Resume.pdf"
          className="download-btn"
          whileHover={{ scale: 1.04, boxShadow: "0 0 22px rgba(99,102,241,0.4)" }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download
        </motion.a>
      </div>

      {/* PDF Viewer */}
      <motion.div
        className="resume-viewer"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <iframe
          src={`${RESUME_PDF}#toolbar=0&navpanes=0&scrollbar=0`}
          title="Resume"
          className="resume-iframe"
        />
      </motion.div>
    </motion.div>
  );
};

export default ResumePage;
