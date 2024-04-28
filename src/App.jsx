import React, { createContext, useState } from "react";
import Nav from "./components/Nav";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Info from "./pages/Info";
import Footer from "./components/Footer";
import data from "./data/json/joga.json";
export const UserContext = createContext();

function App() {
  const [value, SetValue] = useState({});
  const [scrollVal, setScrollVal] = useState(0);
  const [change, setChange] = useState(false);
  const [user, setUser] = useState({});

  const handleSend = (id) => {
    let temp = data.filter((dt) => dt.id == id);
    setUser(temp);
  };

  const handleSendScroll = () => {
    window.scrollTo(0, scrollVal);
  };

  const handleChange = () => {
    setChange(!change);
    // console.log(change);
  };

  return (
    <UserContext.Provider value={user}>
      <header>
        <h1>
          <Link to="/">
            Stats del <span>Fútbol</span>
          </Link>
        </h1>
        <div className="menu">
          <span
            onClick={handleChange}
            className={
              change
                ? "menu-bari material-symbols-outlined"
                : "menu-bar material-symbols-outlined"
            }
          >
            menu
          </span>
          <span
            onClick={handleChange}
            className={
              change
                ? "close material-symbols-outlined"
                : "closei material-symbols-outlined"
            }
          >
            close
          </span>
        </div>
      </header>
      <Nav res={change} />
      <Routes>
        <Route
          path="/"
          element={
            <Home setScroll={(val) => setScrollVal(val)} senId={handleSend} />
          }
        />
        <Route path="/historia" element={<Historia />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/info"
          element={<Info send={handleSendScroll} user={value} />}
        />
      </Routes>

      <Footer />
    </UserContext.Provider>
  );
}

export default App;
