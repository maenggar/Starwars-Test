import React, { useEffect, useState } from "react";
import axios from "axios";
import BaseUrl from "./config/BaseUrl"

export default function Store() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    axios
      .get(BaseUrl.API+"films/") 
      .then(result => setFilm(result.data.results));
  }, []);
  return (
    <div>
      <ul>
        {film.map((item) => (
          <li key={item}>
            Title: {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}