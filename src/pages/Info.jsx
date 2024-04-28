import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

function Info({ send }) {
  const user = useContext(UserContext);

  let reg = "<< Rgeresar";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    send(true);
  };

  return (
    <>
      {user.map((data) => {
        return (
          <div className="info-main" key={data.id}>
            <Link onClick={handleClick} to="/">
              {reg}
            </Link>
            <div className="info-up">
              <img src={data.img2} alt="" />
              <div className="info">
                <h2>{data.name}</h2>
                <p>{data.age + " años"}</p>
                <p>{data.country}</p>
                <p>
                  {data.state ? (
                    data.team
                  ) : (
                    <span className="ret">Retirado</span>
                  )}
                </p>
                <p>{data.titles + " Títulos"}</p>
                <div className="trofeos">
                  <p>Trofeos con clubes</p>
                  <ul>
                    {data.trof.clubs.map((trof) => (
                      <li key={crypto.randomUUID()}>{trof}</li>
                    ))}
                  </ul>

                  <p>Trofeos con selección</p>
                  <ul>
                    {data.trof.selection.map((trof) => (
                      <li key={crypto.randomUUID()}>{trof}</li>
                    ))}
                  </ul>
                </div>
                <div className="bio">
                  <p>{data.bio}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Info;
