export interface PokemonState {
    page: number,
    pokemons: Array<Pokemon>,
    isLoading?: boolean
}

interface Pokemon {
    name: string
    url: string
}

export interface CounterState {
    counter: number
}