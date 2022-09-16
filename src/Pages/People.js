import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader"; 

export const People = () => {
    const [people, setPeople] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getPeople = async () => {
            const response = await fetch("https://swapi.dev/api/people")
            const responseJson = await response.json()
            setPeople(responseJson.results)
            setLoading(false)

        }
        getPeople()
    }, [])
    return (
        <div className="">
            <h1 className="text-center font-bold text-4xl mt-10">People</h1>
            <div className="flex justify-center mt-10">
            <table className="border-separate border-spacing-2 border border-slate-500 bg-slate-100">
                <thead>
                    <tr>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2">#</th>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2">Name</th>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2">Height</th>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2">Hair Color</th>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, index) => (
                        <tr className="">
                            <th>{index + 1}</th>
                            <td className="border border-slate-700">{person.name}</td>
                            <td className="border border-slate-700">{person.height}</td>
                            <td className="border border-slate-700">{person.hair_color}</td>
                            <td className="border border-slate-700">
                                <Link to={`/people/${index + 1}`}>Details</Link>
                            </td>
                        </tr>
                    ))}
                    { loading ? <Loader/> : ""}
                </tbody>
            </table>
            </div>
        </div>
    )
}