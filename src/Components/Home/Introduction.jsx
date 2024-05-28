import { MY_EMAIL } from "../../Data/variables";
import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <section className={styles.introduction} tabIndex="0">
      <h1>My GitHub Projects</h1>

      <p>
        Explore my GitHub projects below. Each project includes a link to its
        GitHub repository and a live link.
      </p>

      <p>
        Have a question, suggestion, or just want to say hi? Feel free to reach
        out to me via email at <a href={`mailto:${MY_EMAIL}`}>{MY_EMAIL}</a>.
      </p>
    </section>
  );
};
export default Introduction;
