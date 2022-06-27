import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [peopleData, setPeopleData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.results);
          setIsLoaded(true);
          setPeopleData(result.results);
        },
        (error) => {
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>{error.message} </div>;
  } else if (isLoaded === false) {
    return <div>Loading.... </div>;
  } else
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        {peopleData.map((item, key) => (
          <p>{item.email}</p>
        ))}
      </div>
    );
}
