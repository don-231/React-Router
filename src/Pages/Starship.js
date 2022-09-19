import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

export const Starship = () => {
    const { id } = useParams()
    const [starship, setStarship] = useState({})

    useEffect(() => {
        const getStarship = async () =>{
            const response = await fetch(`https://swapi.dev/api/starships/${id}`)
            const responseJson = await response.json()
            setStarship(responseJson)
            
        }
        getStarship()
    },[id])
    return( 
      <div className="ml-56">
          <h3 className="text-center font-bold text-4xl">Starship</h3>
            <p>Details of each Starships</p>
            <hr /> 
            <h4>{starship.name}</h4>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Cargo Capacicty: {starship.cargo_capacity}</p>
              </div>         
        
    )
}