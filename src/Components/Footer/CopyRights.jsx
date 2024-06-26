import { myAccounts } from "src/Data/variables";
import s from "./CopyRights.module.scss";

const CopyRights = () => {
  const vscodeLink = "https://code.visualstudio.com";

  return (
    <p className={s.copyright}>
      Coded in
      <a href={vscodeLink} target="_blank" rel="noreferrer">
        Visual studio code
      </a>
      by
      <a href={myAccounts.linkedin} target="_blank" rel="noreferrer">
        Moamal Alaa.
      </a>
    </p>
  );
};
export default CopyRights;
