import SocialMedia from "../Shared/SocialMedia";
import CopyRights from "./CopyRights";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <CopyRights />
      <SocialMedia />
    </footer>
  );
};

export default Footer;
