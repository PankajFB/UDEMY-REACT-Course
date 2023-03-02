import React from "react";
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setUsers(user));
  }, []);

  console.log(users);

  return (
    <div>
      {users.map((user) => {
        return <h3> {user.name} </h3>;
      })}
    </div>
  );
}

export default Users;
