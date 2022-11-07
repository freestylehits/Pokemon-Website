import React from "react";
import Navbar from "./Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Gallery from "./gallery/Gallery";
import axios from "axios";
import { useEffect, useState } from "react";
import Storedata from "./data";
import Info from "./info/Info";
import background from "./bgimage.jpeg";

const App = () => {
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetchdata();
  }, [url]);

  const fetchdata = async () => {
    let a = await axios.get(url);
    // console.log(a);
    newa(a?.data?.results);
    setPrevious(a?.data?.previous);
    setNext(a?.data?.next);
  };

  const newa = (data) => {
    data.map(async (item) => {
      var newUrl = await axios.get(item.url);
      setPokemon((last) => {
        last = [...last, newUrl.data];
        return last;
      });
    });
  };

  return (
    <div
      style={{
        width: "auto",
        margin: "0px auto",
        height: "auto",
        backgroundImage: `url("${background}")`,
      }}
    >
      <Storedata.Provider
        value={{ pokemon, setPokemon, setUrl, next, previous }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/info/:id" element={<Info />}></Route>
          </Routes>
        </BrowserRouter>
      </Storedata.Provider>
    </div>
  );
};

export default App;
