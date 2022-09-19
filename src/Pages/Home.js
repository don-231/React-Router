import { Link } from "react-router-dom"
export const Home = () => {
    return (
        <div className="App">
            <h1 className="text-center font-bold tracking-wider text-4xl mt-10">Welcome</h1>
            <div className="block">
                <div className="flex justify-center">
                    <Link className="mt-5 bg-sky-400 p-2 hover: bg-sky-300 text-white rounded-md" to="/people">
                        StarWars People
                    </Link>
                </div>
                <div className="flex justify-center">
                    <Link className="mt-5 bg-sky-400 p-2 hover: bg-sky-300 text-white rounded-md" to="/starships">
                        Starships
                    </Link>
                </div>
                <div className="flex justify-center">
                    <Link className="mt-5 bg-sky-400 p-2 hover: bg-sky-300 text-white rounded-md" to="/planets">
                        Starwars Planets
                    </Link>
                </div>
            </div>
        </div>
    )
}