import React from 'react';

interface IProps {
    favorites: {
        city: string
    }[],
    chooseFavorite: (index: number) => (event: React.FormEvent<HTMLButtonElement>) => void,
    removeFromfavorites: (index: number) => (event: React.FormEvent<HTMLButtonElement>) => void
}

const Favorites = ({ favorites, chooseFavorite, removeFromfavorites }: IProps) => (
    <div className="block-wrapper">
        <b>Избранное</b>
        <ul className="favorites-list">
            {favorites.map((favorite, i) => (
                <li className="favorite-item" key={i}>
                    <div className="input-group">
                        <button onClick={chooseFavorite(i)}>
                            {favorite.city}
                        </button>
                        <button title="Удалить из избранного"
                            onClick={removeFromfavorites(i)}>
                            x
                                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default Favorites;