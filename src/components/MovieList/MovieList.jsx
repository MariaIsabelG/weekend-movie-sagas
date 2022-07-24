import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItems from '../MovieItem/MovieItem';
import './MovieList.css';


function MovieList() {

    const dispatch = useDispatch();
// calling on the movies store
    const movies = useSelector(store => store.movies);

// getting all the movies in the db at page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);



    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {/* looping through movies array and sending a single movie as a prop */}
                {movies.map(movie => {
                    return (<MovieItems movie={movie} key={movie.id}/>)
                })}
            </section>
        </main>

    );
}

export default MovieList;