import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
            )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
        console.log(json.data.movie);
    };

    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h1>{movie.title} - Detail</h1>
                    <img
                        src={movie.medium_cover_image}
                        alt={movie.title}
                    />
                    <p>{movie.summary}</p>
                    <h3>장르</h3>
                    <h3>출시년도 : {movie.year}</h3>
                    <ul>
                        {movie.genres.map((g, index) => (
                            <li key={index}>{g}</li>
                        ))}
                    </ul>
                    <h3>언어 : {movie.language}</h3>
                    <h3>평점 : {movie.rating}</h3>
                    <h3>상영시간 : {movie.runtime} 분</h3>
                    <p>{movie.description_full}</p>
                </div>
            )}
        </div>
    );
}

export default Detail;
