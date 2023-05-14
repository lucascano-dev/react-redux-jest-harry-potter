import React from "react";
import imageCenter from "../../assets/images/welcome-center.png";
import "./Welcome.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cards from "../cards/Cards";
const Welcome = () => {
  const users = useSelector((state) => state.form.name);
  const email = useSelector((state) => state.form.email);
  const comment = useSelector((state) => state.form.comment);

  return (
    <>
      <div className="contenedor-principal-welcome">
        <div className="img-presentacion">
          <img src={imageCenter} alt="" />
        </div>
        <div className="tapiz-welcome"></div>
        <Link to={"/about"} className="btn">
          <button>To Go About</button>
        </Link>
        <div className="users-fans">
          <h1>Last Fan messages received</h1>
          <h3>Fan: {users}</h3>
          <h3>email: {email}</h3>
          <h3>Comment: {comment}</h3>
        </div>
      </div>

      <Cards />
    </>
  );
};

export default Welcome;
