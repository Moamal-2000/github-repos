import { myAccounts } from "src/Data/variables";
import SocialMedia from "../Shared/SocialMedia";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p className={s.copyright}>
        Coded in
        <a
          href="https://code.visualstudio.com"
          target="_blank"
          rel="noreferrer"
        >
          Visual studio code
        </a>
        by
        <a href={myAccounts.linkedin} target="_blank" rel="noreferrer">
          Moamal Alaa.
        </a>
      </p>

      <nav className={s.socialNav}>
        <SocialMedia />
      </nav>
    </footer>
  );
};

export default Footer;
