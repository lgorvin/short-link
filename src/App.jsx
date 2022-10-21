import { useState, useEffect } from "react";
import axios from "axios";
import ShortLink from "./components/ShortLink";

const App = () => {
  const [url, setUrl] = useState("");
  const [url2, setUrl2] = useState("");
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
  }, [shortUrl]);

  return (
    <div>
      <div className="bgShorter mx-6 py-8 mt-5 rounded-lg">
        <div className="flex justify-center ">
          <input
            className="h-12 w-[280px] lg:w-[550px]  rounded-lg  px-4   duration-700"
            placeholder="Shorten a link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            // onKeyPress={onKeyUp}
            type="text"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={fetcher}
            className="btnBlue px-[135px] py-4 shadow-lg  rounded-lg"
          >
            <svg
              className="float-right  hover:scale-125 duration-300"
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
          </button>
        </div>
      </div>

      {components.slice(1).map((e) => (
        <ShortLink shorted={e} />
      ))}
    </div>
  );
};

export default App;
