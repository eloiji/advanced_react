import React from "react";

function FetchingData() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const inlineStyle = {
    padding: "40px",
    width: "320px",
    margin: "8px auto",
    border: "1px solid #ccc",
  };

  return Object.keys(user).length > 0 ? (
    <div style={inlineStyle}>
      <h1>Customer data</h1>
      <h2>Name:{user.name.first}</h2>
      <img src={user.picture.large} alt="" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default FetchingData;
