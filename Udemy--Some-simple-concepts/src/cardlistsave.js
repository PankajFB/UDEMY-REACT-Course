import React from "react";
import { useState, useEffect } from "react";

function CardList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setUsers(user));
  }, []);

  console.log(search);

  return (
    <div>
      <input
        type="search"
        placeholder="search name"
        onChange={(e) => setSearch(e.target.value)}
      ></input>

      <div className="container">
        {users.map((user) => {
        return <div className="box">
            <span />
            <div className="content">
              <h2>{user.name}</h2>
              <p>Email : {user.email}</p>
              <p>Id : {user.id}</p>
              <a href="#">Read More</a>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}

export default CardList;
