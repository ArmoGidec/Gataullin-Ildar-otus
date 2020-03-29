import React, { useState, FormEvent } from "react";
import '$src/assets/style/cityFilter.css';
import { ICity } from "$src/utils/db";
import FilterList from "./FilterList";

interface IProps {
    cities: ICity[]
}

const checkIncludes = (cityName: string, inputValue: string) =>
    cityName.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());

const CityFilter = ({ cities }: IProps) => {
    const [inputValue, setInput] = useState('');

    const changeInput = (e: FormEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    }

    return (
        <div className="block-wrapper">
            <div className="input-group filter-wrapper">
                <input type="text" className="filter-input" placeholder="Введите город"
                    onChange={changeInput} />
                <div className="filter-list">
                    <FilterList cities={cities.filter(({ en, ru }) =>
                        checkIncludes(en, inputValue) || checkIncludes(ru, inputValue))} />
                </div>
            </div>
        </div>
    )
};

export default CityFilter;