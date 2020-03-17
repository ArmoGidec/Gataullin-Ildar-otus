import React, { Component, FormEvent } from 'react';

import '$src/assets/style/main.css';
import { weatherApiKey, apiBaseUrl } from '$src/config';

interface IProps { }

interface IState {
    searchValue: string,
    searchResult: {
        [key: string]: any
    } | null,
    fetching: boolean,
    favorites: {
        city: string
    }[]
}

class WeatherApp extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            searchValue: '',
            searchResult: null,
            fetching: false,
            favorites: [{ city: 'Ufa' }]
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getWeather = this.getWeather.bind(this);
        this.addToFavorite = this.addToFavorite.bind(this);
    }

    handleInput(e: FormEvent<HTMLInputElement>) {
        const searchValue = e.currentTarget.value;
        this.setState({ ...this.state, searchValue });
    }

    handleSubmit(e: FormEvent<HTMLFormElement>) {
        e?.preventDefault();
        this.getWeather();
    }

    async getWeather() {
        this.setState({ ...this.state, fetching: true });
        let searchResult = null
        const searchResponseResult = await fetch(
            `${apiBaseUrl}?appid=${weatherApiKey}&units=metric&q=${this.state.searchValue}`);
        if (searchResponseResult.status === 200) {
            const responseObj = await searchResponseResult.json()
            searchResult = {
                name: responseObj.name,
                ...responseObj.main
            };
        }
        this.setState({ ...this.state, fetching: false, searchResult });
    }

    addToFavorite() {
        const state = this.state;
        if (state.searchResult !== null) {
            const favorites = state.favorites.concat({ city: state.searchResult.name });
            this.setState({ ...state, favorites });
        }
    }

    chooseFavorite(index: number) {
        const favorite = this.state.favorites[index];
        this.setState({ ...this.state, searchValue: favorite.city }, this.getWeather);
    }

    removeFromfavorites(index: number) {
        const favorites = this.state.favorites.filter((_, i) => i !== index);
        this.setState({ ...this.state, favorites });
    }

    render() {
        const { searchResult, searchValue, fetching, favorites } = this.state;

        return (
            <div className="container">
                <h1>Погода</h1>
                <div className="block-wrapper">
                    <form onSubmit={this.handleSubmit} className="input-group">
                        <input placeholder="Введите город" type="text"
                            value={searchValue} onChange={this.handleInput} />
                        <button disabled={searchValue?.length === 0 || fetching} type="submit">
                            Показать
                        </button>
                    </form>
                </div>
                {favorites.length > 0 && (
                    <div className="block-wrapper">
                        <b>Избранное</b>
                        <ul className="favorites-list">
                            {favorites.map((favorite, i) => (
                                <li className="favorite-item" key={i}>
                                    <div className="input-group">
                                        <button onClick={this.chooseFavorite.bind(this, i)}>
                                            {favorite.city}
                                        </button>
                                        <button title="Удалить из избранного"
                                            onClick={this.removeFromfavorites.bind(this, i)}>
                                            x
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {searchResult !== null && (
                    <div className="block-wrapper">
                        <div className="result-block">
                            <b>{searchResult.name}</b>
                            {favorites.every(({ city }) => city !== searchResult.name) && (
                                <button className="add-favorite-btn" onClick={this.addToFavorite}>
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
                )}
            </div>
        )
    }
}

export default WeatherApp;