import codeWarsIcon from "src/Images/codewars-icon.webp";
import SvgIcon from "../Shared/SvgIcon";
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
        <a
          href="https://www.linkedin.com/in/moamal-alaa-a4bb15237"
          target="_blank"
          rel="noreferrer"
        >
          Moamal Alaa.
        </a>
      </p>

      <nav className={s.socialNav}>
        <ul>
          <li>
            <a
              href="https://github.com/Moamal-2000"
              title="github profile"
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcon name="github" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/moamal-alaa-a4bb15237"
              title="linkedin profile"
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcon name="linkedin" />
            </a>
          </li>

          <li>
            <a
              href="https://codepen.io/moamal-2000"
              title="codepen profile"
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcon name="codePen" />
            </a>
          </li>

          <li>
            <a
              href="https://www.codewars.com/users/Moamal-2000"
              title="codewars profile"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={codeWarsIcon}
                alt="codewars icon"
                decoding="async"
                loading="lazy"
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/MoamalAlaa109"
              title="facebook profile"
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcon name="facebook" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
