import Introduction from "./Introduction/Introduction";
import Repos from "./Repos/Repos";

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
