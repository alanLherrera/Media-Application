import React, { useState, useEffect } from 'react'




function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch('/').then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  },[])

  return (
    <div>
      
      {(typeof backendData.media === 'undefined') ? (
        <p> Still Loading </p>
      ): (
        backendData.media.map((media, i ) => (
          <p key={i}>{media}</p>
        ))
      )}

    </div>
  );
}

export default App;
