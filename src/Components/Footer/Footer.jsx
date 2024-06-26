import SocialMedia from "../Shared/SocialMedia";
import CopyRights from "./CopyRights";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <CopyRights />

      <nav className={s.socialNav}>
        <SocialMedia />
      </nav>
    </footer>
  );
};

export default Footer;
