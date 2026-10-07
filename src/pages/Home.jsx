import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import Loading from "../components/Loading";

function Home() {
  return (
    <>
      <Navbar />

      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold text-green-600">
          What2Cook 🍳
        </h1>

        <SearchBox />

        <Loading />
      </div>
    </>
  );
}

export default Home;