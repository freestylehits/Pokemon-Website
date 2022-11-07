import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./info.css";

const Info = () => {
  const [singledata, setsingledata] = useState([]);
  const [loading, setloading] = useState(false);
  const [type, settype] = useState([]);
  const [image, setimage] = useState();

  function clicked(data) {
    setimage(data);
  }
  const bgcolor = (name) => {
    switch (name) {
      case "grass":
        return "#33cc33";
      case "poison":
        return "purple";
      case "normal":
        return "#999966";
      case "fire":
        return "#ff6600";
      case "flying":
        return "#4f1fe0";
      case "fighting":
        return "#ff0000";
      case "electric":
        return "#ffff00";
      case "ground":
        return "#d4a72b";
      case "psychic":
        return "#f50a51";
      case "rock":
        return "#adad85";
      case "water":
        return "#00bfff";
      case "ice":
        return "#00ffff";
      case "bug":
        return "#b3c322";
      case "dragon":
        return "#ffcc00";
      case "ghost":
        return "#775da2";
      case "dark":
        return "#663300";
      case "steel":
        return "#666699";
      case "fairy":
        return "#da254c";
    }
  };
  const getcolor1 = (name) => {
    switch (name) {
      case "grass":
        return "#85e085";
      case "poison":
        return "#ff66ff";
      case "normal":
        return "#c2c2a3";
      case "fire":
        return "#ffa366";
      case "flying":
        return "#9578ed";
      case "fighting":
        return "#ff6666";
      case "electric":
        return "#ffff66";
      case "ground":
        return "#e5ca80";
      case "psychic":
        return "#f96c96";
      case "rock":
        return "#e0e0d1";
      case "water":
        return "#66d9ff";
      case "ice":
        return "#66ffff";
      case "bug":
        return "#dde87d";
      case "dragon":
        return "#ffe680";
      case "ghost":
        return "#bbaed0";
      case "dark":
        return "#e67300";
      case "steel":
        return "#a3a3c2";
      case "fairy":
        return "#e97c94";
    }
  };
  const getcolor = (name) => {
    switch (name) {
      case "grass":
        return "#33cc33";
      case "poison":
        return "purple";
      case "normal":
        return "#999966";
      case "fire":
        return "#ff6600";
      case "flying":
        return "#4f1fe0";
      case "fighting":
        return "#ff0000";
      case "electric":
        return "#ffff00";
      case "ground":
        return "#d4a72b";
      case "psychic":
        return "#f50a51";
      case "rock":
        return "#adad85";
      case "water":
        return "#00bfff";
      case "ice":
        return "#00ffff";
      case "bug":
        return "#b3c322";
      case "dragon":
        return "#ffcc00";
      case "ghost":
        return "#775da2";
      case "dark":
        return "#663300";
      case "steel":
        return "#666699";
      case "fairy":
        return "#da254c";
    }
  };
  // console.log(singledata?.sprites?.other?.home?.front_default);

  const { id } = useParams();
  useEffect(() => {
    fetchdata();
  }, []);

  const UI = () => {
    return (
      <div className="maininfo">
        <div
          style={{
            height: "82vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="infocontainer border-warning"
            style={{
              margin: "0px auto",
              backgroundColor: "white",
              width: "70.8%",
              borderRadius: "30px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              border: "7px solid",
              height: "auto",
              backgroundColor: getcolor1(type[0]?.type?.name),
            }}
          >
            <div
              className="uppercontent"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                margin: "0px auto",
              }}
            >
              <div
                className="innercontent"
                style={{
                  margin: "0 0 0 20px",
                }}
              >
                <img
                  style={{ height: "50px", margin: "-50px 0 0 0" }}
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9038defb-5494-46f2-a66d-e84678fbfa33/d83jgkl-7486af7c-2689-4de5-845e-c9515c0ddbe0.png/v1/fill/w_800,h_310,strp/pokemon_png_pack_by_kaylor2013_d83jgkl-fullview.png"
                  alt="error"
                />

                <div
                  style={{
                    margin: "0 0 0 30px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    backgroundColor: bgcolor(singledata?.types[0]?.type?.name),
                    padding: "5px 10px",

                    borderRadius: "20px",
                    width: "150%",

                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }}
                >
                  <p style={{ color: "white", textShadow: "1px 1px 0 #444" }}>
                    Name : {singledata?.name}
                  </p>
                  <p style={{ color: "white", textShadow: "1px 1px 0 #444" }}>
                    Type : {singledata?.types[0]?.type?.name}
                  </p>
                  <p style={{ color: "white", textShadow: "1px 1px 0 #444" }}>
                    Weight : {singledata?.weight}
                  </p>
                  <p style={{ color: "white", textShadow: "1px 1px 0 #444" }}>
                    Height : {singledata?.height}
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="mainlogo"
                  style={{
                    height: "250px",
                    margin: "-50px 0 0 130px",
                    width: "400px",
                    objectFit: "contain",
                  }}
                  src={image}
                  alt="error"
                />
              </div>
              <div
                style={{
                  width: "110%",
                  margin: "90px 20px 0 30px",
                  display: "flex",
                  flexDirection: "column",
                  height: "50px",
                }}
              >
                {type.map((item) => {
                  return (
                    <button
                      type="button"
                      class="btn"
                      style={{
                        backgroundColor: getcolor(item?.type?.name),
                        color: "white",
                        textShadow: "1px 1px 0 #444",
                        boxShadow:
                          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                      }}
                    >
                      {item?.type?.name}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="lowercontent" style={{ display: "flex" }}>
              <div
                className="logo2"
                style={{
                  height: "150px",
                  weight: "150px",
                  backgroundColor: "white",
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    paddingBottom: "10px",
                    cursor: "pointer",
                    objectFit: "contain",
                  }}
                  src={singledata?.sprites?.other?.home?.front_default}
                  alt="error"
                  onClick={() =>
                    clicked(singledata?.sprites?.other?.home?.front_default)
                  }
                />
              </div>
              <div
                className="logo2"
                style={{
                  height: "150px",
                  weight: "150px",
                  backgroundColor: "white",
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    paddingBottom: "10px",
                    cursor: "pointer",
                  }}
                  src={singledata?.sprites?.other?.home?.front_shiny}
                  alt="error"
                  onClick={() =>
                    clicked(singledata?.sprites?.other?.home?.front_shiny)
                  }
                />
              </div>
              <div
                className="logo2"
                style={{
                  height: "150px",
                  weight: "150px",
                  backgroundColor: "white",
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    paddingBottom: "10px",
                    cursor: "pointer",
                  }}
                  src={
                    singledata?.sprites?.other?.["official-artwork"]?.[
                      "front_default"
                    ]
                  }
                  alt="error"
                  onClick={() =>
                    clicked(
                      singledata?.sprites?.other?.["official-artwork"]?.[
                        "front_default"
                      ]
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const fetchdata = async () => {
    let info = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    setsingledata(info.data);
    setloading(true);
    settype(info.data.types);
    setimage(info?.data?.sprites?.other?.dream_world?.front_default);
  };
  return <div>{loading ? <UI /> : <div>loading</div>}</div>;
};

export default Info;
