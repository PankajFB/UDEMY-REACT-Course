import React from "react";
import { useState, useEffect } from "react";
import SearchBox from "./components/search";

function CardList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

//   function to make the serach feature
const filterName =  users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setUsers(user));
  }, []);

  console.log(search);

  return (
    <div>
      {/* <input
        type="search"
        placeholder="search name"
        onChange={(e) => setSearch(e.target.value)}
      ></input> */}

<SearchBox placeholder="Search Name" var={search} changeHandler={(e) => setSearch(e.target.value)} ></SearchBox>

      <div className="container">
        {filterName.map((user) => {
        return <div className="box">
            <span />
            <div className="content">
              <h2>{user.name}</h2>
              <p>Email : {user.email}</p>
              <p>Id : {user.id}</p>
              <a href="#">{user.username}</a>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}

export default CardList;
