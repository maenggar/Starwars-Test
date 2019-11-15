import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Store() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(results => setData(results.data));
      console.log(data)
  }, []);

  return (
    
    <div>
      <ul>
        {data.map(result => (
          <li key={result.title}>
            {result.title}: {result.title}
          </li>
        ))}
      </ul>
    </div>
  );
}