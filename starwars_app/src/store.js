import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Store() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/films/")
      
      .then(result => setData(result.data.results));
  }, []);
  console.log(data)
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item}>
            Title: {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}