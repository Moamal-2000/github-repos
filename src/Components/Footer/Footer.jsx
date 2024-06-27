import SocialMedia from "../Shared/SmallComponents/SocialMedia";
import CopyRights from "./CopyRights/CopyRights";
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
