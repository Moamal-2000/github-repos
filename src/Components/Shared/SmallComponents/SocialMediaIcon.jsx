import SvgIcon from "./SvgIcon";

const SocialMediaIcon = ({ data }) => {
  const { platform, accountLink } = data;

  return (
    <li>
      <a
        href={accountLink}
        title={`${platform} profile`}
        target="_blank"
        rel="noreferrer"
      >
        <SvgIcon name={platform} />
      </a>
    </li>
  );
};
export default SocialMediaIcon;
