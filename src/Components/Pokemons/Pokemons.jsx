
    import { useState, useEffect } from "react";
    import Pokemon from "./Pokemon";
    function Pokemons() {
        const [error, setError] = useState(null);
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
      
        useEffect(() => {
          fetch("https://pokeapi.co/api/v2/pokemon")
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setItems(result.results);
              },
              
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            )
        }, [])
      
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
                <Pokemon items = {items}/>
              {/* {items.map(item => (
                <li key={item.id}>
                  {item.name} {item.url}
                </li>
              ))} */}
            </ul>
          );
        }
      }
    
      export default Pokemons;