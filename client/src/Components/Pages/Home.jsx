import React from 'react'
import { MovieCard } from '../UI/MovieCard'
import { Input, Button } from "@material-tailwind/react";
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../../services/api';

const Home = () => {
    
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);  

    useEffect(() => {
        const loadPopularMovies = async () =>{
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }catch (err){
                console.log(err);
                setError("Failed to load movies...");
            }
            finally{
                setLoading(false);
            }
        }

        loadPopularMovies();
    },[]);

    const handleSearch  = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);
        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        }catch(err){
            console.log(err);
            setError("Failed to load movies...");
        }finally{
            setLoading(false);
        }
        setSearchQuery("");
    }

  return (
    <>
        <form onSubmit={handleSearch} action="" method='post' className='flex w-auto justify-center gap-2 my-10'>
            <Input 
              label='search for movies..'
              placeholder='searching for movies...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
                size="md"
                variant="gradient"
                color="black"
                className=" rounded"
                type="submit"
                
            >
                Search
            </Button>
        </form>

        {error ? (<div> {error} </div>) : null}

        {loading ? (<div> loading </div>) : ( 
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {movies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
            </div>
        )}
    </>
  )
}

export default Home