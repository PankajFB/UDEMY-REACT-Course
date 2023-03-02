import React from 'react'
import { useState } from "react";

export default function ChangeText() {
    const [name, setName] = useState("pankaj");
  console.log(name);
  const changename = () => setName("elon musk");
  const changename2 = () => setName("bill gates");

  return (
    <div className="App">
    <p>{name}</p>
    <button onClick={changename}>change the name to elon musk</button>
    <button onClick={changename2}>change the name to bill gates</button>
  </div>
  )
}
