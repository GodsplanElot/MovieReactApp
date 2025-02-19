import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {

    
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1999"},
        {id: 3, title: "The Matrix", release_date: "1998"},
    ];

    const handleSearch = () => {
        alert("i have submited")
    }

    return(
        <>
            <div className="home">
                <form onSubmit={handleSearch} className="search-form" >
                    <input type="text" placeholder="Search for movies..." className="search" />
                    <button type="submit" className="search-button">Search</button>
                </form>

                <div className="movie-grid">
                    {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
                </div>
            </div>
        </>
    )
}

export default Home