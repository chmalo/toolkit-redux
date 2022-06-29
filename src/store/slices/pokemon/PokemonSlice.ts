import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PokemonState} from "../../interfaces/Interfaces";

const initialState: PokemonState = {
    page: 0,
    pokemons: [],
    isLoading: false
}

export const PokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemons:(state, /* action */) => {
            state.isLoading = true;
        },
        setPokemons: (state, action:PayloadAction<PokemonState>) => {
           state.isLoading = false;
           state.page = action.payload.page;
           state.pokemons = action.payload.pokemons;
        }
    }
});

export const {startLoadingPokemons, setPokemons} = PokemonSlice.actions;