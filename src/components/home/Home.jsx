import React from "react";
import Gallery from "../gallery/Gallery";

const Home = () => {
  return (
    <div className="mainhome">
      <div
        id="carouselExampleIndicators"
        className="carousel slide    bg-body rounded border border-primary border-5 "
        data-bs-ride="carousel"
        style={{
          width: "62vw",
          margin: "38px auto",
          height: "450px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc20b813-98ef-4429-9dcf-ec14def1cd22/dex7xpw-6c9288a5-48d7-4b35-b46f-0bf223a87b70.png/v1/fill/w_1192,h_670,q_70,strp/ash_kanto_team_my_way__dream_sprites__by_arlonakai140_dex7xpw-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZmMyMGI4MTMtOThlZi00NDI5LTlkY2YtZWMxNGRlZjFjZDIyXC9kZXg3eHB3LTZjOTI4OGE1LTQ4ZDctNGIzNS1iNDZmLTBiZjIyM2E4N2I3MC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Wbdc6aWFEzq2eqio4ae3L1KSOJ7OxID6wuGEgo1BALo"
              className="d-block w-90 shadow border border-white border-5 rounded  bg-body rounded"
              alt="Error"
              style={{ margin: "0px auto", height: "420px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpaperaccess.com/full/246978.jpg"
              className="d-block w-90 shadow border border-white border-5 rounded   bg-body rounded"
              alt="Error"
              style={{ margin: "0px auto", height: "420px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.theanimedaily.com/wp-content/uploads/2021/04/pokemon_entire_team_1_by_chalcids-d5xayvl.jpg"
              className="d-block w-90 shadow border border-white border-5 rounded  bg-body rounded"
              alt="Error"
              style={{ margin: "0px auto", height: "420px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ytimg.com/vi/ApClAKcgm-g/maxresdefault.jpg"
              className="d-block w-90 shadow border border-white border-5 rounded bg-body rounded"
              alt="Error"
              style={{ margin: "0px auto", height: "420px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Gallery />
    </div>
  );
};

export default Home;
