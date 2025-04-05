import { getPokemonImg } from "../../services/pockemonapi";
import { PokemonListItem } from "./PokemonListItem";

export const PokemonList = (
    {
        pokemonList,
        clickHandler = (code) => {}
    }
) => {
    return (
        <section className="pokemonList grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {pokemonList.map(
                (item) => {
                    return (
                        <PokemonListItem
                            key={item.name}
                            name={item.name}
                            url={item.url}
                            {...getPokemonImg(item.url)}
                            onClickHandler={clickHandler}
                        />
                    );
                }
            )}
        </section>
    );
}
