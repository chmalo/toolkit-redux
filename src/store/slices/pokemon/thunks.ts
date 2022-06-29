import {setPokemons, startLoadingPokemons} from "./PokemonSlice";
import {pokemonApi} from "../../../api/pokemonApi";
import {AppDispatch} from "../../store";


export const getPokemons = (page: number = 0) => {
    return async (dispatch: AppDispatch, getState: any) => {
        dispatch(startLoadingPokemons())

        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        dispatch(setPokemons({pokemons: data.results, page: page + 1}));
    }
}