import { Box, TextField, Button, Chip } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ChangeEvent, useContext, useState } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import { ThemeContext } from '../contexts/ThemeContext'
import { PropTypes } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => createStyles({
    movieInput: {
        marginRight: '5px',  
    },
    movieChip: {
        fontSize: '2rem',
        padding: '30px 10px',
        margin: '5px'
    }
}))
const Movies = () => {
    // classes
const classes = useStyles()

    // state
const [movie, setMovie] = useState('')
const onMovieInputChange = (event: ChangeEvent<HTMLInputElement>) => setMovie(event.target.value)
   // context
const {theme} = useContext(ThemeContext)
const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>
const {movies, addMovie, deleteMovie} = useContext(MovieContext)
    return (
        <div>
            <Box display = 'flex' justifyContent = 'center' my = {5}>
                <TextField 
                label = 'Your Favourite Movie...' 
                variant = 'outlined'
                className = {classes.movieInput}
                onChange = {onMovieInputChange}
                value = {movie} />

            <Button 
            variant = 'contained' color = 'primary'
            onClick = {() => {
                    addMovie(movie)
                    setMovie('');
            }}>
                Add
            </Button>
            </Box>

            <Box display = 'flex' justifyContent = 'center' flexWrap = 'wrap' mx ={5}>
                {movies.map(movie => (
                    <Chip key = {movie.id} label = {movie.title} 
                    clickable color = {chipTheme} className = {classes.movieChip}
                    onDelete = {deleteMovie.bind(this, movie.id)}/>
                ))} 
            </Box> 
        </div>
    )
}

export default Movies
