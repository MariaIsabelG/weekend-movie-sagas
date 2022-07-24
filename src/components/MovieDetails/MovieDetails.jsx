import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function MovieDetails (){
// calling on the genres store to get the db data
    const details = useSelector( store => store.genres)
 
    return (
        <div>
            <h1 className="title-text" >Movie Details</h1>
                <div className="item-container">
                    {/* rendering only the first index to avoid duplication */}
                    <img className="images-item" src={details[0].poster}/>
                    <h3>Title:</h3> <p>{details[0].title}</p>
                    <h3>Description:</h3> <p className="description">{details[0].description}</p>
                    <h3>Genres:</h3>
                    {/* looping through the array as we need all genres */}
                    {details.map((detail =>{
                        return (<li>{detail.name}</li>)
                    })
                    )}
                </div>
        </div> 
    )
}; 


export default MovieDetails;