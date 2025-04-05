export const PokemonListItem = (
    {
        code,
        name,
        url,
        imgSprite = 'https://picsum.photos/id/2/48/48',
        onClickHandler = (code) => {}
    }
) => {
    return (
        <div className="pokemonListItem flex gap-4 p-4 border border-gray-300 rounded-lg shadow-md max-w-[200px] flex-shrink-0">
            <img src={imgSprite} alt={name} className="w-24 h-24 object-cover rounded-md" />
            <div className="flex flex-col justify-between flex-1">
                <strong className="text-lg font-semibold">{name}</strong>
                <button
                    onClick={() => { onClickHandler(code); }}
                    className="mt-2 bg-indigo-500 text-white py-2 px-6 rounded-full hover:bg-indigo-600 transition w-full"
                >
                    Ver Detalle
                </button>
            </div>
        </div>
    );
}

