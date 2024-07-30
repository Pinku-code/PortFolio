import styles from './HeroStyles.module.css';
import heroImg from '../../assets/DP.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.txt';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Abinash"
        />
        <div
          className={`${styles.colorMode} ${theme === 'dark' ? styles.on : ''}`}
          onClick={toggleTheme}
        >
          <div className={styles.colorModeCircle}></div>
        </div>
      </div>
      <div className={styles.info}>
        <h1>
          Abinash
        </h1>
        <h3>Software Developer</h3>
        <span>
          <a href="https://github.com/Pinku-code" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
            Experienced software developer<br/> skilled in the <i className="fab fa-leaf"></i> <b style={{color:"#009ff8"}}>MERN</b> stack.
        </p>
        <a href={CV} download>
          <button className={styles.hover} id="resume">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
