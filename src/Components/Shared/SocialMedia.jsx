import { MY_ACCOUNTS, socialMediaComponent } from "src/Data/variables";
import codeWarsIcon from "src/Images/codewars-icon.webp";
import s from "./SocialMedia.module.scss";
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMedia = () => {
  return (
    <nav className={s.socialNav}>
      <ul>
        {socialMediaComponent?.map((data, index) => (
          <SocialMediaIcon key={index} data={data} />
        ))}

        <li>
          <a
            href={MY_ACCOUNTS.codeWars}
            title="codeWars profile"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={codeWarsIcon}
              alt="codeWars icon"
              decoding="async"
              loading="lazy"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default SocialMedia;
