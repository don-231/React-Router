import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader"; 

export const Starships = () => {
    const [starships, setStarships] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getStarships = async () => {
            const response = await fetch("https://swapi.dev/api/starships")
            const responseJson = await response.json()
            setStarships(responseJson.results)
            setLoading(false)

        }
        getStarships()
    }, [])
    return (
        <div className="">
            <h1 className="text-center font-bold text-4xl mt-10">Starships</h1>
            <div className="flex justify-center mt-10">
            <table className="border-separate border-spacing-2 border border-slate-500 bg-slate-100">
                <thead>
                    <tr>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2">#</th>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2">Name</th>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2">manufacturer</th>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2">Cargo Capacity</th>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {starships.map((starship, index) => (
                        <tr className="">
                            <th>{index + 1}</th>
                            <td className="border border-slate-700">{starship.name}</td>
                            <td className="border border-slate-700">{starship.manufacturer}</td>
                            <td className="border border-slate-700">{starship.cargo_capacity}</td>
                            <td className="border border-slate-700">
                                <Link to={`/starships/${index + 1}`}>Details</Link>
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