import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Storedata from "../data";
const Navbar = () => {
  const { pokemon, setPokemon } = useContext(Storedata);
  const [filteredData, setFilteredData] = useState("");
  // const [newdata, setnewdata] = useState(pokemon);

  const handlesearch = (event) => {
    event.preventDefault();
    let a = pokemon.filter((item) => {
      const listItem = `${item.name.toLowerCase()}`;
      
      if (listItem === filteredData) {
        return item.name;
      }
    });
    setPokemon(a);
  };
  return (
    <div className="mainnav">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light "
        style={{
          border: "5px solid",
          borderColor: "#2f4789",
          borderRadius: "25px",
        }}
      >
        <div className="container-fluid">
          <img
            style={{ height: "45px" }}
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9038defb-5494-46f2-a66d-e84678fbfa33/d83jgkl-7486af7c-2689-4de5-845e-c9515c0ddbe0.png/v1/fill/w_800,h_310,strp/pokemon_png_pack_by_kaylor2013_d83jgkl-fullview.png"
            alt="error"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/">
                <li className="nav-item">
                  <a
                    className="nav-link active text-dark rounded-pill"
                    style={{
                      backgroundColor: "#ffd40a",
                      marginLeft: "5px",
                      border: "3px solid",
                      borderColor: "#2f4789",
                      fontWeight: "bold",
                    }}
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/gallery">
                <li className="nav-item">
                  <a
                    className="nav-link text-dark rounded-pill"
                    style={{
                      backgroundColor: "#ffd40a",
                      marginLeft: "5px",
                      border: "3px solid",
                      borderColor: "#2f4789",
                      fontWeight: "bold",
                    }}
                    href="#"
                  >
                    Pok-Gallery
                  </a>
                </li>
              </Link>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => setFilteredData(event.target.value)}
              />
              <button
                className="btn btn-outline-success text-dark rounded-pill"
                style={{
                  backgroundColor: "#ffd40a",
                  marginLeft: "5px",
                  border: "3px solid",
                  borderColor: "#2f4789",
                  fontWeight: "bold",
                }}
                type="submit"
                onClick={handlesearch}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
{
  /* <nav
        className="navbar navbar-light bg-light shadow-sm  bg-body rounded border border-primary border-5 rounded-pill"
        style={{
          backgroundImage: `url(${background})`,
          height: "71px",
          display: "flex",
          justifyContent: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <div className="container-fluid ">
          <img
            style={{ height: "45px" }}
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9038defb-5494-46f2-a66d-e84678fbfa33/d83jgkl-7486af7c-2689-4de5-845e-c9515c0ddbe0.png/v1/fill/w_800,h_310,strp/pokemon_png_pack_by_kaylor2013_d83jgkl-fullview.png"
            alt="error"
          />

          <form className="d-flex">
            <div className="d-flex ">
              <input
                className="rounded-pill"
                style={{
                  height: "45px",
                  marginRight: "6px",
                  paddingLeft: "10px",
                  border: "1px solid",
                }}
                type="search"
                placeholder="search"
              />
              <button
                style={{
                  backgroundColor: "#ffd40a",
                  borderColor: "#2f4789",
                }}
                className="btn btn-outline-success text-dark  border-4 rounded-pill"
                type="submit"
                
              >
                Search
              </button>
            </div>
            <div className="container-fluid justify-content-start">
              <div className="">
               
               
              </div>
            </div>
          </form>
        </div>
      </nav> */
}
