import React from 'react';
import Card from './components/Card.js';
import Spinner from './components/Spinner.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Music() {
    const [data, setData] = useState([]);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    axios
      .get(
        'https://telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsulYD2akz.json'
      )
      .then((res) => {
        !search
          ? setData(res.data)
          : setData(res.data.filter((songs) => songs.singer === search));
      });
  }, [search]);
  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <h3 className="navbar-brand">Telugu music songs</h3>
          <form className="d-flex" onSubmit={onSubmit}>
            <input
              className="form-control me-2"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              aria-label="Search"
            />
            <input
              className="btn btn-outline-success"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </nav>

      {data.length >= 1 ? (
        <center>
          <Card songs={data} />
        </center>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Music
