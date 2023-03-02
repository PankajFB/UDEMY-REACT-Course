import React from "react";
import { useState, useEffect } from "react";

function UserData() {
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
        return <h3>Name is : {user.name} and the Email : {user.email} </h3>;
      })}
    </div>
  );
}

export default UserData;
