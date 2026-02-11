import Bio from "./bio/Bio";
import Languages from "./skills/Languages";
import Softwares from "./skills/Softwares";
import ResumeButton from "./resumebutton/ResumeButton";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-wrapper">
        <Bio />
        <div className="divider">
        </div>
        <Languages />

        <Softwares />

        <div className="resumeButton">
        <ResumeButton />
        </div>
      </div>
    </div>
  );
}

export default About;
