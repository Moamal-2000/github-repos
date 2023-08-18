import styles from "./_Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
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

      <nav className={styles.socialNav}>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/MoamalAlaa109"
              alt="Link facebook profile"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/moamal-alaa-a4bb15237"
              alt="Link linkedin profile"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>

          <li>
            <a
              href="https://codepen.io/moamal-2000"
              alt="Link codepen profile"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-codepen"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.codewars.com/users/Moamal-2000"
              alt="Link codewars profile"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../../images/codewars-icon.png")}
                alt="codewars icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

// Codewars => https://www.codewars.com/users/Moamal-2000
// Linkedin => https://www.linkedin.com/in/moamal-alaa-a4bb15237
// Facebook => https://www.facebook.com/MoamalAlaa109
// Codepen => https://codepen.io/moamal-2000
