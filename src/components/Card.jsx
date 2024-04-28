import React from "react";
import { Link } from "react-router-dom";

function Card({ user, id, scrollfm }) {
  const handleClick = () => {
    id(user.id);
    scrollfm(window.scrollY);
  };

  return (
    <div className="card">
      <img src={user.img} alt="" />
      <h2>{user.name}</h2>
      <p>{user.state ? user.team : "Retirado"}</p>
      <Link onClick={handleClick} to="/info">
        Saber más
      </Link>
    </div>
  );
}

export default Card;
