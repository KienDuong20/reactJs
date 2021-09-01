import React from 'react';
import { Grid } from '@material-ui/core'
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import TopMovies from './components/TopMovies';
import ToggleThemeBtn from './components/ToggleThemeBtn';
import ProgressContextProvider from './contexts/ProgressContexts';
import ThemeContextProvider from './contexts/ThemeContext';
import MovieContextProvider from './contexts/MovieContext';
import AuthContextProvider from './contexts/AuthContext';
import TopMovieContextProvider from './contexts/TopMovieContext';
function App() {
  return (
    <div>
      <TopMovieContextProvider>
      <AuthContextProvider>
      <MovieContextProvider>
      <ThemeContextProvider>
      <ProgressContextProvider>
         <Navbar />
         <Grid container>
           <Grid item xs = {4}>
             <TopMovies />
           </Grid>
           <Grid item xs = {8}>
             <Movies />
           </Grid>
         </Grid>
         <ToggleThemeBtn />
      </ProgressContextProvider>
      </ThemeContextProvider>
      </MovieContextProvider>
      </AuthContextProvider>
      </TopMovieContextProvider>
    </div>
  );
}

export default App;
