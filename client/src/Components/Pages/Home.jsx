import React from 'react'
import { MovieCard } from '../UI/MovieCard'
import { SearchForm } from '../UI/SearchForm'

const Home = () => {
    const movies = [
        {
            id: 1,
            title: "Pirates of the Caribbean",
            release_date: "2009"
        },
        {
            id: 2,
            title: "John Wick",
            release_date: "2009"
        },
        {
            id: 3,
            title: "Rush Hour",
            release_date: "2009"
        },
        {
            id: 4,
            title: "The Incredibles",
            release_date: "2009"
        },
        {
            id: 5,
            title: "Terminator",
            release_date: "2006"
        },
        {
            id: 6,
            title: "The Matrix",
            release_date: "2000"
        },
    ]

  return (
    <>
        <SearchForm />
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {movies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
        </div>
    </>
  )
}

export default Home