import { useSelector } from 'react-redux';




function MovieDetails (){

    const details = useSelector( store => store.genres)

    return (
        <p>Movie Details</p>




    )
}

export default MovieDetails;