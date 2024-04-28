import React, { useContext, useState } from "react";
import data from "../data/json/joga.json";
import Card from "../components/Card";
import "../index.css";
import Buscador from "../components/Buscador";

function Home({ senId, setScroll }) {
  const [users, setUsers] = useState(data);

  const handleId = (id) => {
    senId(id);
  };

  const handleScroll = (val) => {
    setScroll(val);
  };

  return (
    <>
      <main className="main">
        {users.map((user) => {
          return (
            <Card
              scrollfm={handleScroll}
              id={handleId}
              key={user.id}
              user={user}
            />
          );
        })}
      </main>
    </>
  );
}

export default Home;
