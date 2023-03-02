import React from "react";

export default function DynCont() {
  const users = [
    {
      name: "Pankaj",
    },
    { name: "elon musk" },
    { name: "Bill gates" },
    { name: "Nikki singh" },
    { name: "My love is here" },
  ];

  return <div className="App">
    {users.map(user =>{
        return <h1>{user.name}</h1>
    })}
  </div>;
}
