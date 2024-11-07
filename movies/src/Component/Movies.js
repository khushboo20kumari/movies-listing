

import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, TextField, Typography } from "@mui/material";

import MovieRow from './MovieRow';
import Like from "./Like";
import DeleteMovieRow from './DeleteMovieRow';
import Dislike from './Dislike';

const Movies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  const fetchMoviesData = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=89eef3426d167c3c8145a257ebe68357&")
      .then(res => res.json())
      .then(data => {
        const moviesWithLikesDislikes = data.results.map((movie) => ({
          ...movie,
          like: 0,
        }));
        setAllMovies(moviesWithLikesDislikes); // Set original movies
        setMovies(moviesWithLikesDislikes); // Also set filtered movies initially
      })
      .catch((error) => console.error('Error fetching movies:', error));
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);

  const handleLike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, like: movie.like + 1 } : movie
      )
    );
  };

  const handleDisLike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, like: movie.like - 1 } : movie
      )
    );
  };

  const handleDelete = (id) => {
    const updatedMovies = movies.filter(item => item.id !== id);
    setMovies(updatedMovies);
    setAllMovies(updatedMovies); // Update allMovies to keep them in sync
  };

  const handleSearchChange = (e) => {
    const title = e.target.value;
    setSearchTitle(title);
    const filteredMovies = allMovies.filter((item) =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
    setMovies(filteredMovies); // Only update displayed movies
  };

  return (
    <Box sx={{ background: "#0E0E15" ,m:0}}>
      <hr style={{ border: "3px solid red" }}></hr>
      <Container maxWidth="lg" sx={{ background: "#0E0E15",p:{lg:8,sm:5}}}>
        <TextField
          value={searchTitle}
          onChange={handleSearchChange}
          fullWidth
          label="Search by title..."
          color="secondary"
          style={{ background: "white" }}
        />
        {movies.map((movie) => (
          <div key={movie.id}>
            <Grid container sx={{ mt: 3 }}>
              <Grid item xs={12} sx={12} lg={9} >
                <MovieRow moviesRowData={movie}></MovieRow>
              </Grid>
              <Grid item xs={12} sx={12} lg={3} >
                <Grid container>

                  <Grid item xs={8} sx={8} lg={8} >

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2,ml:4, mt: {lg:20,sm:0} }}>
                      <Like onLike={() => handleLike(movie.id)} sx={{ mt: 1 }} />
                      <Typography sx={{fontSize:"30px",color:"white"}}>{movie.like}</Typography>
                      <Dislike onDisike={() => handleDisLike(movie.id)} />
                    </Box>
                  </Grid>
                  <Grid item xs={4} sx={4} lg={4}>
                    <DeleteMovieRow onDelete={() => handleDelete(movie.id)} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <hr style={{ border: "1px solid white" }}></hr>

          </div>
        ))}
      </Container>
    </Box>
  );
};

export default Movies;
