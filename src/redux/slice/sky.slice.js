import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAsyncWeather = createAsyncThunk('sky/getAsyncWeather', async () => {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=bursa&units=metric&appid=dd461c720d542fd7391e47a87a657487');
    return await res.json();
}) 

export const skySlice = createSlice({
    name: 'sky',
    initialState: {
        weather: {},
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAsyncWeather.fulfilled, (state, action) => {
                state.isLoading = false;
                state.weather = action.payload;
            })
            .addCase(getAsyncWeather.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getAsyncWeather.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})


// Constant variables
export const sky = (state) => state.sky.weather;

export default skySlice.reducer;