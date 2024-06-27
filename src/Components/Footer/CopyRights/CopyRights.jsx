import { GENERAL_LINKS, MY_ACCOUNTS } from "src/Data/variables";
import s from "./CopyRights.module.scss";

const CopyRights = () => {
  return (
    <p className={s.copyright}>
      Coded in
      <a href={GENERAL_LINKS.vscode} target="_blank" rel="noreferrer">
        Visual studio code
      </a>
      by
      <a href={MY_ACCOUNTS.linkedin} target="_blank" rel="noreferrer">
        Moamal Alaa.
      </a>
    </p>
  );
};
export default CopyRights;
