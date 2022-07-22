import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItems from '../MovieItem/MovieItem';
import './MovieList.css';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);



    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (<MovieItems movie={movie} key={movie.id}/>)
                })}
            </section>
        </main>

    );
}

export default MovieList;