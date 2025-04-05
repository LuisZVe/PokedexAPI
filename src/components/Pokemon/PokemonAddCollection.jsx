import { useLocalStorage } from "../../services/localStorage";
import { Link } from "react-router";

export const PokemonAddCollection = ({
    Pokecod,
    name,
    url,
    imgSprite
}) => {
    const [pokeCollection, saveToPokeCollection] = useLocalStorage("mycollection", []);
    const isPokeMonInCollection = pokeCollection?.find(
        (pokemonItem) => pokemonItem.code === Pokecod
    );

    const onClickHandler = (e) => {
        const newPokeItem = {
            code: Pokecod,
            name: name,
            url: `https://pokeapi.co/api/v2/pokemon/${Pokecod}/`,
        };
        saveToPokeCollection([...pokeCollection, newPokeItem]);
    };

    return isPokeMonInCollection ? (
        <Link
            to="/my-collection"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
            Ver en mi colección
        </Link>
    ) : (
        <button
            onClick={onClickHandler}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
            Agregar a mi colección
        </button>
    );
};
