import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function MovieDetails (){

    const details = useSelector( (store) => store.genres)

    useEffect(() => {
        console.log ( 'These are the details from the movie:', details)
    }, []);
    

    return (
        <div>
        <h1>Movie Details</h1>

        <img src={details[0].poster}/>
        <h3>Title:</h3> <p>{details[0].title}</p>
        <h3>Description:</h3> <p>{details[0].description}</p>
        <h3>Genres:</h3>
        {details.map(( detail =>{
            return ( <p>{detail.name}</p>)
        })
        )}

        </div>
    )
};


export default MovieDetails;