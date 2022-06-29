import {useEffect} from "react";
import {getPokemons} from "./store/slices/pokemon";
import {useAppDispatch, useAppSelector} from "./store/slices/hooks";

export const PokemonApp = () => {

    const dispatch = useAppDispatch();
    const {isLoading, pokemons, page} = useAppSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(getPokemons())
    }, []);


    return (
        <div>
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: {isLoading ? 'True' : 'False'}</span>

            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                    )
                )}
            </ul>

            <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
                Next
            </button>
        </div>
    );
};