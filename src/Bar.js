import React from "react";

function Bar () {
  const handleClick = () => {
    window.location.href = '/#'
  }
  return(
      <div>
        <div>
          Inside Bar
        </div>
        <button onClick={handleClick}>go back</button>
      </div>
  )
}

export default Bar