import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function MovieItems ({movie}){

    const history = useHistory();
    const dispatch = useDispatch();

// function to call on the saga to get all movie details from the db
    const movieDetails = () => {
        dispatch({ type: 'FETCH_DETAILS', payload: movie.id });
        // sending the user to the details page
        history.push('/details')
    }

    return (
        <div className="img-container" key={movie.id} >
            <h3 className="title-text">{movie.title}</h3>
            {/* calling the function on click */}
            <img className="images" onClick={movieDetails} src={movie.poster} alt={movie.title}/>
            
        </div>
    
    )
}

export default MovieItems;