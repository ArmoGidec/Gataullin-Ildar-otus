import React, { Component, FormEvent } from 'react';

import '$src/assets/style/main.css';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import Favorites from './components/Favorites';
import api from './utils/api';

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
    }

    handleInput = (e: FormEvent<HTMLInputElement>) => {
        const searchValue = e.currentTarget.value;
        this.setState({ ...this.state, searchValue });
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        this.getWeather();
    }

    getWeather = async () => {
        this.setState({ ...this.state, fetching: true });
        let searchResult = await api.getWeather(this.state.searchValue);
        this.setState({ ...this.state, fetching: false, searchResult });
    }

    addToFavorite = () => {
        const state = this.state;
        if (state.searchResult !== null) {
            const favorites = state.favorites.concat({ city: state.searchResult.name });
            this.setState({ ...state, favorites });
        }
    }

    chooseFavorite = (index: number) => {
        return () => {
            const favorite = this.state.favorites[index];
            this.setState({ ...this.state, searchValue: favorite.city }, this.getWeather);
        }
    }

    removeFromfavorites = (index: number) => {
        return () => {
            const favorites = this.state.favorites.filter((_, i) => i !== index);
            this.setState({ ...this.state, favorites });
        }
    }

    render() {
        const { searchResult, searchValue, fetching, favorites } = this.state;

        return (
            <div className="container">
                <h1>Погода</h1>
                <div className="block-wrapper">
                    <SearchForm handleSubmit={this.handleSubmit}
                                handleInput={this.handleInput}
                                searchValue={searchValue}
                                fetching={fetching}/>
                </div>
                {favorites.length > 0 && (
                    <Favorites chooseFavorite={this.chooseFavorite}
                                favorites={favorites}
                                removeFromfavorites={this.removeFromfavorites}/>
                )}
                {searchResult !== null && (
                    <SearchResult searchResult={searchResult}
                                addToFavorite={this.addToFavorite}
                                favorites={favorites}/>
                )}
            </div>
        )
    }
}

export default WeatherApp;