import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const About = () => {
  const data = useSelector((state) => state.about);

  let navigate = useNavigate();
  return (
    <>
      <div className="contenedor-principal-about">
        <div className="texto-about">
          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
          <p>{data.description}</p>

          <button onClick={() => navigate("/")}>To Go Home</button>
          {/* Tambien puedo usar navigate -1 para volver una pagina atras */}
          <button onClick={() => navigate(-1)}>
            To Go Home con navigate -1
          </button>
        </div>
        <div className="tapiz-welcome"></div>
      </div>
    </>
  );
};

export default About;
