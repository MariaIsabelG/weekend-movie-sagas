import { useHistory } from 'react-router-dom';

function MovieItems ({movie}){

    const history = useHistory();

    const movieDetails = () => {
        dispatch({ type: 'FETCH_DETAILS', payload: movie.id
                });
        history.push('/details')
    }

    return (
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img onClick={movieDetails} src={movie.poster} alt={movie.title}/>
        </div>
    )
}

export default MovieItems;