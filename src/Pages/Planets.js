import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader"; 

export const Planets = () => {
    const [planets, setPlanets] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getPlanets = async () => {
            const response = await fetch("https://swapi.dev/api/planets")
            const responseJson = await response.json()
            setPlanets(responseJson.results)
            setLoading(false)

        }
        getPlanets()
    }, [])
    return (
        <div className="">
            <h1 className="text-center font-bold text-4xl mt-10">Planets</h1>
            <div className="flex justify-center mt-10">
            <table className="border-separate border-spacing-2 border border-slate-500 bg-slate-100">
                <thead>
                    <tr>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2">#</th>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2">Name</th>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2">Climate</th>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2">population</th>
                        <th className="border border-slate-600 text-white bg-gray-800 text-center p-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {planets.map((planets, index) => (
                        <tr className="">
                            <th>{index + 1}</th>
                            <td className="border border-slate-700">{planets.name}</td>
                            <td className="border border-slate-700">{planets.climate}</td>
                            <td className="border border-slate-700">{planets.population}</td>
                            <td className="border border-slate-700">
                                <Link to={`/planets/${index + 1}`}>Details</Link>
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