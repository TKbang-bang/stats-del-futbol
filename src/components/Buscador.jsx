import React, { useContext } from "react";
import { useState } from "react";
import data from "../data/json/joga.json";
import Card from "./Card";

function Buscador() {
  const [txt, setTxt] = useState("");
  const [results, setResults] = useState([]);
  const [found, setFound] = useState(false);
  const [players, setPlayers] = useState(data);
  const [searched, setSearched] = useState(false);

  const handleChange = (e) => {
    setTxt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults([]);
    if (!txt || txt == "") {
      setSearched(false);
      return;
    } else {
      setSearched(true);
      let filtered = players.filter((player) =>
        player.name.toLocaleLowerCase().includes(txt.toLocaleLowerCase())
      );
      if (filtered.length < 1) {
        setFound(false);
      } else {
        setFound(true);
        setResults(filtered);
      }
    }
    setTxt("");
  };

  const handleId = (ms) => {
    giveId(ms);
  };

  return (
    <div className="buscador">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Buscar"
          type="text"
          value={txt}
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
      <div className="bus-res">
        {searched ? (
          <>
            {results.length > 0 ? (
              results.map((res) => {
                return <Card key={res.id} user={res} />;
              })
            ) : (
              <h1>Not found</h1>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Buscador;
