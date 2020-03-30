import React, { useState, FormEvent, useRef, useEffect } from "react";
import '$src/assets/style/cityFilter.css';
import { ICity } from "$src/utils/db";
import FilterList from "./FilterList";

interface IProps {
    cities: ICity[]
}

const checkIncludes = (cityName: string, inputValue: string) =>
    cityName.toLowerCase().includes(inputValue.toLowerCase());

const CityFilter = ({ cities }: IProps) => {
    const [inputValue, setInput] = useState('');
    const listRef = useRef<HTMLDivElement>(null);

    const changeInput = (e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value; 
        setInput(value);
    };

    const clickHandler = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.classList.contains('filter-link')) {
            return;
        }

        const city = target.getAttribute('href')?.substr(1);
        setInput(city as string);
    };

    useEffect(() => {
        listRef.current?.addEventListener('click', clickHandler);
        return () => {
            listRef.current?.removeEventListener('click', clickHandler);
        }
    });

    return (
        <div className="block-wrapper">
            <div className="input-group filter-wrapper">
                <input type="text" className="filter-input" placeholder="Введите город"
                    onChange={changeInput} value={inputValue}/>
                <div className='filter-list' ref={listRef}>
                    <FilterList cities={cities.filter(({ en, ru }) =>
                        checkIncludes(en, inputValue) || checkIncludes(ru, inputValue))} />
                </div>
            </div>
        </div>
    )
};

export default CityFilter;