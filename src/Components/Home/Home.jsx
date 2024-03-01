import Repos from "../Repos/Repos";
import Introduction from "./Introduction";

const Home = () => {
  return (
    <main>
      <div className="container">
        <Introduction />

        <Repos />
      </div>
    </main>
  );
};
export default Home;
