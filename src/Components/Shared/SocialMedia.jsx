import { MY_ACCOUNTS, socialMediaComponent } from "src/Data/variables";
import codeWarsIcon from "src/Images/codewars-icon.webp";
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMedia = () => {
  return (
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
  );
};
export default SocialMedia;
