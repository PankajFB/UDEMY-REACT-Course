import React from 'react'

function SearchBox(props) {
    
    
  return (
    <div>
        <input
        type="search"
        placeholder={props.placeholder}
        onChange={props.changeHandler}
      ></input>
    </div>
  )
}

export default SearchBox