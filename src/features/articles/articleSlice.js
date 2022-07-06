import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticles = createAsyncThunk(
    'articles/getArticles',
    async (searchTerm) => {
        console.log(searchTerm);
        return await fetch("https://www.reddit.com/r/" + searchTerm + ".json")
        .then(res => res.json())
        .then(data => data.data.children);
    }
)

const initialState = {
    articles: [],
    status: null,
    subreddit: 'webdev',
    filterText: '',
}

export const articleSlice = createSlice({
    name: 'articles',
    initialState: initialState,
    reducers: {
        changeSubreddit:(state, action) => {
            state.subreddit = action.payload;
        },
        changeFilter: (state, action) => {
            state.filterText = action.payload;
        }
    },
    extraReducers:{
        [getArticles.pending]:(state, action) => {
            state.status = "loading"
        },
        [getArticles.fulfilled]:(state, action) => {
            state.status = "success"
            state.articles = action.payload;
            console.log(state.articles)
        },
        [getArticles.rejected]: (state, action) => {
            state.status = "failed"
        }
    }
})

export const { changeFilter, changeSubreddit, updateArticles } = articleSlice.actions;

export default articleSlice.reducer;