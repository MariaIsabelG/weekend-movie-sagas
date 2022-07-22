import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function MovieItems ({movie}){

    const history = useHistory();
    const dispatch = useDispatch();


    const movieDetails = () => {
        dispatch({ type: 'FETCH_DETAILS', payload: movie.id });
        history.push('/details')
        console.log( 'This is the id chosen:', movie.id)
    }

    return (
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img onClick={movieDetails} src={movie.poster} alt={movie.title}/>
        </div>
    )
}

export default MovieItems;