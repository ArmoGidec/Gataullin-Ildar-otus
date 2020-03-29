import React from 'react';
import FilterListItem from './FilterListItem';
import { ICity } from '$src/utils/db';

interface IProps {
    cities: ICity[]
}

const FilterList = ({ cities }: IProps) =>
    <ul>
        {cities.map(city => <FilterListItem city={city} key={city.id} />)}
    </ul>;

export default FilterList;