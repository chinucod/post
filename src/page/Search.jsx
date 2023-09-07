import React from 'react'
import Home from "./Home"

function Search(filteredTitle) {
    const Searched = filteredTitle.map(item=> <Home item={item}/>); 
      return (
        <div>{Searched}</div>
      );
    }


export default Search