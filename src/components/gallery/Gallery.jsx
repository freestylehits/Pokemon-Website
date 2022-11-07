import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Storedata from "../data";
import "./gallery.css";

const Gallery = () => {
  const { pokemon, setPokemon, setUrl, next, previous } = useContext(Storedata);

  function previousdata() {
    setPokemon([]);
    setUrl(previous);
  }
  function nextdata() {
    setPokemon([]);
    setUrl(next);
  }

  const onClickId = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div
        className="prev-next"
        style={{
          margin: "48px auto",
          width: "65%",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <div className="btn1">
          <button
            type="button"
            onClick={previousdata}
            className="btn btn-outline-success   border-4 rounded-pill"
            style={{
              backgroundColor: "#ffd40a",
              fontSize: "larger",
              color: "black",
              borderColor: "RGB(47 71 137)",
              fontSize: "28px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            Previous
          </button>
        </div>
        <div className="btn2">
          <button
            type="button"
            onClick={nextdata}
            className="btn btn-outline-success  border-4 rounded-pill"
            style={{
              backgroundColor: "#ffd40a",
              fontSize: "larger",
              color: "black",
              borderColor: "RGB(47 71 137)",
              fontSize: "28px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            Next
          </button>
        </div>
      </div>
      <div className="d-flex " style={{ flexDirection: "column" }}>
        <div className="row" style={{ width: "98vw" }}>
          {pokemon.map((item, index) => {
            return (
              <div className="col" key={index}>
                <div
                  className="card border border-warning border-5 rounded-pill"
                  style={{
                    width: "18rem",
                    margin: "40px auto",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }}
                >
                  <div class="hover01 ">
                    <div>
                      <figure>
                        <img
                          src={item?.sprites?.other?.dream_world?.front_default}
                          className="card-img-top"
                          style={{
                            height: "200px",
                            width: "100%",
                            margin: "-60px 0 0 0",
                          }}
                          alt="error"
                        />
                      </figure>
                    </div>
                  </div>

                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text " style={{ marginLeft: "15px" }}>
                      #{index + 1}
                    </p>
                    <Link to={`/info/${item.id}`}>
                      <button
                        onClick={() => onClickId(item.id)}
                        className="btn border-4 rounded-pill"
                        style={{
                          backgroundColor: "#ffd40a",
                          fontSize: "larger",
                          color: "black",
                          borderColor: "RGB(47 71 137)",
                          fontSize: "15px",
                        }}
                      >
                        About Me
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
