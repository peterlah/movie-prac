import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year",
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <img
                                src={movie.medium_cover_image}
                                alt={movie.title}
                            />
                            <h2>{movie.title}</h2>
                            <p>{movie.summary}</p>
                            <ul>
                                {movie.genres.map((g, index) => (
                                    <li key={index}>{g}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
