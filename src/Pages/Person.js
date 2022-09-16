import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

export const Person = () => {
    const { id } = useParams()
    const [person, setPerson] = useState({})

    useEffect(() => {
        const getPerson = async () =>{
            const response = await fetch(`https://swapi.dev/api/people/${id}`)
            const responseJson = await response.json()
            setPerson(responseJson)
            
        }
        getPerson()
    },[id])
    return( 
      <div className="ml-56">
          <h3 className="text-center font-bold text-4xl">Person</h3>
            <p>Details of each StarWars Person</p>
            <hr /> 
            <h4>{person.name}</h4>
            <p>Height: {person.height}</p>
            <p>Hair: {person.hair_color}</p>  
      </div>         
        
    )
}
