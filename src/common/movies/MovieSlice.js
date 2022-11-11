import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi'



export const moviesAsyncFatch = createAsyncThunk('movies/moviesAsyncFatch', async (term) => {
    const responce = await MovieApi.get(`http://www.omdbapi.com/?i=tt3896198&apikey=1705af08&s=${term}&type=movie`)

    return responce.data
})


export const showAsyncFatch = createAsyncThunk('movies/showAsyncFatch', async (term) => {
    const responce = await MovieApi.get(`http://www.omdbapi.com/?i=tt3896198&apikey=1705af08&s=${term}&type=series`)

    return responce.data
})


export const movieOrShowAsyncFatch = createAsyncThunk('movies/movieOrShowAsyncFatch', async (id) => {
    const responce = await MovieApi.get(`http://www.omdbapi.com/?&i=${id}&apikey=1705af08&Plot=full`)

    return responce.data
})

const initialState = {
    movies: {},
    shows: {},
    selectedMOvieAndShow: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMOvieOrShow: (state) => {
            state.selectedMOvieAndShow = {}
        }
    },
    extraReducers: {
        [moviesAsyncFatch.pending]: () => {
            console.log('pending');
        },

        [moviesAsyncFatch.fulfilled]: (state, { payload }) => {
            console.log('success');
            return { ...state, movies: payload }
        },

        [moviesAsyncFatch.rejected]: () => {
            console.log('rejected');

        },

        [showAsyncFatch.fulfilled]: (state, { payload }) => {
            console.log('success');
            return { ...state, shows: payload }
        },

        [movieOrShowAsyncFatch.fulfilled]: (state, { payload }) => {
            console.log('success');
            return { ...state, selectedMOvieAndShow: payload }
        },
    }
})

export const { removeSelectedMOvieOrShow } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectedMOvieAndShow
export default movieSlice.reducer