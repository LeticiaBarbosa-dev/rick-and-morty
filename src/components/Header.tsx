import logoImg from "../assets/images/logo.svg";
import githubImg from "../assets/images/github.svg";
import linkedinImg from "../assets/images/linkedin.svg";

import styles from './Header.module.css';

const github_url = "https://github.com/LeticiaBarbosa-dev";
const linkedin_url = "https://www.linkedin.com/in/leticia-pbs/";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Logo Rick and Morty" />
      <ul className="">
        <li>
          <a href={github_url} target="_blank">
            <img src={githubImg} alt="Logo do Github" />
          </a>
        </li>
        <li>
          <a href={linkedin_url} target="_blank">
            <img src={linkedinImg} alt="Logo do Linkedin" />
          </a>
        </li>
      </ul>
    </header>
  );
}
