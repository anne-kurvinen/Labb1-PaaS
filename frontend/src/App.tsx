import { useState, useEffect } from 'react'
import './App.css'
import React from 'react';

function App() {
const [count, setCount] = useState<number>(1)


interface Movie {
  title: string,
  productionYear: number;
}

interface Actor {
  name: string,
  movie: string;
}
const [movies, setMovies] = useState<Movie[]>([]);
const [actors, setActors] = useState<Actor[]>([]);


  useEffect(() => {
    fetch('/api/movies') 
       .then((response) => response.json())
       .then((result: Movie[]) => {
     console.log(result); 
  })
  }, []);

  useEffect(() => {
    fetch('/api/actors') 
       .then((response) => response.json())
       .then((result: Actor[]) => {
     console.log(result); 
  })
  }, []);
  

  return (
    <>
      <div>
        
        
      </div>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App