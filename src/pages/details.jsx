import { useParams } from "react-router";
import { Loading } from "../components/Loading";
import { usePokemonDetail } from "../services/pockemonapi";
import { PokemonAddCollection } from "../components/Pokemon/PokemonAddCollection";

export const Details = () => {
    const { pokeid } = useParams();
    const pokemonData = usePokemonDetail(pokeid);

    if (!pokemonData) {
        return <Loading />;
    }

    return (
        <section className="p-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-4 capitalize">{pokemonData.name}</h1>
            
            <div className="flex justify-center gap-4 mb-6">
                <img
                    className="w-32 h-32 object-contain bg-white border rounded-lg shadow"
                    src={pokemonData.sprites.front_default}
                    alt={`${pokemonData.name} front`}
                />
                <img
                    className="w-32 h-32 object-contain bg-white border rounded-lg shadow"
                    src={pokemonData.sprites.back_default}
                    alt={`${pokemonData.name} back`}
                />
            </div>

            <section>
                <p>
                    <strong>Pokemon Tipo: </strong>
                    {pokemonData.types.map((type) => type.type.name)}
                </p>
                <p>
                    <strong>Habilidades: </strong>
                    {pokemonData.abilities
                        .map((ability) => ability.ability.name)
                        .join(", ")}
                </p>
                <p >
                    <strong>Movimientos: </strong>
                    {pokemonData.moves
                        .map((move) => move.move.name)
                        .join(", ")}
                </p>
                <p>
                    <strong>Altura: </strong>
                    {pokemonData.height / 10 + " Metros"}
                </p>
                <p>
                    <strong>Peso: </strong>
                    {pokemonData.weight / 10 + " Kg"}
                </p>
                <p>
                    <strong>Juegos en los que aparece: </strong>
                    {pokemonData.game_indices
                        .map((game) => game.version.name)
                        .join(", ")}
                </p>
                <p>
                    <strong>Formas: </strong>
                    {pokemonData.forms
                        .map((form) => form.name)
                        .join(", ")}
                </p>

            </section>

            <div className="text-center mb-4">
                <PokemonAddCollection
                    Pokecod={pokeid}
                    imgSprite={pokemonData.sprites.front_default}
                    name={pokemonData.name}
                    url=""
                />
            </div>

        </section>
    );
};
