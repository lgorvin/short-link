import { useState, useEffect } from "react";
import axios from "axios";
import ShortLink from "./components/ShortLink";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

const App = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [components, setComponents] = useState([]);

  const addComponent = () => {
    setComponents([...components, [shortUrl, url]]);
  };

  const fetcher = () => {
    try {
      setLoading(true);
      console.log(components.length);
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((res) => {
          setShortUrl(res.data.result.full_short_link);
          //console.log(res.data.result.full_short_link);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log("not working");
        });
    } catch (error) {
      setLoading(false);

      console.log("Used all API credits");
    }
  };

  useEffect(() => {
    addComponent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortUrl]);

  return (
    <main>
      <NavBar />
      <LandingPage />
      <div className="bgNav  mx-6 lg:mx-56 py-8 mt-5 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-4 gap-x-0 lg:ml-10">
          <div className=" flex justify-center lg:col-span-4 lg:mt-2">
            <input
              className="h-12 w-[280px] lg:w-[1250px]  rounded-lg  px-4   duration-700"
              placeholder="Shorten a link here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              // onKeyPress={onKeyUp}
              type="text"
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={fetcher}
              className="btnBlue px-[135px] lg:px-[30px] py-2 lg:mt-[3px] lg:mr-20 lg:ml-20 shadow-lg  rounded-lg"
            >
              <svg
                className="float-right lg:hidden  hover:scale-125 duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="14"
              >
                <path
                  fill="none"
                  stroke="#FFF"
                  stroke-width="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
              <h1 className="hidden lg:block text-white font-bold">
                Shorten it!
              </h1>
            </button>
          </div>
        </div>
      </div>

      {!loading ? (
        components
          .slice(1)
          .reverse()
          .map((e) => <ShortLink shorted={e} />)
      ) : (
        <h1 className="text-center mt-5 font-bold text-2xl">Loading...</h1>
      )}

      <Stats />

      <Footer />
    </main>
  );
};

export default App;
