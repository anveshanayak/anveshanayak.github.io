import {motion} from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    return(
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>Anvesha Nayak - Portfolio</motion.span>
                <motion.div className="social" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                    <a href="https://github.com/anveshanayak"><img src="/github-white.png" alt="GitHub"></img></a>
                    <a href="https://www.linkedin.com/in/anveshanayak/"><img src="/linkedin-white.png" alt="LinkedIn"></img></a>
                    <a href="mailto:anveshalnayak@gmail.com"><img src="/envelope.png" alt="Email"></img></a>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar