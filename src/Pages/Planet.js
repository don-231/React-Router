import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

export const Planet = () => {
    const { id } = useParams()
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        const getPlanet = async () =>{
            const response = await fetch(`https://swapi.dev/api/planets/${id}`)
            const responseJson = await response.json()
            setPlanet(responseJson)
            
        }
        getPlanet()
    },[id])
    return( 
      <div className="ml-56">
          <h3 className="text-center font-bold text-4xl">Planet</h3>
            <p>Details of each Planet</p>
            <hr /> 
            <h4>{planet.name}</h4>
            <p>Climate: {planet.climate}</p>
            <p>Population: {planet.population}</p>
              </div>         
        
    )
}