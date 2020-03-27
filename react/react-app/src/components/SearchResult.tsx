import React from 'react';

interface IProps {
    searchResult: {
        [key: string]: any
    },
    favorites: {
        city: string
    }[],
    addToFavorite: (event: React.FormEvent<HTMLButtonElement>) => void
}

const SearchResult = ({ searchResult, favorites, addToFavorite }: IProps) => (
    <div className="block-wrapper">
        <div className="result-block">
            <b>{searchResult.name}</b>
            {favorites.every(({ city }) => city !== searchResult.name) && (
                <button className="add-favorite-btn" onClick={addToFavorite}>
                    Добавить в избранное
                </button>
            )}
            <div className="temp-block">
                <span>Температура: {searchResult.temp}&#176; C</span>
                <span>Ощущается как {searchResult.feels_like}&#176; C</span>
                <span>Максимальная температура: {searchResult.temp_max}&#176; C</span>
                <span>Минимальная температура: {searchResult.temp_min}&#176; C</span>
            </div>
        </div>
    </div>
);

export default SearchResult;